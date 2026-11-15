const fs = require('fs');
const path = require('path');
const vm = require('vm');

const KENARI_BASE_URL = (process.env.KENARI_BASE_URL || 'https://kenari.id/v1').replace(/\/+$/, '');

let serverKatex = null;
try {
  const kPath = path.join(__dirname, '..', 'vendor', 'katex', 'katex.min.js');
  if (fs.existsSync(kPath)) {
    const kCode = fs.readFileSync(kPath, 'utf8');
    const ctx = { window: {}, self: {}, console: console };
    ctx.window = ctx;
    ctx.self = ctx;
    vm.createContext(ctx);
    vm.runInContext(kCode, ctx);
    if (ctx.katex && typeof ctx.katex.renderToString === 'function') {
      serverKatex = ctx.katex;
    }
  }
} catch (e) {}

const FREE_MODELS = [
  'glm-4-7-flash:free',
  'qwen3-8-omni-flash:free',
  'laguna-xs-2-1:free'
];

const DIVISION_INFO = {
  bph: {
    name: 'Badan Pengurus Harian (BPH)',
    short: 'BPH',
    type: 'bph',
    reportCard: 'https://ipb.link/report-card-2-bph',
    webUrl: 'https://bemssmi.com/birdept/bph',
    instagram: '@bemssmi_bph',
    instagramUrl: 'https://instagram.com/bemssmi_bph',
    desc: 'Badan Pengurus Harian berperan sebagai badan inti atau eksekutif tertinggi yang bertanggung jawab atas pengelolaan BEM SSMI sehari-hari, pengarah, dan penanggung jawab tertinggi bidang administratif maupun operasional.',
    picName: '',
    picRole: 'Badan Pengurus Harian',
    picWa: ''
  },
  eksmit: {
    name: 'Eksternal, Bisnis, dan Kemitraan (Eksmit)',
    short: 'EKSMIT',
    type: 'biro',
    reportCard: 'https://ipb.link/report-card-2-eksmit',
    webUrl: 'https://bemssmi.com/birdept/eksmit',
    desc: 'Biro Eksternal, Bisnis, dan Kemitraan BEM SSMI berperan dalam membangun kerja sama eksternal, mengelola kemitraan, serta mengembangkan potensi bisnis dan sirkulasi keuangan BEM.',
    picName: '',
    picRole: 'Biro Eksternal, Bisnis, dan Kemitraan',
    picWa: ''
  },
  imbang: {
    name: 'Internal dan Pengembangan (Imbang)',
    short: 'IMBANG',
    type: 'biro',
    reportCard: 'https://ipb.link/report-card-2-imbang',
    webUrl: 'https://bemssmi.com/birdept/imbang',
    desc: 'Biro Internal dan Pengembangan BEM SSMI berperan dalam pengelolaan kualitas fungsionaris dan stabilitas internal, pemantauan kinerja, serta pemfasilitasan pengembangan soft skill dan hard skill.',
    picName: '',
    picRole: 'Biro Internal dan Pengembangan',
    picWa: ''
  },
  medbrand: {
    name: 'Media Branding (Medbrand)',
    short: 'MEDBRAND',
    type: 'biro',
    reportCard: 'https://ipb.link/report-card-2-medbrand',
    webUrl: 'https://bemssmi.com/birdept/medbrand',
    instagram: '@medbrandnyasesemi',
    instagramUrl: 'https://instagram.com/medbrandnyasesemi',
    desc: 'Biro Media Branding BEM SSMI berperan dalam pengelolaan citra dan identitas visual BEM, komunikasi antara BEM dengan KM SSMI melalui media kreatif, publikasi, dan informasi relevan.',
    picName: '',
    picRole: 'Biro Media Branding',
    picWa: ''
  },
  ristek: {
    name: 'Riset dan Teknologi (Ristek)',
    short: 'RISTEK',
    type: 'biro',
    reportCard: 'https://ipb.link/report-card-2-ristek',
    webUrl: 'https://bemssmi.com/birdept/ristek',
    instagram: '@rizzteknologia',
    instagramUrl: 'https://instagram.com/rizzteknologia',
    desc: 'Biro Riset dan Teknologi BEM SSMI berperan dalam pengumpulan data akurat, analisis kebutuhan, serta inovasi teknologi untuk memperkuat tata kelola progresif dan efisien (pengembang Website MSPACE & sistem digital).',
    picName: '',
    picRole: 'Biro Riset dan Teknologi',
    picWa: ''
  },
  adkesmah: {
    name: 'Dept. Advokasi dan Kesejahteraan Mahasiswa (Adkesmah)',
    short: 'ADKESMAH',
    type: 'departemen',
    reportCard: 'https://ipb.link/report-card-2-adkesmah',
    webUrl: 'https://bemssmi.com/birdept/adkesmah',
    hotline: '0855-1010-901',
    desc: 'Departemen Advokasi dan Kesejahteraan Mahasiswa BEM SSMI berperan dalam peningkatan kesejahteraan mahasiswa melalui pendampingan kesehatan mental, dukungan finansial/beasiswa, serta advokasi responsif.',
    picName: '',
    picRole: 'Dept. Advokasi dan Kesejahteraan Mahasiswa',
    picWa: ''
  },
  akpres: {
    name: 'Dept. Akademik dan Prestasi (Akpres)',
    short: 'AKPRES',
    type: 'departemen',
    reportCard: 'https://ipb.link/report-card-2-akpres',
    webUrl: 'https://bemssmi.com/birdept/akpres',
    desc: 'Departemen Akademik dan Prestasi BEM SSMI berperan dalam memotivasi dan memfasilitasi partisipasi KM dalam kompetisi sains/prestasi, pendampingan kontingen, serta apresiasi pencapaian prestasi.',
    picName: '',
    picRole: 'Dept. Akademik dan Prestasi',
    picWa: ''
  },
  kastrat: {
    name: 'Dept. Kajian dan Aksi Strategis (Kastrat)',
    short: 'KASTRAT',
    type: 'departemen',
    reportCard: 'https://ipb.link/report-card-2-kastrat',
    webUrl: 'https://bemssmi.com/birdept/kastrat',
    desc: 'Departemen Kajian dan Aksi Strategis BEM SSMI berperan dalam peningkatan pola berpikir kritis, wadah dialektika KM, serta analisis dan penyikapan isu politik dan kebijakan publik.',
    picName: '',
    picRole: 'Dept. Kajian dan Aksi Strategis',
    picWa: ''
  },
  depor: {
    name: 'Dept. Olahraga (Depor)',
    short: 'DEPOR',
    type: 'departemen',
    reportCard: 'https://ipb.link/report-card-2-depor',
    webUrl: 'https://bemssmi.com/birdept/depor',
    desc: 'Departemen Olahraga BEM SSMI berperan dalam peningkatan minat dan bakat keolahragaan KM, pembinaan, serta fasilitator kegiatan olahraga untuk sportivitas dan kebugaran.',
    picName: '',
    picRole: 'Dept. Olahraga',
    picWa: ''
  },
  psdmk: {
    name: 'Dept. Pengembangan SDM dan Karir (PSDMK)',
    short: 'PSDMK',
    type: 'departemen',
    reportCard: 'https://ipb.link/report-card-2-psdmk',
    webUrl: 'https://bemssmi.com/birdept/psdmk',
    desc: 'Departemen Pengembangan Sumber Daya Mahasiswa dan Karir BEM SSMI berperan dalam peningkatan kualitas, pembinaan, dan pengembangan potensi sumber daya mahasiswa guna menunjang kesiapan karir masa depan.',
    picName: '',
    picRole: 'Dept. Pengembangan SDM dan Karir',
    picWa: ''
  },
  senbud: {
    name: 'Dept. Seni Budaya (Senbud)',
    short: 'SENBUD',
    type: 'departemen',
    reportCard: 'https://ipb.link/report-card-2-senbud',
    webUrl: 'https://bemssmi.com/birdept/senbud',
    desc: 'Departemen Seni Budaya BEM SSMI berperan dalam pengelolaan potensi serta ekspresi kreatif KM di bidang seni budaya melalui kegiatan edukatif, kolaboratif, dan apresiasi karya.',
    picName: '',
    picRole: 'Dept. Seni Budaya',
    picWa: ''
  },
  sosling: {
    name: 'Dept. Sosial dan Lingkungan (Sosling)',
    short: 'SOSLING',
    type: 'departemen',
    reportCard: 'https://ipb.link/report-card-2-sosling',
    webUrl: 'https://bemssmi.com/birdept/sosling',
    desc: 'Departemen Sosial dan Lingkungan BEM SSMI berperan dalam perancangan dan pelaksanaan program pemberdayaan masyarakat yang inklusif serta pelestarian lingkungan berkelanjutan.',
    picName: '',
    picRole: 'Dept. Sosial dan Lingkungan',
    picWa: ''
  },
  sc: {
    name: 'Steering Committee (SC)',
    short: 'SC',
    type: 'sc',
    reportCard: 'https://ipb.link/report-card-2-sc',
    webUrl: 'https://bemssmi.com',
    desc: 'Steering Committee berperan sebagai badan pengarah dan penasihat strategis organisasi bagi BEM SSMI IPB University Kabinet Langkah Berdikari.',
    picName: '',
    picRole: 'Steering Committee',
    picWa: ''
  }
};

const SYSTEM_INSTRUCTION = `Anda adalah Langkari AI, asisten kecerdasan buatan resmi untuk BEM SSMI (Badan Eksekutif Mahasiswa Sekolah Sains Data, Matematika dan Informatika) IPB University, Kabinet Langkah Berdikari.
Website Resmi: https://bemssmi.com | Slogan: "Merajut Langkah, Mengukir Arah"

Pengetahuan Resmi Organisasi (Berdasarkan Portal Resmi https://bemssmi.com):
1. TENTANG BEM SSMI:
   Organisasi eksekutif tingkat fakultas/sekolah di bawah naungan IPB University pada Sekolah Sains Data, Matematika dan Informatika (SSMI).
2. VISI BEM SSMI:
   Mewujudkan BEM SSMI IPB sebagai inisiator, aktivator, dan katalisator dalam merealisasikan KM SSMI yang sejahtera serta menumbuhkan kolaborasi berkelanjutan, demi terciptanya kemajuan KM SSMI yang menyeluruh.
3. 5 MISI RESMI:
   - Menyelaraskan visi dan arah gerak seluruh elemen KM SSMI sebagai landasan berpikir yang terintegrasi melalui sinkronisasi gagasan dan penguatan kemitraan strategis.
   - Membangun tata kelola organisasi yang progresif, adaptif, dan berkelanjutan untuk memberi kebermanfaatan nyata melalui profesionalisme birokrasi, serta manajemen risiko yang terukur.
   - Mengoptimalkan kesejahteraan dan kapasitas KM SSMI melalui sistem pelayanan advokasi yang terpadu dan program pengembangan diri yang relevan.
   - Mewadahi dan memfasilitasi kontribusi gagasan, serta aksi nyata KM SSMI melalui kajian strategis yang solutif dan program pengabdian masyarakat yang kolaboratif.
   - Menjaga dan menguatkan citra positif BEM SSMI, serta menjadi pusat informasi inspiratif melalui komunikasi publik yang kreatif, masif, dan mudah diakses oleh seluruh civitas SSMI.
4. FILOSOFI LOGO LANGKAH BERDIKARI:
   - Merpati: Simbol ketenangan, kesetiaan, dan perdamaian; melangkah maju secara konsisten dan berakar pada nilai sendiri.
   - Akar Pohon: Ekor merpati menyerupai akar pohon yang merepresentasikan fondasi kuat dan sumber kehidupan.
   - Dua Helai Daun: Keseimbangan dan keberlanjutan, harmoni antara manusia dan alam serta individu dan komunitas.
   - Ombak: Gerak dinamis yang terus berulang, ketangguhan menghadapi tantangan, dan konsistensi membuka peluang.
   - Lingkaran: Perlindungan, keutuhan, dan keterhubungan inklusif yang merangkul seluruh himpunan profesi di SSMI IPB.
5. 12 UNIT RESMI (BIRO & DEPARTEMEN):
   - BPH (Badan Pengurus Harian) | IG: @bemssmi_bph
   - Biro Eksternal, Bisnis, dan Kemitraan (Eksmit)
   - Biro Internal dan Pengembangan (Imbang) | Proker: FIRST STEP OF LANGKARI
   - Biro Media Branding (Medbrand) | IG: @medbrandnyasesemi
   - Biro Riset dan Teknologi (Ristek) | IG: @rizzteknologia | Proker: Website MSPACE
   - Departemen Advokasi dan Kesejahteraan Mahasiswa (Adkesmah) | Proker: BEMA | Hotline WA: 0855-1010-901
   - Departemen Akademik dan Prestasi (Akpres) | Proker: SSMI Goes to IPB Excellence Challenge
   - Departemen Kajian dan Aksi Strategis (Kastrat)
   - Departemen Olahraga (Depor)
   - Departemen Pengembangan Sumber Daya Mahasiswa dan Karir (PSDMK)
   - Departemen Seni Budaya (Senbud)
   - Departemen Sosial dan Lingkungan (Sosling)

6. ATURAN KONTAK KETUA/PIC DIVISI:
   Nomor kontak pribadi ketua divisi saat ini dikosongkan/belum dipublikasikan demi privasi fungsionaris. Arahkan pengguna ke tautan Report Card resmi, website https://bemssmi.com, Instagram resmi divisi (@bemssmi_bph, @medbrandnyasesemi, @rizzteknologia), atau Hotline Advokesma BEM SSMI (0855-1010-901). DILARANG mengarang nomor telepon atau nama fungsionaris.

7. BANTUAN AKADEMIK & MATEMATIKA / SAINS:
   Bantu mahasiswa memahami soal matematika, kalkulus, statistika, aljabar, dan sains dasar. WAJIB menggunakan format LaTeX standar: $...$ untuk rumus sebaris (inline) dan $$...$$ untuk persamaan terpisah (display).

8. BANTUAN PEMROGRAMAN (SEDERHANA, AMAN, EDUKATIF):
   Hanya berikan contoh kode sederhana, aman, dan ringkas untuk keperluan tugas akademik mahasiswa (Python/JS/HTML/CSS dasar). Dilarang keras kode eksploitasi, hacking, atau script berbahaya.

BATASAN KETAT & PERTAHANAN KEAMANAN:
- LARANGAN KONTEN SEKSUAL & VULGAR: Tolak secara lugas dengan format pembatasan akses ("Akses Dibatasi"). Hindari kata-kata berkhotbah atau berbelit-belit.
- LARANGAN POLITIK PRAKTIS & PARTISAN (Prabowo, Jokowi, Gibran, Anies, Ganjar, partai politik, pemilu/pilkada partisan): Tolak secara lugas dengan format "Akses Dibatasi" demi menjaga netralitas informasi.
- SIKAP & GAYA BAHASA: Bertindaklah layaknya asisten kecerdasan buatan (AI) modern yang cerdas, objektif, netral, dan profesional. Anda memahami seluruh domain pengetahuan program BEM Langkah Berdikari dan SSMI IPB, namun hindari gaya bahasa kaku seperti "Langkari AI berkomitmen" atau "Sebagai asisten resmi". Tanggapi secara natural, lugas, dan solutif.

Gunakan bahasa Indonesia yang santun, solutif, ramah, dan terstruktur rapi.`;

const POLITICAL_TERMS_REGEX = /\b(politik|partai(\s*politik)?|parpol|pemilu|pilpres|pilkada|caleg|paslon|coblos|timses|koalisi|oposisi|dinasti\s*politik|debat\s*capres|prabowo|subianto|wowo|bowo|gemoy|jokowi|joko\s*widodo|wiwi|owi|mulyono|pakde\s*jokowi|gibran|rakabuming|fufufafa|samsul|belimbing\s*sayur|anies|baswedan|wan\s*abud|abah\s*anies|ganjar|pranowo|den\s*ganjar|mahfud(\s*md)?|muhaimin|cak\s*imin|megawati|bu\s*mega|mak\s*banteng|kaesang|bahlil|luhut(\s*binsar)?|ridwan\s*kamil|kang\s*emil|sby|yudhoyono|capres|cawapres|pdi-?p|gerindra|golkar|pks|nasdem|pkb|demokrat|pan|psi|perindo|ppp)\b/gi;

const HACKING_AND_SECURITY_REGEX = /(ignore\s*(all)?\s*previous\s*instructions|abaikan\s*(semua)?\s*instruksi\s*(sebelumnya)?|jailbreak|dan\s*mode|developer\s*mode|unrestricted\s*mode|do\s*anything\s*now|\b(hack|hacking|hacker|ngehack|heker|retas|meretas|peretasan)\b|nasa|\b(exploit|exploiting|eksploitasi|cyber\s*attack|defacing|deface|carding|pentest)\b|sql\s*injection|sqli|reverse\s*shell|payload\s*shell|keylogger|ransomware|trojan(\s*horse)?|malware|ddos(\s*attack)?|brute\s*force|bypass\s*(login|auth|password|admin)|buatkan\s*(script|kode|tool)\s*(hack|cheat|phishing|deface|exploit))/i;

const NEUTRALITY_RESPONSE_TEXT = `### AKSES DIBATASI

Permintaan tidak dapat diproses. Akses dibatasi untuk menjaga netralitas informasi dari pembahasan politik praktis atau opini partisan.

Silakan ajukan pertanyaan seputar kegiatan kemahasiswaan, akademik, administrasi kampus, atau informasi program di Langkah Berdikari.`;

const CYBER_SECURITY_RESPONSE_TEXT = `### AKSES DIBATASI

Permintaan tidak dapat diproses. Akses dibatasi untuk aktivitas yang berkaitan dengan peretasan, instruksi eksploitasi keamanan, malware, atau script berbahaya.

Silakan ajukan pertanyaan seputar logika pemrograman dasar, algoritma edukatif, matematika, atau materi perkuliahan lainnya.`;

const SEXUAL_CONTENT_RESPONSE_TEXT = `### AKSES DIBATASI

Permintaan tidak dapat diproses. Akses dibatasi untuk materi dewasa, konten seksual, atau konten eksplisit.

Silakan ajukan pertanyaan seputar kegiatan kemahasiswaan, topik akademik, perkuliahan, atau layanan kampus.`;

function checkContentGuardrail(text) {
  if (!text) return null;
  const lower = text.toLowerCase();

  const sexualPatterns = [
    /\b(seks|sex|bokep|porno|porn|ngentot|colmek|masturbasi|kontol|memek|bugil|lendir|erotis|desah|vagina|penis|payudara|tetek|toket|nude|nsfw|fetish|hentai)\b/i,
    /(open\s*bo|bispak|bisyar|film\s*dewasa|video\s*dewasa|hubungan\s*intim|gambar\s*telanjang)/i
  ];
  for (const p of sexualPatterns) {
    if (p.test(lower)) {
      return SEXUAL_CONTENT_RESPONSE_TEXT;
    }
  }

  if (HACKING_AND_SECURITY_REGEX.test(text)) {
    return CYBER_SECURITY_RESPONSE_TEXT;
  }

  POLITICAL_TERMS_REGEX.lastIndex = 0;
  if (POLITICAL_TERMS_REGEX.test(text)) {
    return NEUTRALITY_RESPONSE_TEXT;
  }

  return null;
}

function sanitizeAiOutput(rawText) {
  if (!rawText) return rawText;

  POLITICAL_TERMS_REGEX.lastIndex = 0;
  if (POLITICAL_TERMS_REGEX.test(rawText)) {
    return NEUTRALITY_RESPONSE_TEXT;
  }

  if (HACKING_AND_SECURITY_REGEX.test(rawText)) {
    return CYBER_SECURITY_RESPONSE_TEXT;
  }

  return rawText;
}

function replacePoliticalKeywords(text) {
  return text;
}

const escapeHtml = s =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function generateDivisionActionHtml(divKey, intent = 'all') {
  const d = DIVISION_INFO[divKey];
  if (!d) return '';

  const reportCardBtn = d.reportCard ? `
    <a href="${d.reportCard}" target="_blank" rel="noopener noreferrer" class="chat-action-btn chat-report-btn">
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
      <span>Buka Report Card ${d.short}</span>
    </a>
  ` : '';

  let secondaryBtn = '';
  if (d.instagramUrl) {
    secondaryBtn = `
      <a href="${d.instagramUrl}" target="_blank" rel="noopener noreferrer" class="chat-action-btn" style="background:#E1306C; color:#FFFFFF;">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        <span>Instagram ${d.instagram}</span>
      </a>
    `;
  } else if (d.webUrl) {
    secondaryBtn = `
      <a href="${d.webUrl}" target="_blank" rel="noopener noreferrer" class="chat-action-btn" style="background:#2563EB; color:#FFFFFF;">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"></path></svg>
        <span>Portal ${d.short} (bemssmi.com)</span>
      </a>
    `;
  }

  let btns = '';
  if (intent === 'instagram') {
    btns = secondaryBtn || '';
  } else if (intent === 'report_card') {
    btns = reportCardBtn || '';
  } else {
    btns = `${reportCardBtn}${secondaryBtn}`;
  }

  if (!btns) return '';

  const roleText = d.type === 'bph' ? 'Badan Pengurus Harian' : (d.type === 'biro' ? 'Biro Resmi BEM SSMI' : (d.type === 'sc' ? 'Steering Committee' : 'Departemen Resmi BEM SSMI'));

  return `
<div class="chat-division-actions">
  <div class="chat-action-header">
    <div class="chat-action-badge">📌 Layanan Resmi ${d.short}</div>
    <div class="chat-action-lead">Unit: <strong>${d.name}</strong> <span class="chat-pic-role">(${roleText})</span></div>
  </div>
  <div class="chat-btn-group">
    ${btns}
  </div>
</div>`;
}

function detectAndAttachDivisionButtons(html, raw, userPrompt = '') {
  const promptLower = (userPrompt || '').toLowerCase();
  const rawLower = (raw || '').toLowerCase();

  const isAskingIg = /\b(instagram|ig|sosmed|medsos|akun ig)\b/.test(promptLower);
  const isAskingReport = /\b(report\s*card|rapor|laporan|kpi|evaluasi)\b/.test(promptLower);

  let intent = 'all';
  if (isAskingIg && !isAskingReport) {
    intent = 'instagram';
  } else if (isAskingReport && !isAskingIg) {
    intent = 'report_card';
  }

  const added = new Set();
  let buttonsHtml = '';

  const divisionKeywords = {
    sc: ['steering committee', 'report-card-2-sc', 'steering', 'sc'],
    bph: ['bph', 'badan pengurus harian', 'sekretaris jenderal', 'bendahara kabinet'],
    psdmk: ['psdmk', 'pengembangan sumber daya mahasiswa dan karir', 'karir mahasiswa', 'pelatihan karir'],
    medbrand: ['medbrand', 'media branding', 'media kreatif', 'desain komunikasi', 'desain visual'],
    eksmit: ['eksmit', 'eksternal bisnis', 'kemitraan', 'sponsorship', 'bisnis mahasiswa'],
    kastrat: ['kastrat', 'kajian strategis', 'aksi strategis', 'isu kebijakan', 'dialektika'],
    ristek: ['ristek', 'riset dan teknologi', 'mspace', 'inovasi digital', 'sistem informasi'],
    sosling: ['sosling', 'sosial dan lingkungan', 'lingkungan hidup', 'pengabdian masyarakat', 'desa binaan'],
    adkesmah: ['adkesmah', 'advokasi dan kesejahteraan', 'keringanan ukt', 'advokesma', 'bema'],
    akpres: ['akpres', 'akademik dan prestasi', 'kompetisi sains', 'ipb excellence challenge'],
    depor: ['depor', 'departemen olahraga', 'turnamen olahraga', 'keolahragaan'],
    senbud: ['senbud', 'seni budaya', 'kreasi seni', 'panggung apresiasi'],
    imbang: ['imbang', 'internal dan pengembangan', 'first step of langkari', 'fungsionaris']
  };

  if (promptLower.trim().length > 0) {
    for (const [key, patterns] of Object.entries(divisionKeywords)) {
      for (const pat of patterns) {
        var isMatch = (pat === 'sc') ? /\bsc\b/i.test(promptLower) : promptLower.includes(pat);
        if (isMatch && !added.has(key)) {
          added.add(key);
          buttonsHtml += generateDivisionActionHtml(key, intent);
          break;
        }
      }
    }
  }

  if (added.size === 0) {
    for (const [key, patterns] of Object.entries(divisionKeywords)) {
      for (const pat of patterns) {
        var isMatchRaw = (pat === 'sc') ? /\bsc\b/i.test(rawLower) : rawLower.includes(pat);
        if (isMatchRaw && !added.has(key)) {
          added.add(key);
          buttonsHtml += generateDivisionActionHtml(key, intent);
          break;
        }
      }
    }
  }

  return buttonsHtml ? `${html}${buttonsHtml}` : html;
}

const formatReply = (raw, userPrompt = '') => {
  if (!raw) return '';

  const codeBlocks = [];
  let processed = raw.replace(/```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g, (match, lang, code) => {
    const placeholder = `__CODE_BLOCK_${codeBlocks.length}__`;
    codeBlocks.push({ lang: lang || 'code', code: code });
    return placeholder;
  });

  const displayMathBlocks = [];
  processed = processed.replace(/\$\$([\s\S]*?)\$\$/g, (match, math) => {
    const placeholder = `__DISPLAY_MATH_${displayMathBlocks.length}__`;
    displayMathBlocks.push(math.trim());
    return placeholder;
  });
  processed = processed.replace(/\\\[([\s\S]*?)\\\]/g, (match, math) => {
    const placeholder = `__DISPLAY_MATH_${displayMathBlocks.length}__`;
    displayMathBlocks.push(math.trim());
    return placeholder;
  });

  const inlineMathBlocks = [];
  processed = processed.replace(/\$([^\$\n]+?)\$/g, (match, math) => {
    const placeholder = `__INLINE_MATH_${inlineMathBlocks.length}__`;
    inlineMathBlocks.push(math.trim());
    return placeholder;
  });
  processed = processed.replace(/\\\(([\s\S]*?)\\\)/g, (match, math) => {
    const placeholder = `__INLINE_MATH_${inlineMathBlocks.length}__`;
    inlineMathBlocks.push(math.trim());
    return placeholder;
  });

  let html = escapeHtml(processed);

  html = html
    .replace(/^#### (.*?)$/gm, '<h5 style="margin:4px 0 6px 0; color:#31487A; font-weight:700;">$1</h5>')
    .replace(/^### (.*?)$/gm, '<h4 style="margin:6px 0 8px 0; color:#31487A; font-weight:700;">$1</h4>')
    .replace(/^## (.*?)$/gm, '<h3 style="margin:8px 0 10px 0; color:#31487A; font-weight:800;">$1</h3>')
    .replace(/^# (.*?)$/gm, '<h2 style="margin:10px 0 12px 0; color:#31487A; font-weight:800;">$1</h2>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code class="inline-code" style="background:rgba(49,72,122,0.08); padding:2px 6px; border-radius:4px; font-family:monospace; font-size:12.5px;">$1</code>')
    .replace(/\n\n/g, '<br><br>')
    .replace(/\n[-•] /g, '<br>• ')
    .replace(/\n/g, '<br>');

  inlineMathBlocks.forEach((math, i) => {
    if (serverKatex) {
      try {
        const rendered = serverKatex.renderToString(math, { displayMode: false, throwOnError: false });
        html = html.replace(`__INLINE_MATH_${i}__`, () => `<span class="katex-inline-math">${rendered}</span>`);
        return;
      } catch (e) {}
    }
    html = html.replace(`__INLINE_MATH_${i}__`, () => `$${math}$`);
  });

  displayMathBlocks.forEach((math, i) => {
    if (serverKatex) {
      try {
        const rendered = serverKatex.renderToString(math, { displayMode: true, throwOnError: false });
        html = html.replace(`__DISPLAY_MATH_${i}__`, () => `<div class="katex-math-display">${rendered}</div>`);
        return;
      } catch (e) {}
    }
    html = html.replace(`__DISPLAY_MATH_${i}__`, () => `$$${math}$$`);
  });

  codeBlocks.forEach((item, i) => {
    const langDisplay = (item.lang || 'CODE').toUpperCase();
    const safeCode = escapeHtml(item.code);
    const codeCard = `<div class="gemini-code-card"><div class="code-card-header"><span class="code-card-lang">${langDisplay}</span><button type="button" class="copy-code-btn" onclick="copySnippetCode(this)" title="Salin Kode"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg><span>Salin</span></button></div><pre class="code-card-pre"><code class="language-${escapeHtml(item.lang)}">${safeCode}</code></pre></div>`;
    html = html.replace(`__CODE_BLOCK_${i}__`, () => codeCard);
  });

  return detectAndAttachDivisionButtons(html, raw, userPrompt);
};

async function callKenariChat(model, prompt, images, apiKey, externalSignal) {
  const url = `${KENARI_BASE_URL}/chat/completions`;
  const imageList = Array.isArray(images) ? images : (images && (images.data || images.dataUrl) ? [images] : []);

  let userContent;
  if (imageList.length > 0) {
    userContent = [
      { type: 'text', text: prompt || 'Jelaskan dan analisis gambar terlampir secara detail dalam konteks kegiatan atau informasi yang terlihat.' }
    ];
    for (const img of imageList) {
      if (img && (img.data || img.dataUrl)) {
        const rawData = img.data || img.dataUrl;
        const dataUrl = rawData.startsWith('data:')
          ? rawData
          : `data:${img.mimeType || img.type || 'image/jpeg'};base64,${rawData}`;
        userContent.push({
          type: 'image_url',
          image_url: { url: dataUrl }
        });
      }
    }
  } else {
    userContent = prompt || 'Halo, jelaskan peranmu sebagai Langkari AI.';
  }

  const payload = {
    model: model,
    messages: [
      { role: 'system', content: SYSTEM_INSTRUCTION },
      { role: 'user', content: userContent }
    ],
    temperature: 0.6,
    max_tokens: 1024
  };

  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify(payload)
  };
  if (externalSignal) {
    fetchOptions.signal = externalSignal;
  }

  return fetch(url, fetchOptions);
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'GET') {
    return res.status(200).json({
      models: FREE_MODELS,
      defaultModel: process.env.DEFAULT_AI_MODEL || 'glm-4-7-flash:free'
    });
  }

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  const DEFAULT_KENARI_KEY = 'kn-96db98261eaf3a42df0ccdf83ccf1f26d11059e6b717850d';
  const apiKey = (process.env.LANGKARI_AI_KEY && !process.env.LANGKARI_AI_KEY.includes('your-'))
    ? process.env.LANGKARI_AI_KEY
    : ((process.env.KENARI_API_KEY && !process.env.KENARI_API_KEY.includes('your-kenari-api-key'))
        ? process.env.KENARI_API_KEY
        : DEFAULT_KENARI_KEY);

  if (!apiKey) {
    return res.status(200).json({
      reply: 'Layanan AI Gateway belum terhubung dengan benar di server hosting. Silakan hubungi administrator sistem.',
      rawReply: 'AI_KEY belum dikonfigurasi.',
      error: true,
      code: 'MISSING_API_KEY'
    });
  }

  try {
    const { prompt, image, images, model } = req.body || {};
    const imageList = Array.isArray(images) ? images : (image && (image.data || image.dataUrl) ? [image] : []);
    if (!prompt && imageList.length === 0) return res.status(400).json({ error: 'Prompt or image is required' });

    const violation = checkContentGuardrail(prompt);
    if (violation) {
      return res.status(200).json({
        reply: formatReply(violation, prompt),
        rawReply: violation,
        model: 'moderation-guard',
        moderated: true
      });
    }

    const requestedModel = model || process.env.DEFAULT_AI_MODEL || 'glm-4-7-flash:free';
    let candidateModels;
    if (imageList.length > 0) {
      const visionModels = ['qwen3-8-omni-flash:free', 'glm-4-7-flash:free'];
      candidateModels = visionModels.includes(requestedModel)
        ? [requestedModel, ...visionModels.filter(m => m !== requestedModel)]
        : visionModels;
    } else {
      const baseModels = ['laguna-xs-2-1:free', 'qwen3-8-omni-flash:free', 'glm-4-7-flash:free'];
      candidateModels = requestedModel && baseModels.includes(requestedModel)
        ? [requestedModel, ...baseModels.filter(m => m !== requestedModel)]
        : baseModels;
    }

    let success = false;
    let lastStatus = 500;
    let finalReply = '';
    let usedModel = candidateModels[0];

    const raceController = new AbortController();
    const timeoutId = setTimeout(() => raceController.abort(), 12000);

    async function fetchModel(m) {
      try {
        const r = await callKenariChat(m, prompt, imageList, apiKey, raceController.signal);
        if (!r.ok) {
          const errBody = await r.text().catch(() => '');
          throw new Error(`HTTP ${r.status}: ${errBody}`);
        }
        const data = await r.json();
        const replyText = data?.choices?.[0]?.message?.content;
        if (!replyText || !replyText.trim()) {
          throw new Error(`Empty content from ${m}`);
        }
        return { model: m, reply: replyText };
      } catch (e) {
        throw e;
      }
    }

    try {
      const winner = await Promise.any(candidateModels.map(m => fetchModel(m)));
      clearTimeout(timeoutId);
      raceController.abort();
      finalReply = winner.reply;
      usedModel = winner.model;
      success = true;
    } catch (aggErr) {
      clearTimeout(timeoutId);
      lastStatus = 500;
    }

    if (success) {
      const cleanReply = sanitizeAiOutput(finalReply);
      const sanitizedReply = replacePoliticalKeywords(cleanReply);

      return res.status(200).json({
        reply: formatReply(sanitizedReply, prompt),
        rawReply: sanitizedReply,
        model: usedModel
      });
    }

    const msg = lastStatus === 429
      ? 'Layanan Langkari AI sedang menerima lalu lintas yang cukup padat saat ini. Mohon tunggu 1 menit lalu coba lagi ya 🙏'
      : 'Server Langkari AI sedang mengalami kendala pemrosesan sesaat. Silakan coba kembali dalam beberapa detik 🙏';

    return res.status(200).json({ reply: msg, rawReply: msg, error: true, status: lastStatus });
  } catch (error) {
    console.error('Chat API Error:', error);
    return res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
}
