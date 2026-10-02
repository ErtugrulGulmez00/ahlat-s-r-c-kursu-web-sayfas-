# Logoyu koyu zemine uyarlar: beyaz arka plan -> şeffaf ("color to alpha"), siyah/gri mürekkep -> beyaz, kırmızılar korunur.
# Kullanım: logo.ps1 -Mode profile   (satır satır mürekkep yoğunluğu)
#           logo.ps1 -Mode build -CropBottom <y> -Out <dosya>
param([string]$Mode = 'profile', [int]$CropBottom = 0, [string]$Out = '')

Add-Type -AssemblyName System.Drawing
Add-Type -ReferencedAssemblies System.Drawing -TypeDefinition @"
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.Runtime.InteropServices;

public static class LogoTool {
    static byte[] Read(Bitmap src, out int w, out int h, out int stride) {
        w = src.Width; h = src.Height;
        var bmp = new Bitmap(w, h, PixelFormat.Format32bppArgb);
        using (var g = Graphics.FromImage(bmp)) g.DrawImage(src, 0, 0, w, h);
        var d = bmp.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.ReadOnly, PixelFormat.Format32bppArgb);
        stride = d.Stride;
        var buf = new byte[stride * h];
        Marshal.Copy(d.Scan0, buf, 0, buf.Length);
        bmp.UnlockBits(d); bmp.Dispose();
        return buf;
    }

    // Satır başına "mürekkep" (beyaz olmayan) piksel sayısı
    public static int[] RowInk(string path) {
        int w, h, stride;
        using (var src = new Bitmap(path)) {
            var buf = Read(src, out w, out h, out stride);
            var rows = new int[h];
            for (int y = 0; y < h; y++)
                for (int x = 0; x < w; x++) {
                    int i = y * stride + x * 4;
                    int mn = Math.Min(buf[i], Math.Min(buf[i + 1], buf[i + 2]));
                    if (mn < 170) rows[y]++;
                }
            return rows;
        }
    }

    public static string Build(string path, int cropBottom, string outPath) {
        int w, h, stride;
        using (var src = new Bitmap(path)) {
            var buf = Read(src, out w, out h, out stride);
            int H = cropBottom > 0 ? Math.Min(cropBottom, h) : h;
            var res = new byte[stride * H];
            int minX = w, minY = H, maxX = 0, maxY = 0;
            for (int y = 0; y < H; y++)
                for (int x = 0; x < w; x++) {
                    int i = y * stride + x * 4;
                    double b = buf[i], g = buf[i + 1], r = buf[i + 2];
                    // beyazdan uzaklık = opaklık (JPEG gürültüsünü kırp)
                    double a = 1.0 - Math.Min(r, Math.Min(g, b)) / 255.0;
                    a = (a - 0.08) / 0.92; if (a < 0) a = 0; if (a > 1) a = 1;
                    if (a < 0.02) { res[i] = res[i + 1] = res[i + 2] = res[i + 3] = 0; continue; }
                    // beyazın altındaki asıl renk
                    double R = (r - (1 - a) * 255) / a, G = (g - (1 - a) * 255) / a, B = (b - (1 - a) * 255) / a;
                    R = Math.Max(0, Math.Min(255, R)); G = Math.Max(0, Math.Min(255, G)); B = Math.Max(0, Math.Min(255, B));
                    bool red = R > 110 && R - Math.Max(G, B) > 60;
                    if (!red) { R = G = B = 255; }            // siyah/gri yazı -> beyaz
                    else { R = 230; G = 40; B = 32; }          // kırmızıyı tek, temiz tona çek
                    res[i] = (byte)B; res[i + 1] = (byte)G; res[i + 2] = (byte)R; res[i + 3] = (byte)Math.Round(a * 255);
                    if (a > 0.3) { if (x < minX) minX = x; if (x > maxX) maxX = x; if (y < minY) minY = y; if (y > maxY) maxY = y; }
                }
            var outBmp = new Bitmap(w, H, PixelFormat.Format32bppArgb);
            var od = outBmp.LockBits(new Rectangle(0, 0, w, H), ImageLockMode.WriteOnly, PixelFormat.Format32bppArgb);
            Marshal.Copy(res, 0, od.Scan0, res.Length);
            outBmp.UnlockBits(od);
            // boş kenarları kırp (biraz pay bırak)
            int pad = 6;
            var rect = Rectangle.FromLTRB(Math.Max(0, minX - pad), Math.Max(0, minY - pad), Math.Min(w, maxX + pad + 1), Math.Min(H, maxY + pad + 1));
            using (var crop = outBmp.Clone(rect, PixelFormat.Format32bppArgb)) crop.Save(outPath, ImageFormat.Png);
            outBmp.Dispose();
            return rect.Width + "x" + rect.Height;
        }
    }
}
"@

$src = 'C:\DEVPACKS\ahlat-surucu\images\logo.png'
if ($Mode -eq 'profile') {
  $rows = [LogoTool]::RowInk($src)
  # mürekkepli satır gruplarını yazdır
  $start = -1
  for ($y = 0; $y -lt $rows.Length; $y++) {
    $ink = $rows[$y] -gt 3
    if ($ink -and $start -lt 0) { $start = $y }
    if ((-not $ink -or $y -eq $rows.Length - 1) -and $start -ge 0) { "satir $start-$y"; $start = -1 }
  }
} else {
  [LogoTool]::Build($src, $CropBottom, $Out)
}
