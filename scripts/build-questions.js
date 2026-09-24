// Ehlio havuzundan sitedeki örnek deneme için sabit 50 soru üretir.
// Çalıştırma: node scripts/build-questions.js  (js/questions.js, images/levhalar/, images/gorsel-sorular/ ve videos/ yeniden yazılır)
const fs = require('fs'), path = require('path');
const APP = 'C:/DEVPACKS/ahlatsrc-mobil/ehlio';
const SITE = 'C:/DEVPACKS/ahlat-surucu';
const all = JSON.parse(fs.readFileSync(APP + '/assets/data/questions.json', 'utf8'));

// deterministik rastgelelik (mulberry32)
let seed = 20260924;
const rnd = () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

// MEB tarzı (examStyle) ve videolu sorular dışarıda
const pool = all.filter(q => !q.examStyle && !q.videoUrl && q.options && q.options.length === 4
  && (!q.imageUrl || fs.existsSync(path.join(APP, q.imageUrl))));
const names = { trafik: 'Trafik ve Çevre Bilgisi', ilk_yardim: 'İlk Yardım', motor: 'Motor ve Araç Tekniği', trafik_adabi: 'Trafik Adabı' };
const pick = (topic, n, visual) => shuffle(pool.filter(q => q.topic === topic && !!q.imageUrl === visual)).slice(0, n);

// 3B senaryo videoları: raporda telif kuralına göre yeniden yazıldığı belirtilen 22 Blender klibinden seçildi
const VIDEOS = ['anim3d_donel_kavsak_gecis', 'anim3d_okul_gecidi_ogrenci', 'anim3d_kirmizi_isik_kavsak',
                'anim3d_yaya_gecidi_yol_verme', 'anim3d_suruste_telefon'];
const vids = VIDEOS.map(id => all.find(q => q.id === id));
// Görselli senaryo soruları (assets/images/gorsel_sorular)
const PHOTOS = ['photo_q001', 'photo_q004', 'photo_q011', 'photo_q013', 'photo_q015'];
const photos = PHOTOS.map(id => all.find(q => q.id === id));
const chosen = [
  ...pick('trafik', 8, false), ...pick('trafik', 6, true), ...photos, ...vids.filter(q => q.topic === 'trafik'),
  ...pick('ilk_yardim', 12, false), ...pick('motor', 9, false),
  ...pick('trafik_adabi', 5, false), ...vids.filter(q => q.topic === 'trafik_adabi'),
];
if (chosen.length !== 50) throw new Error('only ' + chosen.length);

// doğru cevap hep aynı şıkta olmasın: şıkları karıştır, A-B-C-D dağılımını dengele
const out = chosen.map((q, i) => {
  const target = i % 4;
  const others = shuffle(q.options.filter((_, k) => k !== q.correctIndex));
  const options = [...others]; options.splice(target, 0, q.options[q.correctIndex]);
  const item = { id: i + 1, category: q.topic, categoryName: names[q.topic], question: q.text, options, correct: target, explanation: q.explanation || '' };
  if (q.imageUrl) {
    const dir = q.imageUrl.includes('gorsel_sorular') ? 'images/gorsel-sorular' : 'images/levhalar';
    const file = q.id.replace(/[^a-z0-9_]/gi, '') + path.extname(q.imageUrl).toLowerCase();
    fs.copyFileSync(path.join(APP, q.imageUrl), path.join(SITE, dir, file));
    item.image = dir + '/' + file;
    if (dir === 'images/gorsel-sorular') item.scene = true;
  }
  if (q.videoUrl) {
    const file = path.basename(q.videoUrl);
    fs.copyFileSync(path.join(APP, q.videoUrl), path.join(SITE, 'videos', file));
    item.video = 'videos/' + file;
  }
  return item;
});
// sınavda konular karışık gelsin ama doğru şık dağılımı bozulmasın diye sırayı ayrıca karıştır
const final = shuffle(out).map((q, i) => ({ ...q, id: i + 1 }));

const body = final.map(q => '  ' + JSON.stringify(q)).join(',\n');
fs.writeFileSync(SITE + '/js/questions.js',
`// Örnek deneme sınavı – 50 soru, 6 levha + 5 görsel senaryo + 5 video (23 trafik, 12 ilk yardım, 9 motor, 6 trafik adabı).
// Ehlio uygulamasının soru havuzundan otomatik seçildi; elle düzenlemeyin.
const questions = [
${body}
];
`);
const dist = {}; final.forEach(q => dist[q.categoryName] = (dist[q.categoryName] || 0) + 1);
const cor = [0,0,0,0]; final.forEach(q => cor[q.correct]++);
console.log(dist, 'correct A-D:', cor, 'images:', final.filter(q => q.image).length, 'scenes:', final.filter(q => q.scene).length, 'videos:', final.filter(q => q.video).length);
