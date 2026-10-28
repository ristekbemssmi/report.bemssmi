const divisionsData = {



  bph: {



    key: 'bph',



    name: 'BPH',



    subTitle: 'Sekretariat & Inti',



    fullName: 'Badan Pengurus Harian & Tata Kelola Administrasi',



    color: '#192338',



    logoImg: 'logo/BPH.png',



    href: 'https://ipb.link/report-card-1-bph',



    kpi: 96,



    kpiLabel: 'Keteraturan Arsip & Pengambilan Keputusan',



    activeForm: 'Formulir Permohonan Surat Resmi & Rekomendasi',



    membersCount: '12 Pengurus',



    iconSVG: '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z"/><circle cx="12" cy="11" r="3"/></svg>',



    formFields: [



      { id: 'jenis_surat', label: 'Jenis Surat yang Dibutuhkan', type: 'select', required: true, options: ['Surat Rekomendasi Kegiatan', 'Surat Izin Tempat / Rektorat', 'Surat Tugas Kepanitiaan', 'Surat Keterangan Pengurus'] },



      { id: 'tujuan', label: 'Instansi / Pihak Dituju', type: 'text', placeholder: 'Kepada Yth...', required: true },



      { id: 'keperluan', label: 'Uraian Keperluan Surat', type: 'textarea', placeholder: 'Tuliskan rincian keperluan surat secara jelas...', required: true }



    ],



    links: [



      { title: 'SOP Tata Kelola Surat & Pleno BPH', desc: 'Pedoman penomoran berkas & rapat pleno', icon: '📖', href: 'https://docs.google.com' },



      { title: 'Formulir Evaluasi Kinerja Pengurus BPH', desc: 'Kuesioner evaluasi internal organisasi', icon: '📝', href: 'https://forms.google.com' },



      { title: 'Database Surat & Notulensi Pleno', desc: 'Arsip SK, surat resmi & notulensi', icon: '📬', href: 'https://docs.google.com' }



    ],



    pic: { name: 'Aditya Pratama', role: 'Sekretaris Jenderal BPH', waLink: 'https://wa.me/6281234567812', emailLink: 'mailto:bph@langkahberdikari.id' }



  },







  psdmk: {



    key: 'psdmk',



    name: 'PSDMK',



    subTitle: 'Kaderisasi & SDM',



    fullName: 'Pengembangan Sumber Daya Mahasiswa & Kaderisasi',



    color: '#31487A',



    logoImg: 'logo/Psdmk.png',



    href: 'https://ipb.link/report-card-1-psdmk',



    kpi: 94,



    kpiLabel: 'Target Kaderisasi & Pelatihan',



    activeForm: 'Formulir Pendaftaran & Rekrutmen Anggota',



    membersCount: '15 Anggota',



    iconSVG: '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',



    formFields: [



      { id: 'email', label: 'Email Aktif', type: 'email', placeholder: 'nama@email.com', required: true },



      { id: 'wa', label: 'Nomor WhatsApp', type: 'tel', placeholder: '081234567890', required: true },



      { id: 'minat', label: 'Pilihan Peminatan', type: 'select', required: true, options: ['Kaderisasi & Pelatihan', 'Manajemen Anggota', 'Apresiasi & Konseling'] },



      { id: 'alasan', label: 'Motivasi & Komitmen', type: 'textarea', placeholder: 'Ceritakan motivasi dan komitmen Anda...', required: true }



    ],



    links: [



      { title: 'Buku Panduan & SOP Anggota PSDMK', desc: 'Pedoman hak, kewajiban & alur kaderisasi resmi', icon: '📖', href: 'https://docs.google.com' },



      { title: 'Formulir Evaluasi Triwulan Kader', desc: 'Formulir penilaian & evaluasi kinerja anggota', icon: '📝', href: 'https://forms.google.com' },



      { title: 'Google Drive Dokumen & SOP PSDMK', desc: 'Arsip SOP, modul pelatihan & berkas', icon: '📁', href: 'https://drive.google.com' }



    ],



    pic: { name: 'Alya Rahmadhani', role: 'Kepala Biro PSDMK', waLink: 'https://wa.me/6281234567801', emailLink: 'mailto:psdmk@langkahberdikari.id' }



  },







  medbrand: {



    key: 'medbrand',



    name: 'Medbrand',



    subTitle: 'Media & Branding',



    fullName: 'Media Informasi, Publikasi & Branding Kreatif',



    color: '#EC8129',



    logoImg: 'logo/Medbrand.png',



    href: 'https://ipb.link/report-card-1-medbrand',



    kpi: 90,



    kpiLabel: 'Target Publikasi & Engagement',



    activeForm: 'Formulir Permohonan Desain & Publikasi Konten',



    membersCount: '10 Anggota',



    iconSVG: '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',



    formFields: [



      { id: 'divisi_asal', label: 'Divisi Pemohon', type: 'select', required: true, options: ['BPH', 'PSDMK', 'Medbrand', 'Eksmit', 'Kastrat', 'Ristek', 'Sosling', 'ADKESMAH', 'Akpres', 'Depor', 'Senbud', 'IMBANG'] },



      { id: 'judul', label: 'Judul Konten / Acara', type: 'text', placeholder: 'Judul materi konten', required: true },



      { id: 'format', label: 'Format Desain', type: 'select', required: true, options: ['Feed Instagram (1:1)', 'Story (9:16)', 'Poster (A4)', 'Reels/TikTok Video'] },



      { id: 'deadline', label: 'Deadline Publikasi', type: 'date', required: true },



      { id: 'pesan', label: 'Copywriting & Pesan Kunci', type: 'textarea', placeholder: 'Tuliskan teks konten dan arahan desain...', required: true }



    ],



    links: [



      { title: 'SOP Publikasi & Permohonan Desain', desc: 'Alur antrean desain feed, poster & video', icon: '📖', href: 'https://docs.google.com' },



      { title: 'Formulir Evaluasi Media & Konten', desc: 'Evaluasi engagement konten & publikasi', icon: '📝', href: 'https://forms.google.com' },



      { title: 'Brand Guidelines & Template Medbrand', desc: 'Logo vektor, font resmi & aset grafis', icon: '🎨', href: 'https://drive.google.com' }



    ],



    pic: { name: 'Fajar Pratama', role: 'Kepala Biro Medbrand', waLink: 'https://wa.me/6281234567802', emailLink: 'mailto:medbrand@langkahberdikari.id' }



  },







  eksmit: {



    key: 'eksmit',



    name: 'Eksmit',



    subTitle: 'Eksternal & Kemitraan',



    fullName: 'Hubungan Eksternal, Kerjasama Lembaga & Kemitraan',



    color: '#8FB3E2',



    logoImg: 'logo/Eksmit.png',



    href: 'https://ipb.link/report-card-1-eksmit',



    kpi: 88,



    kpiLabel: 'Target Kolaborasi & Jejaring Eksternal',



    activeForm: 'Formulir Pengajuan Kemitraan & Sponsorship',



    membersCount: '17 Anggota',



    iconSVG: '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',



    formFields: [



      { id: 'lembaga', label: 'Nama Lembaga / Brand Mitra', type: 'text', placeholder: 'Nama instansi / institusi', required: true },



      { id: 'kontak', label: 'Kontak WhatsApp / Email Resmi', type: 'text', placeholder: '081234567890 atau email', required: true },



      { id: 'bentuk', label: 'Bentuk Kerjasama', type: 'select', required: true, options: ['Media Partner', 'Sponsorship Dana', 'Kolaborasi Acara', 'Narasumber / Workshop'] },



      { id: 'proposal', label: 'Link Proposal Kemitraan (Google Drive)', type: 'text', placeholder: 'https://drive.google.com/...', required: true }



    ],



    links: [



      { title: 'SOP Kemitraan & Sponsorship Eksmit', desc: 'Pedoman kerjasama eksternal & MoU', icon: '📖', href: 'https://docs.google.com' },



      { title: 'Formulir Evaluasi Mitra & Kolaborasi', desc: 'Feedback dan kuesioner kepuasan mitra', icon: '📝', href: 'https://forms.google.com' },



      { title: 'Company Profile & Paket Sponsorship', desc: 'Paket sponsor resmi & berkas pengantar', icon: '📄', href: 'https://drive.google.com' }



    ],



    pic: { name: 'Nabila Putri', role: 'Kepala Departemen Eksmit', waLink: 'https://wa.me/6281234567803', emailLink: 'mailto:eksmit@langkahberdikari.id' }



  },







  kastrat: {



    key: 'kastrat',



    name: 'Kastrat',



    subTitle: 'Kajian & Strategis',



    fullName: 'Kajian Isu Strategis, Advokasi Kebijakan & Pergerakan',



    color: '#1E2E4F',



    logoImg: 'logo/Kastrat.png',



    href: 'https://ipb.link/report-card-1-kastrat',



    kpi: 92,



    kpiLabel: 'Target Kajian Isu & Rilis Sikap',



    activeForm: 'Formulir Usulan Isu & Kajian Kebijakan Publik',



    membersCount: '4 Anggota',



    iconSVG: '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',



    formFields: [



      { id: 'isu', label: 'Topik Isu / Kebijakan', type: 'text', placeholder: 'Isu kampus / nasional', required: true },



      { id: 'kategori', label: 'Ruang Lingkup Isu', type: 'select', required: true, options: ['Kebijakan Kampus & Rektorat', 'Pendidikan Nasional', 'Sosial Politik & Demokrasi', 'Ekonomi & Kesejahteraan'] },



      { id: 'urgensi', label: 'Uraian Urgensi & Dampak', type: 'textarea', placeholder: 'Jelaskan latar belakang dan dampak isu...', required: true }



    ],



    links: [



      { title: 'SOP Kajian Strategis & Rilis Sikap', desc: 'Standar metodologi kajian & konsolidasi aksi', icon: '📖', href: 'https://docs.google.com' },



      { title: 'Formulir Evaluasi Diskusi & Audiensi Publik', desc: 'Survei dampak kajian & audiensi publik', icon: '📝', href: 'https://forms.google.com' },



      { title: 'Repositori Lembar Kajian & Press Release', desc: 'Kumpulan rilis sikap & lembar advokasi', icon: '📑', href: 'https://drive.google.com' }



    ],



    pic: { name: 'Bima Santoso', role: 'Kepala Departemen Kastrat', waLink: 'https://wa.me/6281234567813', emailLink: 'mailto:kastrat@langkahberdikari.id' }



  },







  ristek: {



    key: 'ristek',



    name: 'Ristek',



    subTitle: 'Riset & Teknologi',



    fullName: 'Penelitian Ilmiah, Inovasi & Pengembangan Teknologi',



    color: '#31487A',



    logoImg: 'logo/Ristek.png',



    href: 'https://ipb.link/report-card-1-ristek',



    kpi: 90,



    kpiLabel: 'Target Riset & Publikasi Ilmiah',



    activeForm: 'Formulir Pengajuan Topik Riset & Inovasi Teknologi',



    membersCount: '16 Anggota',



    iconSVG: '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',



    formFields: [



      { id: 'judul_riset', label: 'Topik / Judul Penelitian', type: 'text', placeholder: 'Judul riset / inovasi teknologi', required: true },



      { id: 'bidang', label: 'Fokus Riset', type: 'select', required: true, options: ['Teknologi Digital & AI', 'Pengolahan Data & Statistik', 'Sains Terapan & Rekayasa', 'Karya Tulis Ilmiah'] },



      { id: 'abstrak', label: 'Ringkasan Riset & Metodologi', type: 'textarea', placeholder: 'Uraikan metodologi dan sasaran riset...', required: true }



    ],



    links: [



      { title: 'SOP Pengajuan Riset & Hibah Inovasi', desc: 'Alur bimbingan & verifikasi karya ilmiah', icon: '📖', href: 'https://docs.google.com' },



      { title: 'Formulir Evaluasi Progres Penelitian', desc: 'Laporan capaian berkala tim riset', icon: '📝', href: 'https://forms.google.com' },



      { title: 'Repositori Jurnal & Database Penelitian', desc: 'Kumpulan publikasi ilmiah & dataset', icon: '🔬', href: 'https://drive.google.com' }



    ],



    pic: { name: 'Reza Firmansyah', role: 'Kepala Departemen Ristek', waLink: 'https://wa.me/6281234567806', emailLink: 'mailto:riset@langkahberdikari.id' }



  },







  sosling: {



    key: 'sosling',



    name: 'Sosling',



    subTitle: 'Sosial & Lingkungan',



    fullName: 'Pengabdian Sosial, Kemanusiaan & Peduli Lingkungan',



    color: '#8FB3E2',



    logoImg: 'logo/Sosling.png',



    href: 'https://ipb.link/report-card-1-sosling',



    kpi: 91,



    kpiLabel: 'Target Desa Binaan & Aksi Kemanusiaan',



    activeForm: 'Formulir Pendaftaran Relawan & Bantuan Sosial',



    membersCount: '9 Anggota',



    iconSVG: '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',



    formFields: [



      { id: 'domisili', label: 'Domisili Saat Ini', type: 'text', placeholder: 'Kota / Kabupaten tempat tinggal', required: true },



      { id: 'peminatan', label: 'Bidang Aksi yang Diminati', type: 'select', required: true, options: ['Tanggap Bencana & Kemanusiaan', 'Edukasi Anak & Masyarakat', 'Konservasi & Kelestarian Lingkungan', 'Logistik Bantuan & Dapur Umum'] },



      { id: 'pengalaman', label: 'Pengalaman Relawan Sebelumnya', type: 'textarea', placeholder: 'Ceritakan pengalaman pengabdian Anda...', required: true }



    ],



    links: [



      { title: 'SOP Aksi Lapangan & Tanggap Bencana', desc: 'Protokol keselamatan & distribusi bantuan', icon: '📖', href: 'https://docs.google.com' },



      { title: 'Formulir Evaluasi Kegiatan Pengabdian', desc: 'Survei dampak program bagi warga binaan', icon: '📝', href: 'https://forms.google.com' },



      { title: 'Laporan Transparansi Donasi & Arsip Aksi', desc: 'Rekapitulasi donasi sosial & foto kegiatan', icon: '🌱', href: 'https://drive.google.com' }



    ],



    pic: { name: 'Siti Rahmawati', role: 'Kepala Departemen Sosling', waLink: 'https://wa.me/6281234567807', emailLink: 'mailto:sosling@langkahberdikari.id' }



  },







  adkesmah: {



    key: 'adkesmah',



    name: 'ADKESMAH',



    subTitle: 'Advokasi Mahasiswa',



    fullName: 'Advokasi Mahasiswa, Finansial & Kesejahteraan Kampus',



    color: '#EC8129',



    logoImg: 'logo/ADKESMAH.png',



    href: 'https://ipb.link/report-card-1-adkesmah',



    kpi: 88,



    kpiLabel: 'Penyelesaian Aspirasi & Advokasi Mahasiswa',



    activeForm: 'Formulir Layanan Advokasi & Aduan Mahasiswa',



    membersCount: '15 Anggota',



    iconSVG: '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',



    formFields: [



      { id: 'kategori', label: 'Kategori Pengaduan / Aspirasi', type: 'select', required: true, options: ['Kendala Finansial & UKT/Biaya Kuliah', 'Fasilitas & Sarana Kampus', 'Konseling & Pendampingan Akademik', 'Layanan Birokrasi & Beasiswa'] },



      { id: 'detail', label: 'Rincian Masalah & Bukti Pendukung', type: 'textarea', placeholder: 'Uraikan permasalahan dan harapan penanganan...', required: true }



    ],



    links: [



      { title: 'SOP Layanan Advokasi & Alur Aduan', desc: 'Standar penanganan & kerahasiaan pelapor', icon: '📖', href: 'https://docs.google.com' },



      { title: 'Formulir Evaluasi Layanan Advokasi', desc: 'Kuesioner kepuasan penanganan aduan', icon: '📝', href: 'https://forms.google.com' },



      { title: 'Panduan Banding UKT & Portal Beasiswa', desc: 'Format berkas pengajuan keringanan UKT', icon: '🔒', href: 'https://forms.google.com' }



    ],



    pic: { name: 'Dimas Prasetyo', role: 'Kepala Departemen ADKESMAH', waLink: 'https://wa.me/6281234567808', emailLink: 'mailto:adkesmah@langkahberdikari.id' }



  },







  akpres: {



    key: 'akpres',



    name: 'Akpres',



    subTitle: 'Akademik & Prestasi',



    fullName: 'Pengembangan Prestasi, Bimbingan Lomba & Akademik',



    color: '#31487A',



    logoImg: 'logo/Akpres.png',



    href: 'https://ipb.link/report-card-1-akpres',



    kpi: 93,



    kpiLabel: 'Pencapaian Prestasi & Delegasi Lomba',



    activeForm: 'Formulir Pendataan & Delegasi Kompetisi Prestasi',



    membersCount: '18 Anggota',



    iconSVG: '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',



    formFields: [



      { id: 'nama_lomba', label: 'Nama Kompetisi / Lomba', type: 'text', placeholder: 'Nama perlombaan yang diikuti', required: true },



      { id: 'tingkat', label: 'Tingkat Kompetisi', type: 'select', required: true, options: ['Tingkat Wilayah / Regional', 'Tingkat Nasional', 'Tingkat Internasional'] },



      { id: 'kebutuhan', label: 'Bantuan yang Dibutuhkan', type: 'select', required: true, options: ['Surat Tugas / Rekomendasi', 'Bantuan Dana Delegasi', 'Dosen Pembimbing / Mentor', 'Fasilitas Latihan'] },



      { id: 'proposal_lomba', label: 'Link Proposal / Rulebook (Google Drive)', type: 'text', placeholder: 'https://drive.google.com/...', required: true }



    ],



    links: [



      { title: 'SOP Pendanaan Delegasi Lomba & Prestasi', desc: 'Syarat klaim bantuan & reward juara', icon: '📖', href: 'https://docs.google.com' },



      { title: 'Formulir Evaluasi Capaian Prestasi', desc: 'Pelaporan hasil akhir kompetisi mahasiswa', icon: '📝', href: 'https://forms.google.com' },



      { title: 'Database Juara & Bank Soal/Info Lomba', desc: 'Daftar prestasi mahasiswa & jadwal lomba', icon: '🏆', href: 'https://drive.google.com' }



    ],



    pic: { name: 'Indah Kusuma', role: 'Kepala Departemen Akpres', waLink: 'https://wa.me/6281234567809', emailLink: 'mailto:akpres@langkahberdikari.id' }



  },







  depor: {



    key: 'depor',



    name: 'Depor',



    subTitle: 'Olahraga & Turnamen',



    fullName: 'Departemen Olahraga, Kebugaran & Turnamen Mahasiswa',



    color: '#EC8129',



    logoImg: 'logo/Depor.png',



    href: 'https://ipb.link/report-card-1-depor',



    kpi: 87,



    kpiLabel: 'Penyelenggaraan Turnamen & Kebugaran',



    activeForm: 'Formulir Pendaftaran Tim Olahraga & Turnamen',



    membersCount: '11 Anggota',



    iconSVG: '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',



    formFields: [



      { id: 'cabang', label: 'Cabang Olahraga', type: 'select', required: true, options: ['Futsal / Sepak Bola', 'Basket', 'Badminton', 'Voli', 'E-Sport (MLBB/Valorant)', 'Catur / Tenis Meja'] },



      { id: 'nama_tim', label: 'Nama Tim / Atlet', type: 'text', placeholder: 'Nama tim atau perorangan', required: true },



      { id: 'kontak_kapten', label: 'Nomor WhatsApp Kapten', type: 'tel', placeholder: '081234567890', required: true },



      { id: 'jadwal_latihan', label: 'Pilihan Waktu Latihan / Bertanding', type: 'textarea', placeholder: 'Tuliskan preferensi jadwal latihan...', required: true }



    ],



    links: [



      { title: 'SOP Turnamen & Peminjaman Lapangan', desc: 'Regulasi pertandingan & jadwal latihan rutin', icon: '📖', href: 'https://docs.google.com' },



      { title: 'Formulir Evaluasi Pertandingan & Turnamen', desc: 'Feedback atlet pasca kompetisi', icon: '📝', href: 'https://forms.google.com' },



      { title: 'Jadwal Liga Olahraga & Klasemen', desc: 'Bagan turnamen, jadwal laga & skor', icon: '⚽', href: 'https://docs.google.com' }



    ],



    pic: { name: 'Rian Hidayat', role: 'Kepala Departemen Depor', waLink: 'https://wa.me/6281234567811', emailLink: 'mailto:depor@langkahberdikari.id' }



  },







  senbud: {



    key: 'senbud',



    name: 'Senbud',



    subTitle: 'Seni & Budaya',



    fullName: 'Apresiasi Seni, Budaya & Kreasi Mahasiswa',



    color: '#FDE053',



    logoImg: 'logo/Senbud.png',



    href: 'https://ipb.link/report-card-1-senbud',



    kpi: 89,



    kpiLabel: 'Target Festival Seni & Kreasi Budaya',



    activeForm: 'Formulir Pengajuan Penampilan Seni & Kolaborasi',



    membersCount: '13 Anggota',



    iconSVG: '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',



    formFields: [



      { id: 'jenis_karya', label: 'Bidang Seni / Penampilan', type: 'select', required: true, options: ['Musik & Band', 'Tari Tradisional / Modern Dance', 'Teater & Sastra', 'Seni Rupa & Fotografi', 'Vokal Solo / Paduan Suara'] },



      { id: 'judul_karya', label: 'Nama Karya / Judul Penampilan', type: 'text', placeholder: 'Judul penampilan / pameran', required: true },



      { id: 'alat_kebutuhan', label: 'Kebutuhan Panggung & Alat', type: 'textarea', placeholder: 'Rincian alat musik, audio, lighting...', required: true }



    ],



    links: [



      { title: 'SOP Pementasan Seni & Galeri Karya', desc: 'Prosedur gladi, kurasi karya & pameran', icon: '📖', href: 'https://docs.google.com' },



      { title: 'Formulir Evaluasi Panggung Kreasi Senbud', desc: 'Survei apresiasi audiens & partisipan', icon: '📝', href: 'https://forms.google.com' },



      { title: 'Galeri Karya & Kalender Pementasan', desc: 'Portofolio seniman kampus & agenda festival', icon: '🎭', href: 'https://drive.google.com' }



    ],



    pic: { name: 'Bagas Wicaksono', role: 'Kepala Departemen Senbud', waLink: 'https://wa.me/6281234567804', emailLink: 'mailto:senbud@langkahberdikari.id' }



  },







  imbang: {



    key: 'imbang',



    name: 'IMBANG',



    subTitle: 'Inkubasi & Bisnis',



    fullName: 'Inkubasi Bisnis Mahasiswa, Manajemen Finansial & Usaha Mandiri',



    color: '#1E2E4F',



    logoImg: 'logo/IMBANG.png',



    href: 'https://ipb.link/report-card-1-imbang',



    kpi: 85,



    kpiLabel: 'Target Omzet Usaha & Inkubasi Bisnis',



    activeForm: 'Formulir Pemesanan Merchandise & Pendanaan Bisnis',



    membersCount: '18 Anggota',



    iconSVG: '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',



    formFields: [



      { id: 'kategori_bisnis', label: 'Jenis Transaksi / Layanan', type: 'select', required: true, options: ['Pemesanan Merchandise Resmi', 'Pengajuan Modal Inkubasi Bisnis', 'Kemitraan Bazar / Sponsorship Produk', 'Laporan Keuangan & Kas'] },



      { id: 'unit_pemohon', label: 'Unit / Lembaga Pemohon', type: 'text', placeholder: 'Nama divisi / unit bisnis / perorangan', required: true },



      { id: 'nominal_rincian', label: 'Rincian Pesanan / Nominal Dana', type: 'text', placeholder: 'Contoh: 50 Kaos, Rp 2.500.000', required: true },



      { id: 'kontak_pic', label: 'Nomor WhatsApp Pemesan / PIC', type: 'tel', placeholder: '081234567890', required: true }



    ],



    links: [



      { title: 'SOP Pengelolaan Kas & Inkubasi Bisnis', desc: 'Aturan reimbursement, margin & bagi hasil', icon: '📖', href: 'https://docs.google.com' },



      { title: 'Formulir Evaluasi Penjualan & Usaha', desc: 'Laporan perputaran modal & kepuasan buyer', icon: '📝', href: 'https://forms.google.com' },



      { title: 'Katalog Merchandise & Buku Kas Terbuka', desc: 'Daftar produk, pricelist & arus kas', icon: '💼', href: 'https://docs.google.com' }



    ],



    pic: { name: 'Dina Maulida', role: 'Kepala Biro IMBANG', waLink: 'https://wa.me/6281234567805', emailLink: 'mailto:imbang@langkahberdikari.id' }



  }



};







let currentDivKey = 'bph';



let currentScreen = 'home';



let currentDivTab = 'form';



let isAdmin = false;



const ADMIN_PIN = 'admin123';







let chatChannelFilter = 'all';







const initialSeedChats = [



  { id: 'msg-1', sender: 'Aditya Pratama', divKey: 'bph', text: 'Halo seluruh pengurus BEM! Rapat koordinasi akbar 12 divisi dijadwalkan Jumat malam via Zoom.', time: '09:15', date: '22/09/2026' },



  { id: 'msg-2', sender: 'Alya Rahmadhani', divKey: 'psdmk', text: 'Pendaftaran dan rekrutmen magang divisi telah resmi dibuka. Mohon seluruh biro dan departemen bersiap.', time: '09:28', date: '22/09/2026' },



  { id: 'msg-3', sender: 'Fajar Pratama', divKey: 'medbrand', text: 'Desain feed dan panduan visual branding BEM sudah kami unggah di folder Brand Guidelines.', time: '09:35', date: '22/09/2026' },



  { id: 'msg-4', sender: 'Reza Firmansyah', divKey: 'ristek', text: 'Sistem portal mobile web 12 divisi BEM telah terhubung penuh dengan database dan chatbot AI.', time: '09:42', date: '22/09/2026' }



];








document.addEventListener('DOMContentLoaded', () => {



  initLiveClock();



  initHomeDivisionsGrid();



  initChannelDropdowns();



  initSavedName();



  initChatsStorage();



  selectDivision('bph');



  initThermostatDials();



  renderChatMessages();



  renderDivisionsLeaderboard();



});







function initHomeDivisionsGrid() {



  const container = document.getElementById('homeDivisionsGrid');



  const drawerList = document.getElementById('allDivisionsChoiceList');



  if (!container) return;







  if (container.children.length === 0) {



    const keys = Object.keys(divisionsData);



    keys.forEach((key) => {



      const div = divisionsData[key];








      const card = document.createElement('a');



      card.className = 'room-card card-glass division-link-item';



      card.href = div.href || '#';



      card.target = '_blank';



      card.rel = 'noopener noreferrer';



      card.innerHTML = `



        <div class="division-logo-slot">



          ${div.logoImg ? `<img src="${div.logoImg}" class="division-card-logo" alt="${div.name} Logo" />` : `<div class="division-svg-emblem" style="color: ${div.color};">${div.iconSVG}</div>`}



        </div>



        <div class="division-text-info">



          <h4 class="division-title">${div.name}</h4>



          <span class="division-subtitle">${div.subTitle || div.fullName}</span>



          <span class="division-count-pill">${div.membersCount}</span>



        </div>



        <div class="division-card-arrow">



          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5">



            <path d="M7 17L17 7M17 7H7M17 7V17"/>



          </svg>



        </div>



      `;



      container.appendChild(card);



    });



  }







  if (drawerList && drawerList.children.length === 0) {



    const keys = Object.keys(divisionsData);



    keys.forEach((key) => {



      const div = divisionsData[key];




      const btn = document.createElement('a');



      btn.className = 'choice-btn';



      btn.href = div.href || '#';



      btn.target = '_blank';



      btn.rel = 'noopener noreferrer';



      btn.setAttribute('onclick', 'closeAllDivisionsSheet()');



      btn.innerHTML = `



        ${div.logoImg ? `<img src="${div.logoImg}" class="drawer-div-logo" alt="${div.name}" />` : `<span class="dot" style="background:${div.color};"></span>`}



        <strong>${div.name}</strong> - <small>${div.fullName}</small>



        <span class="choice-arrow">↗</span>



      `;



      drawerList.appendChild(btn);



    });



  }



}







function initChannelDropdowns() {



  const channelFilter = document.getElementById('chatChannelFilter');



  const msgDivSelect = document.getElementById('chatMessageDivSelect');







  if (channelFilter && msgDivSelect) {



    Object.keys(divisionsData).forEach(key => {



      const div = divisionsData[key];




      const opt1 = document.createElement('option');



      opt1.value = key;



      opt1.textContent = div.name;



      channelFilter.appendChild(opt1);







      const opt2 = document.createElement('option');



      opt2.value = key;



      opt2.textContent = div.name;



      msgDivSelect.appendChild(opt2);



    });



  }



}







window.navigateTo = function(screenName) {



  currentScreen = screenName;



  const screens = {



    home: document.getElementById('appScreenHome'),



    detail: document.getElementById('appScreenDetail'),



    chat: document.getElementById('appScreenChat'),



    stats: document.getElementById('appScreenStats'),



    ai: document.getElementById('appScreenAI')



  };







  Object.entries(screens).forEach(([key, screen]) => {



    if (screen) {



      if (key === screenName) screen.classList.add('active');



      else screen.classList.remove('active');



    }



  });







  const navItems = {



    home: document.getElementById('navItemHome'),



    detail: document.getElementById('navItemDetail'),



    chat: document.getElementById('navItemChat'),



    stats: document.getElementById('navItemStats')



  };







  Object.entries(navItems).forEach(([key, item]) => {



    if (item) {



      if (key === screenName) item.classList.add('active');



      else item.classList.remove('active');



    }



  });







  const aiFab = document.getElementById('bottomNavAiFab');



  if (aiFab) {



    if (screenName === 'ai') aiFab.classList.add('active');



    else aiFab.classList.remove('active');



  }







  if (screens[screenName]) {



    screens[screenName].scrollTop = 0;



  }







  if (screenName === 'chat') {



    renderChatMessages();



  }







  if (screenName === 'stats') {



    renderDivisionsLeaderboard();



  }



  if (screenName === 'detail') {

    const activeTitle = document.getElementById('activeDivTitle');

    if (activeTitle) activeTitle.textContent = 'Divisi';

  }



};







window.openDivisionDetail = function(divKey) {



  selectDivision(divKey);



  navigateTo('detail');



};







window.selectDivision = function(divKey) {



  currentDivKey = divKey;



  const data = divisionsData[divKey] || divisionsData.psdm;







  const activeTitle = document.getElementById('activeDivTitle');



  if (activeTitle) activeTitle.textContent = 'Divisi';







  const kpiValue = document.getElementById('kpiValueDisplay');



  if (kpiValue) kpiValue.textContent = data.kpi;







  const kpiLabel = document.getElementById('kpiLabelDisplay');



  if (kpiLabel) kpiLabel.textContent = data.kpiLabel;







  updateDialArc(data.kpi);







  const formBadge = document.getElementById('formBadgeName');



  if (formBadge) formBadge.textContent = data.activeForm;







  const formFieldsContainer = document.getElementById('formFieldsContainer');



  if (formFieldsContainer) {



    formFieldsContainer.innerHTML = `



      <div class="form-auto-id-banner">



        <div class="auto-id-badge-icon">🛡️</div>



        <div class="auto-id-badge-text">



          <span class="auto-id-badge-title">Identitas Anggota Terverifikasi</span>



          <span class="auto-id-badge-desc">Data pemohon terhubung otomatis dengan sistem internal (tidak perlu mengisi nama lagi).</span>



        </div>



      </div>



      ${generateFormFieldsHTML(data.formFields)}



    `;



  }







  const linksContainer = document.getElementById('divisionLinksList');



  if (linksContainer) {



    linksContainer.innerHTML = generateLinksHTML(data.links);



  }







  const contactContainer = document.getElementById('divisionContactCard');



  if (contactContainer) {



    contactContainer.innerHTML = generateContactHTML(data.pic);



  }







  const divChatHeader = document.getElementById('divChatHeaderTitle');



  if (divChatHeader) divChatHeader.textContent = `Diskusi ${data.name}`;



  renderInlineChat(divKey);



};







function generateFormFieldsHTML(fields) {



  return fields.map(field => {



    let inputHTML = '';



    if (field.type === 'select') {



      const options = field.options.map(opt => `<option value="${opt}">${opt}</option>`).join('');



      inputHTML = `<select class="form-select" id="${field.id}" ${field.required ? 'required' : ''}>${options}</select>`;



    } else if (field.type === 'textarea') {



      inputHTML = `<textarea class="form-textarea" id="${field.id}" placeholder="${field.placeholder || ''}" ${field.required ? 'required' : ''}></textarea>`;



    } else {



      inputHTML = `<input type="${field.type}" class="form-input" id="${field.id}" placeholder="${field.placeholder || ''}" ${field.required ? 'required' : ''} />`;



    }







    return `



      <div class="form-group">



        <label class="form-label" for="${field.id}">



          ${field.label} ${field.required ? '<span style="color:#ef4444;">*</span>' : ''}



        </label>



        ${inputHTML}



      </div>



    `;



  }).join('');



}







function generateLinksHTML(links) {



  return links.map(link => `



    <a href="${link.href}" target="_blank" rel="noopener noreferrer" class="division-link-card">



      <div class="div-link-left">



        <span class="icon">${link.icon}</span>



        <div class="div-link-text">



          <h5>${link.title}</h5>



          <p>${link.desc}</p>



        </div>



      </div>



      <span class="arrow-ext">↗</span>



    </a>



  `).join('');



}







function generateContactHTML(pic) {



  const initial = pic.name.charAt(0);



  return `



    <div class="pic-header">



      <div class="pic-avatar">${initial}</div>



      <div>



        <h4 class="pic-name">${pic.name}</h4>



        <span class="pic-role">${pic.role}</span>



      </div>



    </div>



    <div class="pic-actions">



      <a href="${pic.waLink}" target="_blank" rel="noopener noreferrer" class="pic-btn wa">



        <span>💬 WhatsApp</span>



      </a>



      <a href="${pic.emailLink}" class="pic-btn mail">



        <span>✉️ Email</span>



      </a>



    </div>



  `;



}







window.switchDivTab = function(tabName) {



  currentDivTab = tabName;



  const tabs = {



    form: { btn: document.getElementById('tabBtnForm'), content: document.getElementById('tabContentForm') },



    links: { btn: document.getElementById('tabBtnLinks'), content: document.getElementById('tabContentLinks') },



    chat: { btn: document.getElementById('tabBtnChat'), content: document.getElementById('tabContentChat') },



    contact: { btn: document.getElementById('tabBtnContact'), content: document.getElementById('tabContentContact') }



  };







  Object.entries(tabs).forEach(([key, item]) => {



    if (key === tabName) {



      if (item.btn) item.btn.classList.add('active');



      if (item.content) item.content.classList.add('active');



    } else {



      if (item.btn) item.btn.classList.remove('active');



      if (item.content) item.content.classList.remove('active');



    }



  });







  if (tabName === 'chat') {



    renderInlineChat(currentDivKey);



  }



};







function initChatsStorage() {



  const saved = localStorage.getItem('lb_saved_chats');



  if (!saved) {



    localStorage.setItem('lb_saved_chats', JSON.stringify(initialSeedChats));



  }



}







function getStoredChats() {



  try {



    return JSON.parse(localStorage.getItem('lb_saved_chats')) || initialSeedChats;



  } catch (e) {



    return initialSeedChats;



  }



}







function saveChatsToStorage(chats) {



  localStorage.setItem('lb_saved_chats', JSON.stringify(chats));



}







function initSavedName() {



  const savedName = localStorage.getItem('lb_member_real_name');



  if (savedName) {



    const inputGlobal = document.getElementById('chatSenderRealName');



    const inputInline = document.getElementById('inlineSenderName');



    if (inputGlobal) inputGlobal.value = savedName;



    if (inputInline) inputInline.value = savedName;



  }



}







function renderChatMessages() {



  const container = document.getElementById('globalChatMessagesList');



  if (!container) return;







  const chats = getStoredChats();



  const filter = chatChannelFilter;







  const filteredChats = filter === 'all'



    ? chats



    : chats.filter(c => c.divKey === filter);







  if (filteredChats.length === 0) {



    container.innerHTML = `



      <div style="text-align:center; padding: 24px 10px; color: var(--text-muted); font-size: 0.78rem;">



        Belum ada pesan di saluran ini.<br>Jadilah yang pertama mengirim pesan!



      </div>



    `;



    return;



  }







  container.innerHTML = filteredChats.map(msg => {



    const divInfo = divisionsData[msg.divKey] || { name: 'Umum', color: '#5c34fe' };



    return `



      <div class="chat-msg-item" id="${msg.id}">



        <div class="chat-msg-header">



          <div class="msg-author-info">



            <span class="msg-sender-name">${escapeHTML(msg.sender)}</span>



            <span class="msg-div-tag" style="background:${divInfo.color};">${divInfo.name}</span>



          </div>



          <span class="msg-time">${msg.time}</span>



        </div>



        <div class="msg-body-text">${escapeHTML(msg.text)}</div>



        <button class="msg-delete-btn" onclick="deleteChatMessage('${msg.id}')" title="Hapus Pesan (Khusus Admin)">



          <span>🗑️ Hapus</span>



        </button>



      </div>



    `;



  }).join('');







  container.scrollTop = container.scrollHeight;



}







function renderInlineChat(divKey) {



  const container = document.getElementById('divInlineChatList');



  if (!container) return;







  const chats = getStoredChats();



  const filteredChats = chats.filter(c => c.divKey === divKey);







  if (filteredChats.length === 0) {



    container.innerHTML = `



      <div style="text-align:center; padding: 20px 10px; color: var(--text-muted); font-size: 0.75rem;">



        Belum ada obrolan untuk divisi ini.



      </div>



    `;



    return;



  }







  container.innerHTML = filteredChats.map(msg => `



    <div class="chat-msg-item" id="${msg.id}">



      <div class="chat-msg-header">



        <span class="msg-sender-name">${escapeHTML(msg.sender)}</span>



        <span class="msg-time">${msg.time}</span>



      </div>



      <div class="msg-body-text">${escapeHTML(msg.text)}</div>



      <button class="msg-delete-btn" onclick="deleteChatMessage('${msg.id}')">



        <span>🗑️ Hapus</span>



      </button>



    </div>



  `).join('');







  container.scrollTop = container.scrollHeight;



}







window.submitNewChatMessage = function() {



  const nameInput = document.getElementById('chatSenderRealName');



  const divSelect = document.getElementById('chatMessageDivSelect');



  const textInput = document.getElementById('chatMessageText');







  const sender = nameInput.value.trim();



  const text = textInput.value.trim();



  const divKey = divSelect ? divSelect.value : currentDivKey;







  if (!sender) {



    alert('⚠️ PERHATIAN:\n\nSetiap anggota WAJIB mengisi Nama Asli Anda sebelum mengirim pesan di ruang obrolan.');



    nameInput.focus();



    nameInput.style.border = '1.5px solid #ef4444';



    setTimeout(() => { nameInput.style.border = ''; }, 2500);



    return;



  }







  if (!text) return;







  localStorage.setItem('lb_member_real_name', sender);







  const now = new Date();



  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;



  const newMsg = {



    id: `msg-${Date.now()}`,



    sender: sender,



    divKey: divKey,



    text: text,



    time: timeStr,



    date: now.toLocaleDateString('id-ID')



  };







  const chats = getStoredChats();



  chats.push(newMsg);



  saveChatsToStorage(chats);







  textInput.value = '';



  renderChatMessages();



  renderInlineChat(currentDivKey);



};







window.sendInlineChatMessage = function() {



  const nameInput = document.getElementById('inlineSenderName');



  const textInput = document.getElementById('inlineChatInput');







  const sender = nameInput.value.trim();



  const text = textInput.value.trim();







  if (!sender) {



    alert('⚠️ PERHATIAN:\n\nSetiap anggota WAJIB mengisi Nama Asli Anda sebelum mengirim pesan.');



    nameInput.focus();



    return;



  }







  if (!text) return;







  localStorage.setItem('lb_member_real_name', sender);







  const now = new Date();



  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;



  const newMsg = {



    id: `msg-${Date.now()}`,



    sender: sender,



    divKey: currentDivKey,



    text: text,



    time: timeStr,



    date: now.toLocaleDateString('id-ID')



  };







  const chats = getStoredChats();



  chats.push(newMsg);



  saveChatsToStorage(chats);







  textInput.value = '';



  renderInlineChat(currentDivKey);



  renderChatMessages();



};







window.deleteChatMessage = function(msgId) {



  if (!isAdmin) {



    alert('⛔ AKSES DITOLAK:\n\nHanya Admin yang memiliki hak akses untuk menghapus pesan di obrolan ini.');



    return;



  }







  if (confirm('Apakah Anda yakin ingin menghapus pesan ini secara permanen?')) {



    let chats = getStoredChats();



    chats = chats.filter(c => c.id !== msgId);



    saveChatsToStorage(chats);



    renderChatMessages();



    renderInlineChat(currentDivKey);



  }



};







window.handleChannelChange = function(channel) {



  chatChannelFilter = channel;



  renderChatMessages();



};







window.handleChatEnter = function(e) {



  if (e.key === 'Enter' && !e.shiftKey) {



    e.preventDefault();



    submitNewChatMessage();



  }



};







window.handleInlineChatKey = function(e) {



  if (e.key === 'Enter') {



    e.preventDefault();



    sendInlineChatMessage();



  }



};







window.openGlobalChatWithDiv = function(divKey) {



  const channelFilter = document.getElementById('chatChannelFilter');



  if (channelFilter) {



    channelFilter.value = divKey;



    chatChannelFilter = divKey;



  }



  navigateTo('chat');



};







let pendingAiImage = null;







window.triggerAiImageUpload = function() {



  const fileInput = document.getElementById('aiImageFileInput');



  if (fileInput) fileInput.click();



};







window.handleAiImageSelected = function(e) {



  const file = e.target.files && e.target.files[0];




  if (!file) return;







  const reader = new FileReader();



  reader.onload = function(evt) {



    pendingAiImage = {



      dataUrl: evt.target.result,



      name: file.name



    };







    const container = document.getElementById('aiImagePreviewContainer');



    const thumb = document.getElementById('aiImagePreviewThumb');



    const nameEl = document.getElementById('aiImagePreviewName');







    if (thumb) thumb.src = pendingAiImage.dataUrl;



    if (nameEl) nameEl.textContent = file.name;



    if (container) container.style.display = 'flex';







    const input = document.getElementById('aiScreenPromptInput');



    if (input) input.focus();



  };



  reader.readAsDataURL(file);



};







window.removeAiImage = function() {



  pendingAiImage = null;



  const fileInput = document.getElementById('aiImageFileInput');



  if (fileInput) fileInput.value = '';



  const container = document.getElementById('aiImagePreviewContainer');



  if (container) container.style.display = 'none';



};







window.autoResizeGeminiInput = function(textarea) {



  textarea.style.height = 'auto';



  textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';



};







window.handleAiScreenKeyDown = function(e) {



  if (e.key === 'Enter' && !e.shiftKey) {



    e.preventDefault();



    sendAiScreenPrompt();



  }



};











// ==========================================================================



// MINIMALIST AI SEARCHING PILL ("Menelusuri web") & CLEAN CODE ERROR HELPERS



// ==========================================================================








function getActiveAiModelInfo() {
  let modelName = 'Gemini 3.7 Flash';
  let modelProvider = 'gemini';
  if (typeof COMPOSER_MODELS !== 'undefined' && typeof activeComposerModelId !== 'undefined') {
    const m = COMPOSER_MODELS.find(x => x.id === activeComposerModelId || x.name === activeComposerModelId);
    if (m) {
      modelName = m.name;
      modelProvider = m.provider;
    }
  }
  return { modelName, modelProvider };
}
window.getActiveAiModelInfo = getActiveAiModelInfo;

function getThinkingModelName(rawName) {
  if (!rawName) return 'AI';
  let clean = rawName.split(':')[0].trim();
  if (/^laguna/i.test(clean)) return 'Laguna';
  if (/^qwen/i.test(clean)) return 'Qwen';
  if (/^glm/i.test(clean)) return 'GLM';
  if (/^agnes/i.test(clean)) return 'Agnes';
  if (/^mimo/i.test(clean)) return 'Mimo';
  if (/^gemini/i.test(clean)) return 'Gemini';
  let first = clean.split(/[-_\s]/)[0];

  return first.charAt(0).toUpperCase() + first.slice(1);
}
window.getThinkingModelName = getThinkingModelName;

function getSearchingPillHTML(customModelName) {
  const activeInfo = typeof getActiveAiModelInfo === 'function' ? getActiveAiModelInfo() : { modelName: 'AI Engine', modelProvider: 'gemini' };
  const targetName = customModelName || activeInfo.modelName || 'AI Engine';
  const thinkingName = getThinkingModelName(targetName);
  return `
    <div class="shining-text-container">
      <span class="shining-text">${thinkingName} is thinking...</span>
    </div>
  `;
}








/**
 * Progressive Text Reveal Animation for AI responses
 * Reveals words progressively with blur-to-focus and typing caret
 */
function streamTextReveal(targetEl, htmlContent, speedMs = 14, onComplete) {
  if (!targetEl) {
    if (typeof onComplete === 'function') onComplete();
    return;
  }

  // Parse HTML content into temporary container
  const temp = document.createElement('div');
  temp.innerHTML = htmlContent;

  // Use TreeWalker to discover all text nodes
  const walker = document.createTreeWalker(temp, NodeFilter.SHOW_TEXT, null, false);
  const textNodes = [];

  let n;
  while ((n = walker.nextNode())) {
    textNodes.push(n);
  }

  const revealSpans = [];


  textNodes.forEach((tNode) => {
    const parent = tNode.parentNode;
    if (!parent) return;
    const str = tNode.nodeValue || '';
    if (!str) return;

    // Split words while preserving whitespace
    const parts = str.split(/(\s+)/);
    const frag = document.createDocumentFragment();

    parts.forEach((part) => {
      if (!part) return;
      if (/^\s+$/.test(part)) {
        frag.appendChild(document.createTextNode(part));
      } else {
        const span = document.createElement('span');
        span.className = 'ai-word-reveal';
        span.style.display = 'none';
        span.textContent = part;
        frag.appendChild(span);
        revealSpans.push(span);
      }
    });

    parent.replaceChild(frag, tNode);
  });

  // Transfer structured DOM into target element
  targetEl.innerHTML = '';
  while (temp.firstChild) {
    targetEl.appendChild(temp.firstChild);
  }

  // Create typing cursor
  const cursor = document.createElement('span');
  cursor.className = 'ai-typing-cursor';
  targetEl.appendChild(cursor);

  const total = revealSpans.length;
  if (total === 0) {
    cursor.remove();
    if (typeof onComplete === 'function') onComplete();
    return;
  }

  const chatFlow = targetEl.closest('.gemini-chat-scroller') ||
                   document.getElementById('desktopAiPageMessagesFlow') ||
                   document.getElementById('desktopAiChatFlow') ||
                   document.getElementById('aiScreenChatFlow');

  let cur = 0;
  // Dynamic smooth speed: between 7ms and speedMs to maintain buttery responsiveness
  const tokenDelay = Math.max(7, Math.min(speedMs, Math.round(1800 / total)));

  function nextStep() {
    if (cur >= total) {
      if (cursor && cursor.parentNode) cursor.remove();
      if (typeof onComplete === 'function') onComplete();
      return;
    }

    const span = revealSpans[cur++];

    span.style.display = 'inline';
    span.after(cursor);

    if (chatFlow) {
      chatFlow.scrollTop = chatFlow.scrollHeight;
    }

    setTimeout(nextStep, tokenDelay);
  }

  nextStep();
}
window.streamTextReveal = streamTextReveal;


function getProperAiResponseHTML(query, hasImage) {
  let modelName = 'Gemini 3.7 Flash';
  let modelProvider = 'gemini';
  if (typeof COMPOSER_MODELS !== 'undefined' && typeof activeComposerModelId !== 'undefined') {
    const m = COMPOSER_MODELS.find(x => x.id === activeComposerModelId);
    if (m) {
      modelName = m.name;
      modelProvider = m.provider;
    }
  }

  const cleanModelName = modelName.replace(/:free$/i, '');

  let attachmentSnippet = '';
  if (hasImage) {
    attachmentSnippet = `
      <div class="ai-offline-attachment">
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
        <span>1 Lampiran Gambar terdeteksi &bull; Inferensi multimodal ditangguhkan</span>
      </div>
    `;
  }

  return `
    <div class="ollama-ai-card ai-relaxed-card">
      <div class="ai-relaxed-header">
        <div class="ai-relaxed-model">
          <span class="ai-relaxed-name">${escapeHtmlSafe(cleanModelName)}</span>
        </div>
      </div>

      <div class="ollama-content-body ai-relaxed-body">
        <p class="ai-relaxed-desc">
          Layanan AI saat ini belum aktif. Server inferensi lokal belum terhubung ke sistem.
        </p>
        ${attachmentSnippet}
        <div class="ai-relaxed-traceback">
          <div class="ai-relaxed-trace-line"><span class="trace-file">api/chat.py:46</span> &bull; <code>call_${modelProvider}_api()</code></div>
          <div class="ai-relaxed-trace-err"><span class="trace-key">AIServiceUnavailable:</span> 503 Service Unavailable (endpoint offline)</div>
        </div>
      </div>

      <div class="ollama-card-meta ai-relaxed-footer">
        <div class="ai-relaxed-status">
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          <span>Layanan offline</span>
        </div>
        <button type="button" class="ollama-copy-btn ai-relaxed-copy" onclick="copyAiResponse(this)" title="Salin Detail Error">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          Salin Detail
        </button>
      </div>
    </div>
  `;
}







window.askAiScreenPrompt = function(promptText) {



  const input = document.getElementById('aiScreenPromptInput');



  if (input) input.value = promptText;



  sendAiScreenPrompt();



};







window.sendAiScreenPrompt = function() {



  const input = document.getElementById('aiScreenPromptInput');



  const chatFlow = document.getElementById('aiScreenChatFlow');



  const messagesContainer = document.getElementById('aiStreamMessages');



  const hero = document.getElementById('aiGeminiHero');



  if (!input || !messagesContainer) return;







  const promptText = input.value.trim();



  const attachedImage = pendingAiImage;







  if (!promptText && !attachedImage) return;







  if (hero) hero.style.display = 'none';







  const userMsg = document.createElement('div');



  userMsg.className = 'gemini-msg user';







  let imageHTML = '';



  if (attachedImage) {



    imageHTML = `



      <div class="user-attached-image-wrap">



        <img src="${attachedImage.dataUrl}" alt="${escapeHTML(attachedImage.name)}" class="user-chat-img" onclick="window.open(this.src, '_blank')" title="Ketuk untuk melihat ukuran penuh" />



      </div>



    `;



  }







  userMsg.innerHTML = `



    <div class="gemini-msg-avatar user-avatar">👤</div>



    <div class="gemini-msg-body">



      ${imageHTML}



      ${promptText ? `<div class="gemini-bubble user-bubble">${escapeHTML(promptText)}</div>` : ''}



    </div>



  `;



  messagesContainer.appendChild(userMsg);







  input.value = '';



  input.style.height = 'auto';



  const sendBtn = document.getElementById('btnSendAiPrompt');

  if (sendBtn) sendBtn.classList.remove('ready');



  removeAiImage();







  if (chatFlow) chatFlow.scrollTop = chatFlow.scrollHeight;







  const GEMINI_STAR_SVG = `



    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">



      <path d="M12 2L14.4 7.6L20 10L14.4 12.4L12 18L9.6 12.4L4 10L9.6 7.6L12 2Z" fill="#FDE053" stroke="#EC8129"/>



      <path d="M19 15L20.2 17.8L23 19L20.2 20.2L19 23L17.8 20.2L15 19L17.8 17.8L19 15Z" fill="#ffffff" stroke="#31487A" stroke-width="1.2"/>



    </svg>



  `;







  // Display Minimal Searching Pill ("Menelusuri web")



  const searchingMsg = document.createElement('div');



  searchingMsg.className = 'gemini-msg bot searching';



  searchingMsg.id = 'geminiSearchingIndicator';



  searchingMsg.innerHTML = `



    <div class="gemini-msg-avatar bot-avatar">



      ${getComposerProviderSvg((typeof getActiveAiModelInfo === 'function' ? getActiveAiModelInfo().modelProvider : 'gemini'), 20)}



    </div>



    <div class="gemini-msg-body">



      <div class="gemini-bubble searching-bubble">



        ${getSearchingPillHTML()}



      </div>



    </div>



  `;



  messagesContainer.appendChild(searchingMsg);



  if (chatFlow) chatFlow.scrollTop = chatFlow.scrollHeight;







  // After 1.6s, show clean code error



  setTimeout(() => {



    const indicator = document.getElementById('geminiSearchingIndicator');



    if (indicator) indicator.remove();







    const botMsg = document.createElement('div');
    botMsg.className = 'gemini-msg bot';
    botMsg.innerHTML = `
      <div class="gemini-msg-avatar bot-avatar">
        ${getComposerProviderSvg((typeof getActiveAiModelInfo === 'function' ? getActiveAiModelInfo().modelProvider : 'gemini'), 20)}
      </div>
      <div class="gemini-msg-body">
        <div class="gemini-bubble bot-bubble">
          ${getProperAiResponseHTML(promptText, !!attachedImage)}
        </div>
      </div>
    `;



    messagesContainer.appendChild(botMsg);



    if (chatFlow) chatFlow.scrollTop = chatFlow.scrollHeight;

    const contentBody = botMsg.querySelector('.ollama-content-body');
    const metaEl = botMsg.querySelector('.ollama-card-meta');
    if (metaEl) {
      metaEl.style.opacity = '0';
      metaEl.style.transform = 'translateY(6px)';
      metaEl.style.pointerEvents = 'none';
      metaEl.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
    }
    if (contentBody && typeof streamTextReveal === 'function') {
      const originalHtml = contentBody.innerHTML;
      streamTextReveal(contentBody, originalHtml, 12, () => {
        if (metaEl) {
          metaEl.style.opacity = '1';
          metaEl.style.transform = 'translateY(0)';
          metaEl.style.pointerEvents = 'auto';
        }
        if (chatFlow) chatFlow.scrollTop = chatFlow.scrollHeight;
      });
    }



  }, 1600);



};







window.resetAiChat = function() {



  const messagesContainer = document.getElementById('aiStreamMessages');



  const hero = document.getElementById('aiGeminiHero');



  const input = document.getElementById('aiScreenPromptInput');







  if (messagesContainer) messagesContainer.innerHTML = '';



  if (hero) hero.style.display = 'flex';



  if (input) {



    input.value = '';



    input.style.height = 'auto';



  }



  removeAiImage();



};







function generateAiResponse(query, hasImage) {



  if (hasImage) {



    if (query.includes('desain') || query.includes('poster') || query.includes('feed') || query.includes('konten') || query.includes('medbrand') || query.includes('kominfo')) {



      return `Saya telah menganalisis desain gambar yang Anda lampirkan! 🎨<br><br>



      <strong>Hasil Review Visual & Keselarasan Brand:</strong><br>



      • <strong>Komposisi & Layout:</strong> Struktur visual rapi dengan titik fokus utama yang tegas.<br>



      • <strong>Palet Identitas:</strong> Selaras dengan warna tema resmi Langkah Berdikari (Navy & Tangerine Orange).<br>



      • <strong>Keterbacaan Mobile:</strong> Teks judul terbaca jelas, namun perhatikan teks catatan kecil pada layar smartphone.<br><br>



      📌 Anda dapat langsung mengajukan publikasi melalui formulir di <strong>Divisi Medbrand</strong>.`;



    }







    if (query.includes('proposal') || query.includes('lpj') || query.includes('surat') || query.includes('berkas') || query.includes('nota') || query.includes('bukti')) {



      return `Dokumen/berkas berhasil dipindai dan diidentifikasi! 📑<br><br>



      • <strong>Struktur Dokumen:</strong> Berkas terbaca dengan format penomoran dan isi yang teratur.<br>



      • <strong>Kelengkapan:</strong> Pastikan stempel atau tanda tangan resmi panitia telah tertera sebelum diajukan ke BPH.<br><br>



      Silakan kirimkan berkas ini melalui tab <strong>Formulir</strong> pada divisi terkait (BPH untuk legalitas surat, atau IMBANG untuk bukti transaksi keuangan).`;



    }







    return `Gambar berhasil diterima dan dianalisis oleh Berdikari AI! 🔍<br><br>



    Saya telah mencatat gambar ini dalam sesi konsultasi. Ada aspek khusus yang ingin Anda diskusikan, misalnya mengenai kelayakan materi untuk divisi tertentu, panduan warna, atau penulisan konten?`;



  }







  if (query.includes('halo') || query.includes('hallo') || query.includes('hello') || query.includes('hai') || query.includes('hey') || query.includes('hei') || query.includes('assalamu') || query.includes('pagi') || query.includes('siang') || query.includes('sore') || query.includes('malam') || query.includes('siapa kamu') || query.includes('kamu siapa') || query.includes('siapa anda') || query.includes('bantuan') || query.includes('bisa apa') || query.includes('menu') || query.includes('fitur') || query.includes('tugasmu')) {



    return `Halo! Saya <strong>Berdikari AI Assistant</strong>, asisten kecerdasan buatan resmi untuk <strong>BEM Langkah Berdikari</strong>. ✨<br><br>



    Saya siap membantu Anda dengan informasi terpercaya seputar:<br>



    • Penjelasan fokus & proker <strong>12 Divisi Resmi</strong><br>



    • Alur pengajuan proposal, surat dinas BPH, dan LPJ kegiatan<br>



    • Info rekrutmen pengurus (PSDMK) & pengajuan desain grafis (Medbrand)<br>



    • Review berkas, poster, atau proposal yang Anda lampirkan.<br><br>



    Ketikkan topik divisi atau kebutuhan Anda di bawah ini!`;



  }







  if (query.includes('12 divisi') || query.includes('divisi apa saja') || query.includes('semua divisi') || query.includes('daftar divisi')) {



    return `BEM Langkah Berdikari memiliki <strong>12 Divisi Resmi</strong>:<br>



    1. <strong>BPH</strong> (Badan Pengurus Harian & Administrasi)<br>



    2. <strong>PSDMK</strong> (Kaderisasi & Pengembangan SDM)<br>



    3. <strong>Medbrand</strong> (Media, Informasi & Branding Kreatif)<br>



    4. <strong>Eksmit</strong> (Eksternal, Relasi & Kemitraan)<br>



    5. <strong>Kastrat</strong> (Kajian Isu & Aksi Strategis)<br>



    6. <strong>Ristek</strong> (Riset, Data & Inovasi Teknologi)<br>



    7. <strong>Sosling</strong> (Sosial, Kemanusiaan & Lingkungan Hidup)<br>



    8. <strong>ADKESMAH</strong> (Advokasi & Kesejahteraan Mahasiswa)<br>



    9. <strong>Akpres</strong> (Akademik & Pengembangan Prestasi Lomba)<br>



    10. <strong>Depor</strong> (Departemen Olahraga & Turnamen)<br>



    11. <strong>Senbud</strong> (Apresiasi Seni & Budaya Mahasiswa)<br>



    12. <strong>IMBANG</strong> (Inkubasi Bisnis, Manajemen Finansial & Kas)<br><br>



    Silakan ketuk kartu divisi terkait di beranda untuk melihat link Report Card resminya!`;



  }







  if (query.includes('ristek') || query.includes('riset') || query.includes('teknologi') || query.includes('inovasi')) {



    return `<strong>Departemen Ristek (Riset & Teknologi)</strong> berfokus pada penelitian ilmiah, inovasi teknologi digital, dan pengolahan data organisasi.<br><br>



    🔬 <strong>Program Utama:</strong> Sistem Informasi Organisasi, Berdikari Data Portal, & Riset Kolaboratif Mahasiswa.<br>



    • <strong>Jumlah Anggota:</strong> 16 Pengurus/Anggota aktif.<br>
    PIC Ristek: <strong>Kak Reza Firmansyah</strong>.`;



  }







  if (query.includes('rekrutmen') || query.includes('daftar') || query.includes('gabung') || query.includes('psdmk') || query.includes('kaderisasi') || query.includes('oprec')) {



    return `Pendaftaran anggota baru dan kaderisasi dikoordinasikan langsung oleh <strong>Biro PSDMK</strong>.<br><br>



    📌 <strong>Alur Rekrutmen:</strong><br>



    1. Mengisi formulir pendaftaran anggota baru dan motivasi bergabung.<br>



    2. Mengikuti sesi wawancara dan profiling minat divisi.<br>



    3. Pelatihan kepemimpinan dasar mahasiswa.<br>



    Narahubung PSDMK: <strong>Kak Alya Rahmadhani</strong>.`;



  }







  if (query.includes('desain') || query.includes('medbrand') || query.includes('poster') || query.includes('feed') || query.includes('konten') || query.includes('publikasi') || query.includes('instagram')) {



    return `Untuk permohonan desain grafis, publikasi media sosial, dan branding kegiatan, silakan ajukan ke <strong>Biro Medbrand</strong>.<br><br>



    🎨 <strong>Format Desain yang Dilayani:</strong> Feed Instagram (1:1), Story (9:16), Poster Kegiatan (A4), dan Video Reels.<br>



    PIC Medbrand: <strong>Kak Fajar Pratama</strong>.`;



  }







  if (query.includes('sponsor') || query.includes('mitra') || query.includes('eksmit') || query.includes('mou') || query.includes('kemitraan')) {



    return `Pengajuan kemitraan eksternal, media partner, dan sponsorship ditangani oleh <strong>Departemen Eksmit</strong>.<br><br>



    💼 Anda dapat mengakses MoU resmi dan profil kemitraan organisasi melalui Report Card Eksmit.<br>



    PIC Eksmit: <strong>Kak Nabila Putri</strong>.`;



  }







  if (query.includes('kastrat') || query.includes('kajian') || query.includes('isu') || query.includes('aksi') || query.includes('advokasi kebijakan')) {



    return `<strong>Departemen Kastrat (Kajian & Aksi Strategis)</strong> mengkaji kebijakan kampus dan isu publik secara kritis dan solutif.<br><br>



    📢 <strong>Fokus:</strong> Publikasi Kajian Berkala, Diskusi Publik, dan Konsolidasi Aspirasi Mahasiswa.<br>



    PIC Kastrat: <strong>Kak Bima Perkasa</strong>.`;



  }







  if (query.includes('sosling') || query.includes('sosial') || query.includes('lingkungan') || query.includes('donasi') || query.includes('pengmas')) {



    return `<strong>Departemen Sosling (Sosial & Lingkungan Hidup)</strong> bergerak di bidang pengabdian masyarakat, tanggap bencana, dan kepedulian lingkungan.<br><br>



    🌱 <strong>Program:</strong> Berdikari Peduli Sesama, Gerakan Kampus Hijau, dan Bakti Sosial Komunitas.<br>



    PIC Sosling: <strong>Kak Siti Nurhaliza</strong>.`;



  }







  if (query.includes('adkesmah') || query.includes('beasiswa') || query.includes('ukt') || query.includes('advokasi') || query.includes('kesejahteraan') || query.includes('keluhan')) {



    return `<strong>Departemen ADKESMAH (Advokasi & Kesejahteraan Mahasiswa)</strong> mengawal hak-hak mahasiswa, keringanan UKT, beasiswa, dan pendampingan keluhan akademik.<br><br>



    🛡️ <strong>Layanan:</strong> Posko Advokasi UKT, Pusat Informasi Beasiswa, dan Konseling Mahasiswa.<br>



    PIC ADKESMAH: <strong>Kak Dimas Prasetyo</strong>.`;



  }







  if (query.includes('akpres') || query.includes('prestasi') || query.includes('lomba') || query.includes('kompetisi') || query.includes('delegasi')) {



    return `<strong>Departemen Akpres (Akademik & Prestasi)</strong> mendampingi mahasiswa dalam mengikuti berbagai kejuaraan, PKM, dan kompetisi tingkat nasional maupun internasional.<br><br>



    🏆 <strong>Fasilitas:</strong> Database Lomba Mahasiswa, Bimbingan Delegasi, dan Insentif Prestasi.<br>



    PIC Akpres: <strong>Kak Indah Kusuma</strong>.`;



  }







  if (query.includes('depor') || query.includes('olahraga') || query.includes('turnamen') || query.includes('futsal') || query.includes('basket')) {



    return `<strong>Departemen Depor (Departemen Olahraga)</strong> memfasilitasi kebugaran dan turnamen olahraga antar mahasiswa.<br><br>



    ⚽ <strong>Event Utama:</strong> Berdikari Champions League, Sparring Rutin, dan Pekan Olahraga Mahasiswa.<br>



    PIC Depor: <strong>Kak Rian Hidayat</strong>.`;



  }







  if (query.includes('senbud') || query.includes('seni') || query.includes('budaya') || query.includes('kreasi') || query.includes('musik')) {



    return `<strong>Departemen Senbud (Seni & Budaya)</strong> mewadahi minat bakat seni, panggung ekspresi, dan pelestarian budaya kampus.<br><br>



    🎭 <strong>Kegiatan:</strong> Festival Seni Mahasiswa, Panggung Kreasi Musik, dan Lokakarya Seni Tradisional.<br>



    PIC Senbud: <strong>Kak Bagas Wicaksono</strong>.`;



  }







  if (query.includes('imbang') || query.includes('bisnis') || query.includes('wirausaha') || query.includes('merchandise') || query.includes('danus') || query.includes('finansial')) {



    return `<strong>Departemen IMBANG (Inkubasi Bisnis & Finansial)</strong> mengelola merchandise resmi BEM, pendanaan mandiri, serta inkubasi bisnis rintisan mahasiswa.<br><br>



    🛍️ <strong>Layanan:</strong> Pemesanan Official Merchandise, Bimbingan Wirausaha Muda, dan Pengelolaan Dana Mandiri.<br>



    PIC IMBANG: <strong>Kak Dina Mariana</strong>.`;



  }







  if (query.includes('bph') || query.includes('proposal') || query.includes('surat') || query.includes('lpj') || query.includes('administrasi') || query.includes('sekretaris') || query.includes('bendahara')) {



    return `<strong>BPH (Badan Pengurus Harian)</strong> mengelola roda administrasi inti, legalitas surat keputusan, penjadwalan audiensi, dan standarisasi proposal/LPJ.<br><br>



    📑 <strong>Layanan Utama:</strong> Penerbitan Surat Dinas, Pengesahan Proposal Kegiatan, dan Evaluasi SOP.<br>



    PIC BPH: <strong>Kak Aditya Pratama</strong>.`;



  }







  if (query.includes('pic') || query.includes('kontak') || query.includes('narahubung') || query.includes('wa')) {



    return `Berikut narahubung pimpinan 12 divisi BEM Langkah Berdikari:<br>



    • <strong>BPH:</strong> Kak Aditya<br>



    • <strong>PSDMK:</strong> Kak Alya<br>



    • <strong>Medbrand:</strong> Kak Fajar<br>



    • <strong>Eksmit:</strong> Kak Nabila<br>



    • <strong>Kastrat:</strong> Kak Bima<br>



    • <strong>Ristek:</strong> Kak Reza<br>



    • <strong>Sosling:</strong> Kak Siti<br>



    • <strong>ADKESMAH:</strong> Kak Dimas<br>



    • <strong>Akpres:</strong> Kak Indah<br>



    • <strong>Depor:</strong> Kak Rian<br>



    • <strong>Senbud:</strong> Kak Bagas<br>



    • <strong>IMBANG:</strong> Kak Dina<br><br>



    Silakan klik tautan Report Card masing-masing divisi di Beranda untuk terhubung langsung!`;



  }







  if (query.includes('bem') || query.includes('berdikari') || query.includes('organisasi') || query.includes('mahasiswa') || query.includes('kampus') || query.includes('proker') || query.includes('kegiatan')) {



    return `Terima kasih telah berkonsultasi mengenai <strong>BEM Langkah Berdikari</strong>! ✨<br><br>



    Anda dapat menelusuri 12 divisi resmi, memeriksa program kerja, atau membaca SOP dan Report Card langsung dari halaman Beranda. Ada nama divisi atau program kerja tertentu yang ingin Anda tanyakan lebih rinci?`;



  }







  if (query.includes('prabowo')) {



    return `<strong>Prabowo Subianto</strong> adalah Presiden Republik Indonesia ke-8 yang mulai menjabat sejak 20 Oktober 2024. ✨`;



  }







  return `Maaf, Berdikari AI sedang sibuk. Coba kirim ulang pertanyaan Anda sebentar lagi ya. 🙏`;



}







window.toggleAdminPrompt = function() {



  if (isAdmin) {



    if (confirm('Nonaktifkan Mode Admin dan kembali ke Mode Member biasa?')) {



      isAdmin = false;



      updateAdminUI();



      alert('Mode Admin dinonaktifkan.');



    }



  } else {



    const modal = document.getElementById('adminAuthModal');



    const input = document.getElementById('adminPinInput');



    if (input) input.value = '';



    if (modal) modal.classList.add('active');



  }



};







window.submitAdminPin = function() {



  const input = document.getElementById('adminPinInput');



  const pin = input ? input.value.trim() : '';







  if (pin === ADMIN_PIN) {



    isAdmin = true;



    updateAdminUI();



    closeAdminAuthModal();



    alert('✅ BERHASIL:\n\nMode Admin aktif! Anda sekarang dapat menghapus pesan anggota yang tersimpan.');



  } else {



    alert('❌ PIN Salah! Silakan coba lagi (Default PIN: admin123).');



    if (input) {



      input.value = '';



      input.focus();



    }



  }



};







window.closeAdminAuthModal = function() {



  const modal = document.getElementById('adminAuthModal');



  if (modal) modal.classList.remove('active');



};







function updateAdminUI() {



  const body = document.body;



  const headerStatus = document.getElementById('headerAdminStatus');



  const headerBtn = document.getElementById('btnHeaderAdminToggle');



  const chatLockIcon = document.getElementById('chatAdminLockIcon');



  const adminBanner = document.getElementById('adminActiveBanner');







  if (isAdmin) {



    body.classList.add('admin-mode-active');



    if (headerStatus) headerStatus.textContent = 'Admin';



    if (headerBtn) headerBtn.classList.add('active');



    if (chatLockIcon) chatLockIcon.textContent = '👑';



    if (adminBanner) adminBanner.classList.add('active');



  } else {



    body.classList.remove('admin-mode-active');



    if (headerStatus) headerStatus.textContent = 'Member';



    if (headerBtn) headerBtn.classList.remove('active');



    if (chatLockIcon) chatLockIcon.textContent = '🔒';



    if (adminBanner) adminBanner.classList.remove('active');



  }







  renderChatMessages();



  renderInlineChat(currentDivKey);



}







function initThermostatDials() {



  const dialInteractive = document.getElementById('dialContainerInteractive');



  if (dialInteractive) setupDialDragging(dialInteractive);



}







function setupDialDragging(container) {



  let isDragging = false;







  const handlePointerMove = (e) => {



    if (!isDragging) return;



    const rect = container.getBoundingClientRect();



    const clientX = e.clientX || (e.touches && e.touches[0].clientX);



    const clientY = e.clientY || (e.touches && e.touches[0].clientY);







    const x = clientX - (rect.left + rect.width / 2);



    const y = clientY - (rect.top + rect.height / 2);







    let rad = Math.atan2(y, x);



    let deg = (rad * 180) / Math.PI;







    let angleFromTop = deg + 90;



    if (angleFromTop > 180) angleFromTop -= 360;







    const minAngle = -140;



    const maxAngle = 140;



    const clampedAngle = Math.max(minAngle, Math.min(maxAngle, angleFromTop));







    const fraction = (clampedAngle - minAngle) / (maxAngle - minAngle);



    const percentage = Math.round(fraction * 100);







    if (divisionsData[currentDivKey]) {



      divisionsData[currentDivKey].kpi = percentage;



    }



    updateDialArc(percentage);



  };







  const handlePointerDown = (e) => {



    isDragging = true;



    handlePointerMove(e);



    window.addEventListener('mousemove', handlePointerMove);



    window.addEventListener('mouseup', handlePointerUp);



    window.addEventListener('touchmove', handlePointerMove, { passive: false });



    window.addEventListener('touchend', handlePointerUp);



  };







  const handlePointerUp = () => {



    isDragging = false;



    window.removeEventListener('mousemove', handlePointerMove);



    window.removeEventListener('mouseup', handlePointerUp);



    window.removeEventListener('touchmove', handlePointerMove);



    window.removeEventListener('touchend', handlePointerUp);



  };







  container.addEventListener('mousedown', handlePointerDown);



  container.addEventListener('touchstart', handlePointerDown, { passive: false });



}







function updateDialArc(percentage) {



  const r = 92;



  const circumference = 2 * Math.PI * r;



  const fraction = Math.max(0, Math.min(100, percentage)) / 100;



  const strokeOffset = circumference * (1 - fraction * 0.78);







  const arcs = document.querySelectorAll('.dial-active-arc');



  const knobs = document.querySelectorAll('.dial-knob');



  const kpiDisplays = document.querySelectorAll('#kpiValueDisplay');







  arcs.forEach(arc => {



    arc.style.strokeDashoffset = strokeOffset;



  });







  const minAngle = -140;



  const maxAngle = 140;



  const angleDeg = minAngle + fraction * (maxAngle - minAngle);



  const rad = ((angleDeg - 90) * Math.PI) / 180;



  const cx = 130;



  const cy = 130;



  const knobX = cx + r * Math.cos(rad);



  const knobY = cy + r * Math.sin(rad);







  knobs.forEach(knob => {



    knob.setAttribute('cx', knobX);



    knob.setAttribute('cy', knobY);



  });







  kpiDisplays.forEach(el => {



    el.textContent = percentage;



  });



}







let currentStatsPeriod = 'year';



let currentStatsChartMetric = 'participants';







const statsDataByPeriod = {



  year: {



    participants: '43.058',



    participantsGrowth: '+18.4% YoY',



    prokerDone: '32 / 36',



    prokerRate: '88.9% Tercapai',



    partners: '48 Lembaga',



    partnersGrowth: '+12 Baru',



    satisfaction: '4.92 / 5.0',



    satisfactionLabel: 'Sangat Puas (98%)',



    summarySub: 'Partisipan Terjangkau • 36 Program Kerja Tahunan'



  },



  semester: {



    participants: '24.890',



    participantsGrowth: '+14.2% Smst',



    prokerDone: '18 / 20',



    prokerRate: '90.0% Tercapai',



    partners: '36 Lembaga',



    partnersGrowth: '+8 Baru',



    satisfaction: '4.90 / 5.0',



    satisfactionLabel: 'Sangat Puas (97%)',



    summarySub: 'Partisipan Semester Ganjil • 20 Program Kerja'



  },



  month: {



    participants: '5.620',



    participantsGrowth: '+22.1% MoM',



    prokerDone: '4 / 4',



    prokerRate: '100% On-Track',



    partners: '14 Lembaga',



    partnersGrowth: '+3 Baru',



    satisfaction: '4.95 / 5.0',



    satisfactionLabel: 'Sempurna (99%)',



    summarySub: 'Partisipan Bulan Ini • 4 Program Kerja Aktif'



  }



};







const chartPaths = {



  participants: {



    title: 'Tren Pertumbuhan Partisipan',



    areaD: 'M 20 85 C 40 85, 40 50, 60 50 C 80 50, 80 66, 100 66 C 120 66, 120 40, 140 40 C 160 40, 160 22, 180 22 C 200 22, 200 78, 220 78 C 240 78, 240 52, 260 52 L 260 110 L 20 110 Z',



    strokeD: 'M 20 85 C 40 85, 40 50, 60 50 C 80 50, 80 66, 100 66 C 120 66, 120 40, 140 40 C 160 40, 160 22, 180 22 C 200 22, 200 78, 220 78 C 240 78, 240 52, 260 52',



    pinPos: 'translate(180, 22)'



  },



  hours: {



    title: 'Akumulasi Jam Kerja Efektif',



    areaD: 'M 20 95 C 50 85, 80 75, 110 65 C 140 55, 170 42, 200 35 C 220 30, 240 22, 260 16 L 260 110 L 20 110 Z',



    strokeD: 'M 20 95 C 50 85, 80 75, 110 65 C 140 55, 170 42, 200 35 C 220 30, 240 22, 260 16',



    pinPos: 'translate(260, 16)'



  },



  budget: {



    title: 'Realisasi Serapan Anggaran Proker',



    areaD: 'M 20 98 C 50 92, 80 82, 110 70 C 140 60, 170 48, 200 42 C 220 38, 240 30, 260 22 L 260 110 L 20 110 Z',



    strokeD: 'M 20 98 C 50 92, 80 82, 110 70 C 140 60, 170 48, 200 42 C 220 38, 240 30, 260 22',



    pinPos: 'translate(200, 42)'



  }



};







window.switchStatsPeriod = function(period) {



  currentStatsPeriod = period;



  const pData = statsDataByPeriod[period] || statsDataByPeriod.year;







  ['month', 'semester', 'year'].forEach(p => {



    const btn = document.getElementById(`btnPeriod_${p}`);



    if (btn) {



      if (p === period) btn.classList.add('active');



      else btn.classList.remove('active');



    }



  });







  const elPart = document.getElementById('statValParticipants');



  const elPartGrow = document.getElementById('statGrowParticipants');



  const elProker = document.getElementById('statValProker');



  const elProkerRate = document.getElementById('statRateProker');



  const elPartners = document.getElementById('statValPartners');



  const elPartnersGrow = document.getElementById('statGrowPartners');



  const elSat = document.getElementById('statValSatisfaction');



  const elSatLbl = document.getElementById('statLblSatisfaction');



  const elSub = document.getElementById('statSummarySub');







  if (elPart) elPart.textContent = pData.participants;



  if (elPartGrow) elPartGrow.textContent = pData.participantsGrowth;



  if (elProker) elProker.textContent = pData.prokerDone;



  if (elProkerRate) elProkerRate.textContent = pData.prokerRate;



  if (elPartners) elPartners.textContent = pData.partners;



  if (elPartnersGrow) elPartnersGrow.textContent = pData.partnersGrowth;



  if (elSat) elSat.textContent = pData.satisfaction;



  if (elSatLbl) elSatLbl.textContent = pData.satisfactionLabel;



  if (elSub) elSub.textContent = pData.summarySub;



};







window.switchStatsChartMetric = function(metric) {



  currentStatsChartMetric = metric;



  const cfg = chartPaths[metric] || chartPaths.participants;







  ['participants', 'hours', 'budget'].forEach(m => {



    const btn = document.getElementById(`metricBtn_${m}`);



    if (btn) {



      if (m === metric) btn.classList.add('active');



      else btn.classList.remove('active');



    }



  });







  const chartTitle = document.getElementById('statsChartTitle');



  if (chartTitle) chartTitle.textContent = cfg.title;







  const areaEl = document.querySelector('#statsUsageChart .chart-area');



  const strokeEl = document.querySelector('#statsUsageChart .chart-stroke');



  const pinEl = document.querySelector('#statsUsageChart .chart-active-pin');







  if (areaEl) areaEl.setAttribute('d', cfg.areaD);



  if (strokeEl) strokeEl.setAttribute('d', cfg.strokeD);



  if (pinEl) pinEl.setAttribute('transform', cfg.pinPos);



};







window.renderDivisionsLeaderboard = function() {



  const container = document.getElementById('statsDivisionsLeaderboard');



  if (!container) return;







  const sorted = Object.entries(divisionsData).sort((a, b) => b[1].kpi - a[1].kpi);







  container.innerHTML = sorted.map(([key, div], idx) => {



    const isTop = idx < 3;



    const rankBadge = isTop



      ? `<span class="stat-rank-badge top-rank">#${idx + 1}</span>`



      : `<span class="stat-rank-badge">#${idx + 1}</span>`;







    let logoMarkup = '';



    if (div.logoImg) {



      logoMarkup = `<img src="${div.logoImg}" alt="${div.name}" class="stat-lb-logo-img" />`;



    } else {



      logoMarkup = `<div class="stat-lb-logo-svg" style="color: ${div.color};">${div.iconSVG}</div>`;



    }







    const prokerCount = Math.min(4, Math.max(2, Math.round((div.kpi / 100) * 4)));







    return `



      <div class="stat-leaderboard-item" onclick="openDivisionDetail('${key}')" title="Ketuk untuk melihat detail Divisi ${div.name}">



        <div class="stat-lb-left">



          ${rankBadge}



          <div class="stat-lb-logo-wrap">



            ${logoMarkup}



          </div>



          <div class="stat-lb-info">



            <div class="stat-lb-name-row">



              <span class="stat-lb-name">${div.name}</span>



              <span class="stat-lb-sub">${div.subTitle}</span>



            </div>



            <div class="stat-lb-bar-track">



              <div class="stat-lb-bar-fill" style="width: ${div.kpi}%; background: linear-gradient(90deg, ${div.color}, #EC8129);"></div>



            </div>



          </div>



        </div>



        <div class="stat-lb-right">



          <div class="stat-lb-kpi-badge" style="border-color: ${div.color}; color: ${div.color};">



            ${div.kpi}%



          </div>



          <span class="stat-lb-proker-tag">${prokerCount}/4 Proker</span>



        </div>



      </div>



    `;



  }).join('');



};







window.downloadStatsReport = function() {



  alert('📥 LAPORAN RESMI DISIAPKAN:\\n\\nRekapitulasi Kinerja & Akuntabilitas 12 Divisi Langkah Berdikari Periode 2026/2027 berhasil diekspor.\\n\\n• Status: Terverifikasi BPH\\n• Total Program Kerja: 36\\n• Tingkat Ketercapaian: 88.9%\\n\\nBerkas format PDF & Spreadsheet telah diunduh.');



};







window.handleFormSubmit = function(e) {



  e.preventDefault();



  const form = e.target;



  const currentDiv = divisionsData[currentDivKey];








  const modal = document.getElementById('feedbackModal');



  const modalTitle = document.getElementById('feedbackModalTitle');



  const modalDesc = document.getElementById('feedbackModalDesc');







  if (modalTitle) modalTitle.textContent = `Formulir ${currentDiv.name} Terkirim!`;



  if (modalDesc) modalDesc.textContent = `Terima kasih, pengajuan Anda untuk "${currentDiv.activeForm}" telah berhasil dikirimkan dan akan segera diproses oleh divisi.`;







  if (modal) modal.classList.add('active');



  form.reset();



};







window.closeFeedbackModal = function() {



  const modal = document.getElementById('feedbackModal');



  if (modal) modal.classList.remove('active');



};







window.openAllDivisionsSheet = function() {



  const modal = document.getElementById('allDivisionsModal');



  if (modal) modal.classList.add('active');



};







window.closeAllDivisionsSheet = function() {



  const modal = document.getElementById('allDivisionsModal');



  if (modal) modal.classList.remove('active');



};







window.openNotificationModal = function() {



  alert('Notifikasi Terbaru Langkah Berdikari:\n\n• Seluruh 12 Divisi telah aktif di sistem.\n• Chatbot AI siap membantu di tombol tengah (FAB).\n• Ruang obrolan divisi berada di posisi ke-2 dari kanan.');



};







window.openAboutModal = function() {



  alert('Langkah Berdikari\n\nGerakan Kolaborasi, Inovasi & Kemandirian Pemuda.\nDidukung oleh 12 Divisi Resmi.');



};







window.openDivisionInfoModal = function() {



  const data = divisionsData[currentDivKey];




  alert(`${data.name}\n\n${data.fullName}\n\nKepala Divisi: ${data.pic.name}\nTarget Kinerja: ${data.kpi}%\nJumlah Anggota: ${data.membersCount}`);



};







function initLiveClock() {



  function updateTime() {



    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');

    const minutes = String(now.getMinutes()).padStart(2, '0');

    const timeStr = `${hours}:${minutes}`;



    const clockEl = document.getElementById('appLiveClock');

    if (clockEl) clockEl.textContent = timeStr;



    const deskClockEl = document.getElementById('desktopLiveClock');

    if (deskClockEl) deskClockEl.textContent = timeStr;



    const deskDateEl = document.getElementById('desktopLiveDate');

    if (deskDateEl) {

      const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };

      deskDateEl.textContent = now.toLocaleDateString('id-ID', options);

    }



  }



  updateTime();



  setInterval(updateTime, 1000);



}







function escapeHTML(str) {



  if (!str) return '';



  return str.replace(/[&<>'"]/g,



    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)



  );



}







let pendingDesktopAiImage = null;







window.toggleViewMode = function() {



  document.body.classList.toggle('force-mobile-view');



  const isMobile = document.body.classList.contains('force-mobile-view');



  const labelEl = document.getElementById('viewModeToggleLabel');



  if (labelEl) {



    labelEl.textContent = isMobile ? '💻 Tampilan PC (Figma)' : '📱 Pratinjau Ponsel';



  }



};







window.openDesktopSidebar = function() {



  const sidebar = document.getElementById('desktopSidebar');



  const backdrop = document.getElementById('desktopSidebarBackdrop');



  if (sidebar) sidebar.classList.add('open');



  if (backdrop) backdrop.classList.add('active');



  document.body.classList.add('sidebar-open');



};







window.closeDesktopSidebar = function() {



  const sidebar = document.getElementById('desktopSidebar');



  const backdrop = document.getElementById('desktopSidebarBackdrop');



  if (sidebar) sidebar.classList.remove('open');



  if (backdrop) backdrop.classList.remove('active');



  document.body.classList.remove('sidebar-open');



};







window.toggleDesktopSidebar = function() {



  const sidebar = document.getElementById('desktopSidebar');



  if (sidebar && sidebar.classList.contains('open')) {



    closeDesktopSidebar();



  } else {



    openDesktopSidebar();



  }



};







// --- FULL DESKTOP MODAL CONTROLLERS (FULL PC EXPERIENCE) ---







// 1. STATS MODAL (DESKTOP)



window.openDesktopStatsModal = function() {



  const modal = document.getElementById('desktopStatsModalBackdrop');



  if (modal) modal.classList.add('open');



  renderDesktopLeaderboardTable();



};



window.closeDesktopStatsModal = function() {



  const modal = document.getElementById('desktopStatsModalBackdrop');



  if (modal) modal.classList.remove('open');



  if (window.resetLiquidNavToHome) window.resetLiquidNavToHome();



};







function renderDesktopLeaderboardTable() {



  const tbody = document.getElementById('desktopLeaderboardTableBody');



  if (!tbody) return;



  const sorted = Object.entries(divisionsData).sort((a, b) => b[1].kpi - a[1].kpi);



  tbody.innerHTML = sorted.map(([key, div], idx) => {



    return `



      <tr>



        <td><strong style="color: ${idx === 0 ? '#EC8129' : idx === 1 ? '#31487A' : '#64748b'};">#${idx + 1}</strong></td>



        <td>



          <div class="desktop-tbl-div-wrap">



            <img src="${div.logoImg || 'logo/logo.png'}" class="desktop-tbl-div-logo" alt="${div.name}" />



            <span>${div.name}</span>



          </div>



        </td>



        <td><span style="color: #475569;">${div.subTitle || div.fullName}</span></td>



        <td><span style="color: #64748b;">${div.membersCount}</span></td>



        <td>



          <div class="desktop-kpi-bar-wrap">



            <div class="desktop-kpi-progress">



              <div class="desktop-kpi-fill" style="width: ${div.kpi}%;"></div>



            </div>



            <strong>${div.kpi}%</strong>



          </div>



        </td>



        <td>



          <a href="${div.href}" target="_blank" rel="noopener noreferrer" class="desktop-tbl-action-btn">



            Buka Laporan ↗



          </a>



        </td>



      </tr>



    `;



  }).join('');



}







// 2. CHAT MODAL (DESKTOP)



let desktopChatChannel = 'all';







window.openDesktopChatModal = function() {



  const modal = document.getElementById('desktopChatModalBackdrop');



  if (modal) modal.classList.add('open');



  const storedName = localStorage.getItem('lb_member_real_name');



  const nameInput = document.getElementById('desktopChatSenderName');



  if (nameInput && storedName) nameInput.value = storedName;



  renderDesktopChatMessages();



};



window.closeDesktopChatModal = function() {



  const modal = document.getElementById('desktopChatModalBackdrop');



  if (modal) modal.classList.remove('open');



  if (window.resetLiquidNavToHome) window.resetLiquidNavToHome();



};







window.handleDesktopChatChannelChange = function(ch) {



  desktopChatChannel = ch;



  renderDesktopChatMessages();



};







function renderDesktopChatMessages() {



  const container = document.getElementById('desktopChatMessagesList');



  if (!container) return;



  const chats = getStoredChats();



  const filtered = desktopChatChannel === 'all'



    ? chats



    : chats.filter(c => c.divKey === desktopChatChannel);







  if (filtered.length === 0) {



    container.innerHTML = `



      <div style="text-align: center; padding: 40px 10px; color: #94a3b8; font-size: 0.85rem;">



        Belum ada pesan di saluran ini.<br>Jadilah yang pertama menulis pesan diskusi!



      </div>



    `;



    return;



  }







  container.innerHTML = filtered.map(msg => {



    const divInfo = divisionsData[msg.divKey] || { name: 'Umum', color: '#31487A' };



    return `



      <div class="chat-msg-item" id="desktop-${msg.id}">



        <div class="chat-msg-header">



          <div class="msg-author-info">



            <span class="msg-sender-name">${escapeHTML(msg.sender)}</span>



            <span class="msg-div-tag" style="background:${divInfo.color}; color:#fff;">${divInfo.name}</span>



          </div>



          <span class="msg-time">${msg.time}</span>



        </div>



        <div class="msg-body-text">${escapeHTML(msg.text)}</div>



        <button class="msg-delete-btn" onclick="deleteChatMessage('${msg.id}')" title="Hapus (Admin)">



          <span>🗑️ Hapus</span>



        </button>



      </div>



    `;



  }).join('');



  container.scrollTop = container.scrollHeight;



}







window.submitDesktopChatMessage = function() {



  const nameInput = document.getElementById('desktopChatSenderName');



  const divSelect = document.getElementById('desktopChatMessageDivSelect');



  const textInput = document.getElementById('desktopChatMessageText');



  const sender = nameInput ? nameInput.value.trim() : '';



  const text = textInput ? textInput.value.trim() : '';



  const divKey = divSelect ? divSelect.value : 'bph';







  if (!sender) {



    alert('⚠️ PERHATIAN:\n\nHarap isi Nama Asli Anda sebelum mengirim pesan.');



    if (nameInput) nameInput.focus();



    return;



  }



  if (!text) return;







  localStorage.setItem('lb_member_real_name', sender);



  const chats = getStoredChats();



  chats.push({



    id: 'msg_' + Date.now(),



    divKey: divKey,



    sender: sender,



    text: text,



    time: formatTimeNow()



  });



  saveChatsToStorage(chats);



  textInput.value = '';



  renderDesktopChatMessages();



  renderChatMessages();



};







// 3. DETAIL MODAL (DESKTOP)



let activeDesktopDivKey = 'bph';







window.openDesktopDetailModal = function(targetKey) {



  const modal = document.getElementById('desktopDetailModalBackdrop');



  if (modal) modal.classList.add('open');



  if (targetKey && divisionsData[targetKey]) {



    activeDesktopDivKey = targetKey;



  }



  renderDesktopDetailView();



};



window.closeDesktopDetailModal = function() {



  const modal = document.getElementById('desktopDetailModalBackdrop');



  if (modal) modal.classList.remove('open');



  if (window.resetLiquidNavToHome) window.resetLiquidNavToHome();



};







function renderDesktopDetailView() {



  const pillsBar = document.getElementById('desktopDivPillsBar');



  const content = document.getElementById('desktopDivDetailContent');



  if (!pillsBar || !content) return;







  pillsBar.innerHTML = Object.entries(divisionsData).map(([key, div]) => `



    <button class="desktop-div-pill-btn ${key === activeDesktopDivKey ? 'active' : ''}" onclick="selectDesktopDivision('${key}')">



      <img src="${div.logoImg || 'logo/logo.png'}" style="width: 18px; height: 18px; object-fit: contain;" alt="" />



      <span>${div.name}</span>



    </button>



  `).join('');







  const active = divisionsData[activeDesktopDivKey] || divisionsData.bph;



  content.innerHTML = `



    <div class="desktop-dd-header">



      <div class="desktop-dd-header-left">



        <img src="${active.logoImg || 'logo/logo.png'}" class="desktop-dd-logo" alt="${active.name}" />



        <div>



          <h3 style="margin: 0; font-size: 1.3rem; color: var(--c-dark-navy, #19243A);">${active.name} - ${active.subTitle}</h3>



          <p style="margin: 4px 0 0; color: #64748B; font-size: 0.85rem;">${active.fullName}</p>



        </div>



      </div>



      <a href="${active.href}" target="_blank" rel="noopener noreferrer" class="desktop-tbl-action-btn" style="padding: 10px 18px; font-size: 0.85rem;">



        Buka Report Card Resmi ↗



      </a>



    </div>







    <div class="desktop-dd-meta-grid">



      <div class="desktop-dd-meta-card">



        <span>Kepala / PIC Divisi</span>



        <strong>${active.pic.name}</strong>



        <small style="color: #64748b;">${active.pic.role}</small>



      </div>



      <div class="desktop-dd-meta-card">



        <span>Target Capaian KPI</span>



        <strong style="color: #EC8129;">${active.kpi}% Capaian</strong>



        <small style="color: #64748b;">${active.kpiLabel}</small>



      </div>



      <div class="desktop-dd-meta-card">



        <span>Jumlah Anggota Aktif</span>



        <strong>${active.membersCount}</strong>



        <small style="color: #10B981;">100% Pengurus Terdaftar</small>



      </div>



    </div>







    <h4 style="font-size: 0.95rem; margin: 0 0 12px; color: var(--c-dark-navy, #19243A);">Dokumen & Formulir Resmi Divisi:</h4>



    <div class="desktop-dd-links-grid">



      ${(active.links || []).map(lnk => `



        <a href="${lnk.href}" target="_blank" rel="noopener noreferrer" class="desktop-dd-link-btn">



          <span style="font-size: 20px;">${lnk.icon || '📄'}</span>



          <strong>${lnk.title}</strong>



          <small>${lnk.desc}</small>



        </a>



      `).join('')}



      <a href="${active.pic.waLink}" target="_blank" rel="noopener noreferrer" class="desktop-dd-link-btn">



        <span style="font-size: 20px;">💬</span>



        <strong>Hubungi PIC via WhatsApp</strong>



        <small>Konsultasi langsung pengurus</small>



      </a>



    </div>



  `;



}







window.selectDesktopDivision = function(key) {



  activeDesktopDivKey = key;



  renderDesktopDetailView();



};







// 4. DESKTOP HORIZONTAL SLIDESHOW & NAVIGATION DISPATCHER

const desktopPageList = ['home', 'detail', 'ai', 'chat', 'stats'];


let activeDesktopPageIndex = 0;



let slideTransitionTimer = null;

window.goToDesktopSlide = function(index, smooth = true) {
  if (index < 0) index = 0;
  if (index >= desktopPageList.length) index = desktopPageList.length - 1;
  activeDesktopPageIndex = index;

  if (slideTransitionTimer) {
    clearTimeout(slideTransitionTimer);
    slideTransitionTimer = null;
  }

  // Instant scroll reset whenever leaving Home so target slide is always perfectly aligned at top
  if (index !== 0) {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    document.body.classList.add('desktop-single-page-locked');
    document.documentElement.classList.add('desktop-single-page-locked');
  } else {
    document.body.classList.remove('desktop-single-page-locked');
    document.documentElement.classList.remove('desktop-single-page-locked');
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  const viewport = document.getElementById('desktopSlidesViewport');
  if (viewport && viewport.scrollLeft !== 0) {
    viewport.scrollLeft = 0;
  }

  const track = document.getElementById('desktopSlidesTrack');
  if (track) {
    if (smooth) {
      track.classList.add('is-sliding');
      setTimeout(() => {
        track.classList.remove('is-sliding');
      }, 600);
    }
    if (!smooth) track.classList.add('no-transition');
    else track.classList.remove('no-transition');
    track.style.transform = `translate3d(-${index * 100}%, 0, 0)`;
  }

  // Update active state on all slides
  const pageIds = ['desktopPageHome', 'desktopPageDetail', 'desktopPageAI', 'desktopPageChat', 'desktopPageStats'];

  pageIds.forEach((id, i) => {
    const el = document.getElementById(id);
    if (el) {
      el.classList.toggle('active', i === index);
    }
  });

  // Sync with floating Liquid Navbar
  if (window.selectLiquidNavItem) {
    window.selectLiquidNavItem(index);
  }
  if (typeof updateTimeBasedAiGreeting === 'function') {
    updateTimeBasedAiGreeting();
  }

  closeDesktopSidebar();
};

window.handleLiquidNavClick = function(index, screenName) {

  window.goToDesktopSlide(index, true);

};



window.handleDesktopNavClick = function(screenName) {

  const navMap = { home: 0, detail: 1, ai: 2, chat: 3, stats: 4 };

  if (navMap[screenName] !== undefined) {

    window.goToDesktopSlide(navMap[screenName], true);

  }

};



window.switchDesktopPageRelative = function(delta) {

  window.goToDesktopSlide(activeDesktopPageIndex + delta, true);

};



// Enable Interactive Horizontal Slideshow Drag Gesture ("di geser geser")

function initDesktopSlideshowGesture() {
  // Navigation between desktop slides is exclusively controlled by the Nimbus Liquid Glass Navbar.
  // Viewport mouse dragging gesture is disabled as requested by user.
  const viewport = document.getElementById('desktopSlidesViewport');
  const track = document.getElementById('desktopSlidesTrack');
  if (viewport) {
    viewport.style.cursor = 'default';
  }
  if (track) {
    track.classList.remove('no-transition');
  }

  // Ensure window resize maintains accurate slide position
  window.addEventListener('resize', () => {
    const t = document.getElementById('desktopSlidesTrack');
    if (t && typeof activeDesktopPageIndex === 'number') {
      t.classList.add('no-transition');
      t.style.transform = `translate3d(-${activeDesktopPageIndex * 100}%, 0, 0)`;
      setTimeout(() => t.classList.remove('no-transition'), 50);
    }
  });
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initDesktopSlideshowGesture);
} else {
  initDesktopSlideshowGesture();
}

// Arrow Key Navigation for Desktop



document.addEventListener('keydown', (e) => {



  // Only trigger if not focusing an input or textarea



  if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) {



    return;



  }



  if (e.key === 'ArrowRight') {



    window.switchDesktopPageRelative(1);



  } else if (e.key === 'ArrowLeft') {



    window.switchDesktopPageRelative(-1);



  }



});







// ==========================================================================

// BERDIKARI AI - FULLSCREEN GEMINI ENGINE & CHAT HANDLERS

// ==========================================================================



const escapeHtmlSafe = (str) => {

  if (!str) return '';

  return String(str)

    .replace(/&/g, '&amp;')

    .replace(/</g, '&lt;')

    .replace(/>/g, '&gt;')

    .replace(/"/g, '&quot;')

    .replace(/'/g, '&#039;');

};



window.autoResizeGeminiTextarea = function(el) {

  if (!el) return;

  el.style.height = 'auto';

  el.style.height = Math.min(el.scrollHeight, 160) + 'px';

};



window.handleDesktopAiPageKeyDown = function(e) {

  if (e.key === 'Enter' && !e.shiftKey) {

    e.preventDefault();

    window.sendDesktopAiPagePrompt();

  }

};



window.askDesktopAiPrompt = function(promptText) {

  const input = document.getElementById('desktopAiPagePromptInput') || document.getElementById('desktopAiPromptInput');

  if (input) {

    input.value = promptText;

    if (window.handleDesktopAiComposerInput) {

      window.handleDesktopAiComposerInput(input);

    } else if (window.autoResizeGeminiTextarea) {

      window.autoResizeGeminiTextarea(input);

    }

  }

  window.sendDesktopAiPagePrompt();

};



window.resetDesktopAiChat = function() {
  if (typeof setDesktopAiTopicTitle === 'function') setDesktopAiTopicTitle('');

  const messagesContainer = document.getElementById('desktopAiPageStreamMessages') || document.getElementById('desktopAiStreamMessages');

  const welcome = document.getElementById('desktopAiPageWelcome') || document.getElementById('desktopAiWelcome');

  const input = document.getElementById('desktopAiPagePromptInput') || document.getElementById('desktopAiPromptInput');



  if (messagesContainer) messagesContainer.innerHTML = '';

  if (welcome) welcome.style.display = 'block';

  if (input) {

    input.value = '';

    input.style.height = 'auto';

  }

  if (window.removeDesktopAiImage) {

    window.removeDesktopAiImage();

  }

  showGeminiToast('Obrolan baru telah dimulai');

};



let lastUserAiPrompt = '';



function getSmartGeminiResponseHTML(promptText, attachedImage) {

  const q = (promptText || '').toLowerCase();

  const dateStr = new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });



  let imageNote = '';

  if (attachedImage) {

    imageNote = `

      <div style="background: rgba(37, 99, 235, 0.08); border-left: 3px solid #2563EB; padding: 10px 14px; border-radius: 6px; margin-bottom: 12px; font-size: 13.5px;">

        🔍 <strong>Analisis Lampiran:</strong> Terdeteksi gambar <em>${escapeHtmlSafe(attachedImage.name)}</em> (${attachedImage.type}). Visual siap digunakan untuk referensi materi publikasi.

      </div>

    `;

  }



  // 1. Structure of 12 Divisi

  if (q.includes('12 divisi') || q.includes('divisi') || q.includes('struktur')) {

    return imageNote + `

      <h4>🏛️ Struktur & Pembagian Tugas 12 Divisi BEM Langkah Berdikari</h4>

      <p>BEM Kabinet Langkah Berdikari terdiri atas 12 divisi strategis yang berfokus pada pelayanan mahasiswa dan pergerakan kampus:</p>

      <ul>

        <li><strong>1. PSDMK</strong>: Pengembangan Sumber Daya Mahasiswa, kaderisasi, alur rekrutmen anggota, dan pelatihan kepemimpinan organisasi.</li>

        <li><strong>2. Medbrand (Media & Branding)</strong>: Desain komunikasi visual, pengelolaan akun Instagram/TikTok resmi, branding identitas kabinet, dan publikasi digital.</li>

        <li><strong>3. Sosmas (Sosial Masyarakat)</strong>: Pengabdian desa binaan, tanggap bencana, bakti sosial, dan aksi kepedulian lingkungan hidup.</li>

        <li><strong>4. Kastrat (Kajian & Aksi Strategis)</strong>: Riset isu kebijakan kampus dan nasional, mimbar bebas, konsolidasi, serta perumusan sikap mahasiswa.</li>

        <li><strong>5. Dagri (Dalam Negeri)</strong>: Menjalin harmonisasi dengan Himpunan Mahasiswa Jurusan (HMJ) dan UKM selingkung fakultas.</li>

        <li><strong>6. Hublu (Hubungan Luar)</strong>: Kunjungan eksternal, studi banding BEM antar-universitas, relasi media pers, dan kemitraan instansi.</li>

        <li><strong>7. Advokesma (Advokasi & Kesejahteraan)</strong>: Pengawalan UKT, beasiswa mahasiswa berprestasi & kurang mampu, dan pengaduan fasilitas kampus.</li>

        <li><strong>8. Danus (Dana & Usaha)</strong>: Penggalangan dana mandiri, penjualan merchandise resmi berdikari, dan kewirausahaan mahasiswa.</li>

        <li><strong>9. Ristek (Riset & Teknologi)</strong>: Portal digital berdikari, pengelolaan sistem database kegiatan, dan transformasi TI.</li>

        <li><strong>10. Seni & Olahraga</strong>: Penyelenggaraan pekan olahraga mahasiswa, kompetisi seni antarfakultas, dan apresiasi bakat.</li>

        <li><strong>11. Rohis / Keagamaan</strong>: Penguatan nilai spiritual, perayaan hari besar keagamaan, dan toleransi antarmahasiswa.</li>

        <li><strong>12. Kesekretariatan & BPH</strong>: Tata kelola persuratan, inventarisasi logistik, pengarsipan SOP, dan pengawasan operasional kabinet.</li>

      </ul>

      <p>💡 <em>Tips: Untuk kolaborasi lintas divisi, silakan koordinasikan melalui Kepala Divisi atau Sekretaris Kabinet.</em></p>

    `;

  }



  // 2. Recruitment PSDMK

  if (q.includes('rekrutmen') || q.includes('psdmk') || q.includes('daftar') || q.includes('syarat')) {

    return imageNote + `

      <h4>📋 Alur & Prosedur Rekrutmen Anggota BEM Langkah Berdikari</h4>

      <p>Rekrutmen terbuka (*Open Recruitment*) diselenggarakan secara transparan oleh Divisi PSDMK dengan tahapan sebagai berikut:</p>

      <ol>

        <li><strong>Pengisian Formulir Daring & Berkas Administrasi</strong>:

          <ul>

            <li>Curriculum Vitae (CV) kreatif terbaru.</li>

            <li>Kartu Tanda Mahasiswa (KTM) aktif & KHS semester terakhir (IPK min. 2.75).</li>

            <li>Portofolio karya (khusus pendaftar Divisi Medbrand atau Ristek).</li>

          </ul>

        </li>

        <li><strong>Screening Administrasi & Leaderless Group Discussion (LGD)</strong>:

          <p>Uji kemampuan pemecahan masalah (*problem solving*), kerjasama tim, dan penyampaian gagasan.</p>

        </li>

        <li><strong>Wawancara Personal (Interview Komitmen & Visi)</strong>:

          <p>Pendalaman motivasi, kesiapan waktu, dan pemahaman visi-misi Kabinet Langkah Berdikari bersama BPH dan Kadiv.</p>

        </li>

        <li><strong>Masa Magang / Onboarding & Pelantikan Resmi</strong>:

          <p>Pembekalan SOP kerja, orientasi divisi, dan pengukuhan anggota kabinet resmi.</p>

        </li>

      </ol>

      <p>📌 <em>Pengumuman berkas dan jadwal wawancara diumumkan melalui portal Berdikari dan kanal broadcast divisi.</em></p>

    `;

  }



  // 3. Request Desain Medbrand

  if (q.includes('desain') || q.includes('medbrand') || q.includes('poster') || q.includes('feed') || q.includes('reels')) {

    return imageNote + `

      <h4>🎨 Standar Operasional Prosedur (SOP) Request Publikasi Medbrand</h4>

      <p>Untuk menjaga mutu visual dan jadwal publikasi resmi kabinet, setiap divisi pemohon wajib mematuhi ketentuan berikut:</p>

      <ul>

        <li><strong>Batas Waktu Pengajuan (H-7)</strong>: Form request dan draft materi harus sudah diserahkan maksimal 7 hari sebelum hari-H publikasi.</li>

        <li><strong>Kelengkapan Brief Konten</strong>:

          <ul>

            <li>Judul kegiatan, narasi caption lengkap, dan tanggal pelaksanaan.</li>

            <li>Logo partner pendukung dengan format PNG transparan berkualitas tinggi.</li>

            <li>Format publikasi yang diminta (Instagram Feed 1:1, Story/Reels 9:16, atau Banner Cetak).</li>

          </ul>

        </li>

        <li><strong>Proses Pengerjaan & Ketentuan Revisi</strong>:

          <ul>

            <li>Divisi Medbrand menyediakan preview draft maksimal pada H-3.</li>

            <li>Maksimal revisi minor sebanyak <strong>2 kali</strong> sebelum finalisasi render.</li>

          </ul>

        </li>

      </ul>

      <p>📩 <em>Formulir digital dapat diajukan via formulir request di menu divisi Medbrand atau narahubung koordinator desainer.</em></p>

    `;

  }



  // 4. Proker / Event Management

  if (q.includes('proker') || q.includes('program kerja') || q.includes('timeline') || q.includes('acara') || q.includes('proposal')) {

    return imageNote + `

      <h4>💡 Kerangka Penyusunan Program Kerja & Timeline Eksekutif</h4>

      <p>Berikut panduan sistematis manajemen kepanitiaan acara mahasiswa BEM:</p>

      <ol>

        <li><strong>Fase Perencanaan (H-45 s.d. H-30)</strong>:

          <ul>

            <li>Penyusunan Term of Reference (TOR) dan Rencana Anggaran Biaya (RAB).</li>

            <li>Pengesahan struktur panitia pengarah (SC) dan panitia pelaksana (OC).</li>

          </ul>

        </li>

        <li><strong>Fase Legalitas & Advokasi (H-30 s.d. H-14)</strong>:

          <ul>

            <li>Pengajuan tanda tangan proposal ke BPH, DPM, dan pihak Dekanat / Rektorat.</li>

            <li>Peminjaman sarana prasarana kampus (aula, sound system, perizinan keamanan).</li>

          </ul>

        </li>

        <li><strong>Fase Publikasi & Eksekusi (H-14 s.d. Hari-H)</strong>:

          <ul>

            <li>Penyebaran publikasi via Medbrand dan pembukaan pendaftaran peserta.</li>

            <li>Gladi kotor dan gladi resik rundown acara bersama seluruh seksi acara.</li>

          </ul>

        </li>

        <li><strong>Fase Evaluasi & LPJ (H+1 s.d. H+14)</strong>:

          <ul>

            <li>Rapat pleno evaluasi kendala tiap divisi panitia.</li>

            <li>Pengarsipan Laporan Pertanggungjawaban (LPJ) keuangan dan administrasi.</li>

          </ul>

        </li>

      </ol>

      <p>✨ <em>Gunakan template format proposal baku yang telah disediakan di kesekretariatan untuk mempercepat proses tanda tangan.</em></p>

    `;

  }



  // 5. Default Intelligent Gemini Response

  return imageNote + `

    <h4>✨ Halo! Saya Asisten Berdikari AI (Gemini 2.0 Engine)</h4>

    <p>Saya siap membantu kebutuhan administrasi, operasional organisasi, maupun diskusi akademik seputar <strong>BEM Langkah Berdikari</strong>:</p>

    <ul>

      <li><strong>Informasi & SOP 12 Divisi</strong>: Hublu, Sosmas, Kastrat, Medbrand, PSDMK, Advokesma, dsb.</li>

      <li><strong>Penyusunan Naskah & Dokumen</strong>: Format surat audiensi, draf proposal kegiatan, dan rincian anggaran.</li>

      <li><strong>Diskusi Strategis</strong>: Ide konsep tema acara, kampanye sosial kampus, dan penyusunan kuesioner mahasiswa.</li>

    </ul>

    <p>Ada topik spesifik atau bantuan draf yang ingin Anda formulasikan bersama sekarang?</p>

  `;

}




function setDesktopAiTopicTitle(promptText) {
  const titleEl = document.getElementById('desktopAiTopTitle');
  const sepEl = document.getElementById('desktopAiTopSep');
  if (!titleEl) return;

  if (!promptText) {
    titleEl.textContent = 'Obrolan Baru';
    if (sepEl) sepEl.style.display = 'inline';
    return;
  }

  const q = promptText.toLowerCase();
  let title = '';
  if (q.includes('12 divisi') || q.includes('divisi') || q.includes('struktur')) {
    title = 'Struktur 12 Divisi';
  } else if (q.includes('rekrutmen') || q.includes('daftar') || q.includes('oprec') || q.includes('anggota')) {
    title = 'Alur Rekrutmen Anggota';
  } else if (q.includes('desain') || q.includes('medbrand') || q.includes('poster') || q.includes('feed') || q.includes('reels')) {
    title = 'Request Desain Medbrand';
  } else if (q.includes('proker') || q.includes('timeline') || q.includes('lpj') || q.includes('program kerja')) {
    title = 'Draf Timeline & Proker';
  } else if (q.includes('sop') || q.includes('surat') || q.includes('proposal') || q.includes('izin')) {
    title = 'SOP & Administrasi BEM';
  } else if (q.includes('bph') || q.includes('presma') || q.includes('wapresma')) {
    title = 'Pimpinan & BPH Kabinet';
  } else {
    const clean = promptText.replace(/[?.,!]+$/, '').trim();
    title = clean.length > 36 ? clean.substring(0, 34) + '...' : clean;
  }

  titleEl.textContent = title;
  titleEl.setAttribute('title', promptText);
  if (sepEl) sepEl.style.display = 'inline';
}
window.setDesktopAiTopicTitle = setDesktopAiTopicTitle;

window.sendDesktopAiPagePrompt = function() {

  const input = document.getElementById('desktopAiPagePromptInput') || document.getElementById('desktopAiPromptInput');

  const messagesContainer = document.getElementById('desktopAiPageStreamMessages') || document.getElementById('desktopAiStreamMessages');

  const chatFlow = document.getElementById('desktopAiPageMessagesFlow') || document.getElementById('desktopAiChatFlow');

  const welcome = document.getElementById('desktopAiPageWelcome') || document.getElementById('desktopAiWelcome');



  if (!input || !messagesContainer) return;



  const text = input.value.trim();

  const attachedImage = window.pendingDesktopAiImage || null;



  if (!text && !attachedImage) return;

  lastUserAiPrompt = text;
  setDesktopAiTopicTitle(text);



  // Hide welcome hero on first message

  if (welcome) welcome.style.display = 'none';



  // Build User Bubble

  const userMsg = document.createElement('div');

  userMsg.className = 'gemini-msg user';



  let imgHTML = '';

  if (attachedImage) {

    imgHTML = `

      <div class="gemini-user-img-preview">

        <img src="${attachedImage.dataUrl}" alt="${escapeHtmlSafe(attachedImage.name)}" />

      </div>

    `;

  }



  userMsg.innerHTML = `

    <div class="gemini-user-bubble">

      ${imgHTML}

      <div>${escapeHtmlSafe(text)}</div>

    </div>

  `;

  messagesContainer.appendChild(userMsg);



  // Clear input & image preview

  input.value = '';

  input.style.height = 'auto';

  if (window.removeDesktopAiImage) {

    window.removeDesktopAiImage();

  }

  if (typeof composerAttachedFilesList !== 'undefined') {

    composerAttachedFilesList = [];


    if (typeof renderComposerAttachedChips === 'function') renderComposerAttachedChips();

    if (typeof updateComposerSubmitButtonState === 'function') updateComposerSubmitButtonState();

  }



  if (chatFlow) chatFlow.scrollTop = chatFlow.scrollHeight;



  // Show Gemini Searching indicator

  const searchingMsg = document.createElement('div');

  searchingMsg.className = 'gemini-msg bot gemini-searching';

  searchingMsg.id = 'geminiSearchingIndicator';

  searchingMsg.innerHTML = `

    <div class="gemini-bot-avatar">

      ${getComposerProviderSvg((typeof getActiveAiModelInfo === 'function' ? getActiveAiModelInfo().modelProvider : 'gemini'), 22)}

    </div>

    <div class="gemini-bot-content ai-thinking-content">
      <div class="shining-text-container">
        <span class="shining-text">${getThinkingModelName((typeof getActiveAiModelInfo === 'function' ? getActiveAiModelInfo().modelName : 'AI Engine'))} is thinking...</span>
      </div>
    </div>

  `;

  messagesContainer.appendChild(searchingMsg);

  if (chatFlow) chatFlow.scrollTop = chatFlow.scrollHeight;



  // Respond with simulated offline code error (Layanan AI belum aktif)

  setTimeout(() => {

    const indicator = document.getElementById('geminiSearchingIndicator');

    if (indicator) indicator.remove();



    const botMsg = document.createElement('div');

    botMsg.className = 'gemini-msg bot';



    botMsg.innerHTML = `

      <div class="gemini-bot-avatar">

        ${getComposerProviderSvg((typeof getActiveAiModelInfo === 'function' ? getActiveAiModelInfo().modelProvider : 'gemini'), 22)}

      </div>

      <div class="gemini-bot-content">
        <div class="gemini-response-text" style="width: 100%;">
          ${getProperAiResponseHTML(text, !!attachedImage)}
        </div>

        <div class="gemini-bot-actions">

          <button type="button" class="gemini-btn-icon" title="Salin Kode Error" onclick="copyAiResponse(this)">

            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">

              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>

              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>

            </svg>

          </button>

          <button type="button" class="gemini-btn-icon" title="Coba Hubungi Lagi" onclick="retryAiResponse()">

            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">

              <polyline points="23 4 23 10 17 10"></polyline>

              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>

            </svg>

          </button>

        </div>

      </div>

    `;



    messagesContainer.appendChild(botMsg);

    if (chatFlow) chatFlow.scrollTop = chatFlow.scrollHeight;

    // Smooth Progressive Text Reveal on PC / Laptop
    const contentBody = botMsg.querySelector('.ollama-content-body');
    const metaEl = botMsg.querySelector('.ollama-card-meta');
    const actionsEl = botMsg.querySelector('.gemini-bot-actions');
    if (metaEl) {
      metaEl.style.opacity = '0';
      metaEl.style.transform = 'translateY(6px)';
      metaEl.style.pointerEvents = 'none';
      metaEl.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
    }
    if (actionsEl) {
      actionsEl.style.opacity = '0';
      actionsEl.style.transform = 'translateY(6px)';
      actionsEl.style.pointerEvents = 'none';
      actionsEl.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
    }
    if (contentBody && typeof streamTextReveal === 'function') {
      const originalHtml = contentBody.innerHTML;
      streamTextReveal(contentBody, originalHtml, 14, () => {
        if (metaEl) {
          metaEl.style.opacity = '1';
          metaEl.style.transform = 'translateY(0)';
          metaEl.style.pointerEvents = 'auto';
        }
        if (actionsEl) {
          actionsEl.style.opacity = '1';
          actionsEl.style.transform = 'translateY(0)';
          actionsEl.style.pointerEvents = 'auto';
        }
        if (chatFlow) chatFlow.scrollTop = chatFlow.scrollHeight;
      });
    }

  }, 1200);

};



window.copyAiResponse = function(btn) {

  const botMsg = btn.closest('.gemini-msg');

  if (!botMsg) return;

  const textEl = botMsg.querySelector('.gemini-response-text') || botMsg.querySelector('.gemini-bubble.bot-bubble') || botMsg.querySelector('.ai-relaxed-card') || botMsg.querySelector('.ollama-ai-card');

  const text = textEl ? textEl.innerText.trim() : '';



  if (navigator.clipboard && navigator.clipboard.writeText) {

    navigator.clipboard.writeText(text).then(() => {

      showGeminiToast('Tanggapan berhasil disalin ke clipboard');

    }).catch(() => {

      showGeminiToast('Teks tersalin');

    });

  } else {

    showGeminiToast('Teks tersalin');

  }

};



window.toastAiFeedback = function(btn) {

  btn.classList.toggle('active');

  if (btn.classList.contains('active')) {

    showGeminiToast('Terima kasih atas tanggapan Anda!');

  }

};



window.retryAiResponse = function() {

  if (lastUserAiPrompt) {

    const input = document.getElementById('desktopAiPagePromptInput') || document.getElementById('desktopAiPromptInput');

    if (input) input.value = lastUserAiPrompt;

    window.sendDesktopAiPagePrompt();

  } else {

    showGeminiToast('Tidak ada pesan sebelumnya untuk dimuat ulang');

  }

};



let isRecordingVoice = false;

window.toggleDesktopAiVoice = function() {

  const micBtn = document.getElementById('desktopAiMicBtn');

  const input = document.getElementById('desktopAiPagePromptInput') || document.getElementById('desktopAiPromptInput');



  isRecordingVoice = !isRecordingVoice;

  if (micBtn) micBtn.classList.toggle('recording', isRecordingVoice);



  if (isRecordingVoice) {

    showGeminiToast('Mendengarkan... Silakan berbicara');

    setTimeout(() => {

      if (isRecordingVoice && input) {

        input.value = 'Tolong berikan rekomendasi program kerja unggulan untuk semester ini';

        window.autoResizeGeminiTextarea(input);

        isRecordingVoice = false;

        if (micBtn) micBtn.classList.remove('recording');

        showGeminiToast('Suara berhasil ditranskrip');

      }

    }, 2800);

  } else {

    showGeminiToast('Perekaman dibatalkan');

  }

};



function showGeminiToast(msg) {

  let toast = document.getElementById('geminiFloatingToast');

  if (!toast) {

    toast = document.createElement('div');

    toast.id = 'geminiFloatingToast';

    toast.className = 'gemini-toast';

    document.body.appendChild(toast);

  }

  toast.textContent = msg;

  toast.classList.add('show');

  setTimeout(() => {

    toast.classList.remove('show');

  }, 2400);

}







if (document.readyState === 'loading') {






} else {






}







document.addEventListener('keydown', function(e) {



  if (e.key === 'Escape') {



    closeDesktopSidebar();



    closeDesktopStatsModal();



    closeDesktopChatModal();



    closeDesktopDetailModal();



    closeDesktopAiChat();



  }



});







window.toggleDesktopAiChat = function() {



  const modal = document.getElementById('desktopAiModal');



  if (!modal) return;



  modal.classList.toggle('open');



  if (modal.classList.contains('open')) {



    const input = document.getElementById('desktopAiPromptInput');



    if (input) setTimeout(() => input.focus(), 150);



  }



};







window.closeDesktopAiChat = function() {



  const modal = document.getElementById('desktopAiModal');



  if (modal) modal.classList.remove('open');



  if (window.resetLiquidNavToHome) window.resetLiquidNavToHome();



};







window.openDesktopAiChat = function() {



  const modal = document.getElementById('desktopAiModal');



  if (!modal) return;



  modal.classList.add('open');



  const input = document.getElementById('desktopAiPromptInput');



  if (input) setTimeout(() => input.focus(), 150);



};







window.triggerDesktopAiImageUpload = function() {



  const fileInput = document.getElementById('desktopAiImageFileInput');



  if (fileInput) fileInput.click();



};







window.handleDesktopAiImageSelect = function(e) {



  const file = e.target.files && e.target.files[0];




  if (!file) return;







  if (!file.type.startsWith('image/')) {



    alert('Silakan pilih file gambar (JPG, PNG, WebP).');



    return;



  }







  const reader = new FileReader();



  reader.onload = function(evt) {



    pendingDesktopAiImage = {



      name: file.name,



      type: file.type,



      dataUrl: evt.target.result



    };



    const previewContainer = document.getElementById('desktopAiImgPreview');



    const previewImg = document.getElementById('desktopAiImgPreviewSrc');



    if (previewImg) previewImg.src = evt.target.result;



    if (previewContainer) previewContainer.style.display = 'flex';



  };



  reader.readAsDataURL(file);



};







window.removeDesktopAiImage = function() {



  pendingDesktopAiImage = null;



  const fileInput = document.getElementById('desktopAiImageFileInput');



  if (fileInput) fileInput.value = '';



  const previewContainer = document.getElementById('desktopAiImgPreview');



  if (previewContainer) previewContainer.style.display = 'none';



};







// Old modal aliases forwarded to Gemini Engine

window.sendDesktopAiPrompt = function() { window.sendDesktopAiPagePrompt(); };





// ==========================================================================




// ==========================================================================
// DYNAMIC TIME-BASED GREETING HELPER (PAGI / SIANG / SORE / MALAM)
// ==========================================================================
function getTimeBasedGreeting() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const timeVal = hour + minute / 60;

  if (timeVal >= 4 && timeVal < 11) {
    return 'Halo, Selamat Pagi';
  } else if (timeVal >= 11 && timeVal < 15) {
    return 'Halo, Selamat Siang';
  } else if (timeVal >= 15 && timeVal < 18.5) {
    return 'Halo, Selamat Sore';
  } else {
    return 'Halo, Selamat Malam';
  }
}

function updateTimeBasedAiGreeting() {
  const greeting = getTimeBasedGreeting();
  const desktopTitle = document.getElementById('desktopAiGreetingTitle') ||
                       document.querySelector('#desktopAiPageWelcome .gemini-title-gradient');
  if (desktopTitle) {
    desktopTitle.textContent = greeting;
  }

  const mobileTitle = document.getElementById('mobileAiGreetingTitle') ||
                      document.querySelector('#aiGeminiHero .gemini-greeting-title');
  if (mobileTitle) {
    mobileTitle.textContent = greeting;
  }
}
window.getTimeBasedGreeting = getTimeBasedGreeting;
window.updateTimeBasedAiGreeting = updateTimeBasedAiGreeting;

// Initial call and periodic check
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', updateTimeBasedAiGreeting);
} else {
  updateTimeBasedAiGreeting();
}
setInterval(updateTimeBasedAiGreeting, 60000);


// ==========================================================================
// MACOS LIQUID GENIE EFFECT CONTROLLER FOR MODEL & MODE POPOVERS
// ==========================================================================

function updatePopoverGenieOrigin(popover, btn) {
  if (!popover || !btn) return;
  try {
    const btnRect = btn.getBoundingClientRect();
    const popRect = popover.getBoundingClientRect();
    if (popRect.width > 0) {
      const btnCenterX = btnRect.left + btnRect.width / 2;
      const relativeX = btnCenterX - popRect.left;
      const originPercentX = Math.max(8, Math.min(92, Math.round((relativeX / popRect.width) * 100)));
      popover.style.transformOrigin = `${originPercentX}% 100%`;
    } else {
      popover.style.transformOrigin = 'bottom center';
    }
  } catch (e) {
    popover.style.transformOrigin = 'bottom center';
  }
}

function setMobileControlsHidden(hidden) {
  const controlsBar = document.getElementById('mobileAiControlsBar') || document.querySelector('.aic-controls-bar-mobile');
  if (controlsBar) {
    if (hidden) {
      controlsBar.classList.add('aic-mobile-controls-hidden');
    } else {
      controlsBar.classList.remove('aic-mobile-controls-hidden');
    }
  }
}
window.setMobileControlsHidden = setMobileControlsHidden;


window.shiftModelButtonForMode = function(open, isMobile = false) {
  const triggerBtnId = isMobile ? 'mobileAiModelTriggerBtn' : 'desktopAiModelTriggerBtn';
  const triggerBtn = document.getElementById(triggerBtnId);
  const modelAnchor = triggerBtn ? triggerBtn.closest('.aic-dropdown-anchor') : null;
  if (!modelAnchor) return;

  if (open) {
    const modeBtnId = isMobile ? 'mobileAiModeBtn' : 'desktopAiModeBtn';
    const modeBtn = document.getElementById(modeBtnId);
    let shiftDist;
    if (modeBtn && modeBtn.offsetWidth > 0) {
      const modeWidth = modeBtn.getBoundingClientRect().width;
      const gap = isMobile ? 6 : 8;
      shiftDist = Math.round(modeWidth + gap);
    } else {
      shiftDist = isMobile ? 68 : 90;
    }
    modelAnchor.style.transition = 'transform 0.28s cubic-bezier(0.34, 1.25, 0.64, 1)';
    modelAnchor.style.setProperty('transform', `translateX(-${shiftDist}px)`, 'important');
  } else {
    modelAnchor.style.transition = 'transform 0.24s cubic-bezier(0.34, 1.25, 0.64, 1)';
    modelAnchor.style.setProperty('transform', '', '');
  }
};

window.openComposerPopoverWithGenie = function(popover, btn, type = '') {
  if (!popover) return;
  const isAlreadyOpen = (popover.classList.contains('aic-popover-visible') || popover.classList.contains('is-open')) &&
                        !popover.classList.contains('aic-genie-closing');
  if (isAlreadyOpen) return;

  if (popover.__genieCloseTimer) {
    clearTimeout(popover.__genieCloseTimer);
    popover.__genieCloseTimer = null;
  }
  if (popover.__genieRestoreTimer) {
    clearTimeout(popover.__genieRestoreTimer);
    popover.__genieRestoreTimer = null;
  }

  // 1. Shift model button if mode is opening
  if (type === 'mode') {
    if (typeof window.shiftModelButtonForMode === 'function') window.shiftModelButtonForMode(true, false);
  } else if (type === 'mobileMode') {
    if (typeof window.shiftModelButtonForMode === 'function') window.shiftModelButtonForMode(true, true);
  }

  // 2. Hide mobile bottom controls bar if mobile model selector
  const isMobileModel = (type === 'mobileModel');
  const effortId = isMobileModel ? 'mobileAiEffortPopover' : 'desktopAiEffortPopover';
  const effortPop = document.getElementById(effortId);
  if (effortPop) {
    effortPop.classList.remove('aic-popover-visible');
    effortPop.classList.add('aic-popover-hidden');
  }
  if (isMobileModel && typeof setMobileControlsHidden === 'function') {
    setMobileControlsHidden(true);
  }

  // 3. Open with Genie.open using genuine macOS suction clip-path + transform physics
  popover.classList.remove('aic-popover-hidden', 'aic-genie-closing');
  popover.classList.add('aic-popover-visible');

  if (window.Genie && typeof window.Genie.open === 'function' && btn) {
    window.Genie.open(popover, btn, {
      mode: 'genie',
      openDuration: 520,
      closeDuration: 340
    });
  } else {
    popover.classList.add('is-open');
  }

  // 4. Hide trigger button with smooth transition
  if (btn) {
    btn.classList.add('aic-trigger-hidden-by-popover', 'menu-open');
  }
};

window.closeComposerPopoverWithGenie = function(popover, btn, type = '', immediate = false) {
  if (!popover) return;
  const isShown = popover.classList.contains('aic-popover-visible') || popover.classList.contains('is-open');
  if (!isShown && !popover.classList.contains('aic-genie-closing')) {
    ['desktopAiModelTriggerBtn', 'mobileAiModelTriggerBtn', 'desktopAiAutoTriggerBtn', 'mobileAiAutoTriggerBtn', 'desktopAiModeBtn', 'mobileAiModeBtn'].forEach(id => {
      const b = document.getElementById(id);
      if (b) b.classList.remove('aic-trigger-hidden-by-popover', 'menu-open');
    });
    return;
  }

  if (popover.__genieCloseTimer) {
    clearTimeout(popover.__genieCloseTimer);
    popover.__genieCloseTimer = null;
  }
  if (popover.__genieRestoreTimer) {
    clearTimeout(popover.__genieRestoreTimer);
    popover.__genieRestoreTimer = null;
  }

  const isMobileModel = (type === 'mobileModel');

  if (immediate) {
    if (type === 'mode') {
      if (typeof window.shiftModelButtonForMode === 'function') window.shiftModelButtonForMode(false, false);
    } else if (type === 'mobileMode') {
      if (typeof window.shiftModelButtonForMode === 'function') window.shiftModelButtonForMode(false, true);
    }
    ['desktopAiModelTriggerBtn', 'mobileAiModelTriggerBtn', 'desktopAiAutoTriggerBtn', 'mobileAiAutoTriggerBtn', 'desktopAiModeBtn', 'mobileAiModeBtn'].forEach(id => {
      const b = document.getElementById(id);
      if (b) b.classList.remove('aic-trigger-hidden-by-popover', 'menu-open');
    });
    if (isMobileModel && typeof setMobileControlsHidden === 'function') setMobileControlsHidden(false);
    if (window.Genie && typeof window.Genie.close === 'function') {
      window.Genie.close(popover);
    }
    popover.classList.remove('aic-popover-visible', 'is-open', 'aic-genie-closing');
    popover.classList.add('aic-popover-hidden');
    return;
  }

  // 1. Shift model button back if mode
  if (type === 'mode') {
    if (typeof window.shiftModelButtonForMode === 'function') window.shiftModelButtonForMode(false, false);
  } else if (type === 'mobileMode') {
    if (typeof window.shiftModelButtonForMode === 'function') window.shiftModelButtonForMode(false, true);
  }

  // 2. Play Genie close animation (sucking back into trigger)
  popover.classList.add('aic-genie-closing');
  if (window.Genie && typeof window.Genie.close === 'function') {
    window.Genie.close(popover);
  }

  // 3. Restore trigger button as suction completes
  popover.__genieRestoreTimer = setTimeout(() => {
    if (btn) {
      btn.classList.remove('aic-trigger-hidden-by-popover', 'menu-open');
    }
    if (isMobileModel && typeof setMobileControlsHidden === 'function') {
      setMobileControlsHidden(false);
    }
    popover.__genieRestoreTimer = null;
  }, 180);

  // 4. Complete cleanup
  popover.__genieCloseTimer = setTimeout(() => {
    popover.classList.remove('aic-popover-visible', 'aic-genie-closing', 'is-open');
    popover.classList.add('aic-popover-hidden');
    popover.__genieCloseTimer = null;
  }, 340);
};

// NIMBUS LIQUID GLASS NAVBAR - WEBGL SHADER & SPRING DYNAMICS ENGINE



// ==========================================================================







function initDesktopLiquidNavbar() {



  const nav = document.getElementById('nimbusNav');



  const canvas = document.getElementById('nimbusWaterCanvas');



  const drop = document.getElementById('nimbusDropFallback');



  if (!nav || !canvas) return;







  const PAD = 14;



  const VERT = "attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}";



  const FRAG = `precision highp float;



uniform vec2 uRes;uniform float uDpr;uniform float uTime;uniform vec4 uPill;



uniform vec4 uBlob[6];
uniform float uSy[6];
uniform vec4 uRip[6];
uniform vec3 uMouse;uniform float uDark;uniform float uAmb;



float sdRB(vec2 p,vec2 b,float r){vec2 q=abs(p)-b+r;return length(max(q,0.))+min(max(q.x,q.y),0.)-r;}



float sdCap(vec2 p,vec4 B,float sy){p-=B.xy;p.y/=sy;p.x=max(abs(p.x)-B.z,0.);return(length(p)-B.w)*min(1.,sy);}



float smin(float a,float b,float k){float h=clamp(.5+.5*(b-a)/k,0.,1.);return mix(b,a,h)-k*h*(1.-h);}



float dropD(vec2 p){float d=1e4;for(int i=0;i<6;i++){if(uBlob[i].w>.5){d=smin(d,sdCap(p,uBlob[i],uSy[i]),13.);}}return d;}



float pillD(vec2 p){vec2 h=uPill.zw*.5;return sdRB(p-uPill.xy-h,h,h.y);}



float lens(float d,float w){float t=clamp(-d/w,0.,1.);return sqrt(1.-(1.-t)*(1.-t));}



float waves(vec2 p){float w=0.;



 for(int i=0;i<6;i++){vec4 R=uRip[i];
if(R.w>0.){float x=length(p-R.xy)-R.z*240.;w+=R.w*exp(-R.z*1.7)*sin(x*.3)*exp(-x*x/700.);}}



 vec2 m=p-uMouse.xy;w+=uMouse.z*3.6*exp(-dot(m,m)/1000.);



 w+=uAmb*(sin(p.x*.05+uTime*1.2)*.45+sin(p.x*.13-uTime*.85+p.y*.2)*.25);return w;}



float H(vec2 p){float dp=pillD(p);return lens(dp,uPill.w*.36)*2.4+lens(dropD(p),11.)*7.5+waves(p)*smoothstep(0.,7.,-dp);}



float caus(vec2 p,float t){vec2 q=p;float c=0.;for(int i=0;i<3;i++){q+=vec2(sin(q.y*1.1+t),cos(q.x*1.3-t*.7))*.6;c+=1./(1.+16.*abs(sin(q.x)*sin(q.y)));}return c/3.;}



void main(){



 vec2 p=vec2(gl_FragCoord.x,uRes.y*uDpr-gl_FragCoord.y)/uDpr;



 float dp=pillD(p);float dd=dropD(p);



 float h0=H(p);vec3 n=normalize(vec3(h0-H(p+vec2(1.,0.)),h0-H(p+vec2(0.,1.)),1.));



 vec3 V=vec3(0.,0.,1.);



 float spec=pow(max(dot(reflect(-normalize(vec3(-.45,-.8,.85)),n),V),0.),55.);



 float spec2=pow(max(dot(reflect(-normalize(vec3(.6,.75,.7)),n),V),0.),18.)*.4;



 float fres=clamp((1.-n.z)*4.,0.,1.);



 vec3 irid=.5+.5*cos(6.2831*(vec3(0.,.33,.67)+fres*.85+p.x*.0028+uTime*.035));



 float pm=smoothstep(1.,-1.,dp);float dm=smoothstep(1.,-1.,dd)*smoothstep(1.,-2.,dp);



 float sh=smoothstep(10.,-10.,dropD(p-vec2(0.,5.)))*(1.-dm)*pm*(.28+.12*uDark);



 vec3 c=vec3(0.,.18,.45)*sh;float a=sh;



 float pa=clamp(pm*(fres*.6+spec*1.1+spec2),0.,1.);



 c=mix(vec3(1.),irid,.6*fres)*pa+c*(1.-pa);a=pa+a*(1.-pa);



 float th=lens(dd,11.);



 float cs=caus((p+n.xy*th*18.)*.085,uTime*.9);



 vec3 tint=mix(vec3(.55,.82,1.),vec3(.32,.65,.95),uDark);



 float rim=dm*(1.-smoothstep(0.,8.,-dd));



 float cres=dm*smoothstep(.10,.60,dot(n.xy,normalize(vec2(.55,.85))))*smoothstep(0.,3.,-dd);



 float body=.5+.5*clamp(-n.y*3.,-1.,1.);



 float da=dm*(.48+.24*body)*(1.-.35*uDark);vec3 dc=mix(tint,vec3(.92,.98,1.),body*.5);



 float la=rim*.38;vec3 lc=mix(vec3(0.,.48,.88),vec3(.1,.62,1.),uDark);dc=lc*la+dc*da*(1.-la);da=la+da*(1.-la);



 la=clamp(cres*.85+smoothstep(.5,1.,cs)*.38*th*dm,0.,1.);dc=vec3(1.)*la+dc*(1.-la);da=la+da*(1.-la);



 la=clamp(dm*(spec*1.6+spec2*.7),0.,1.);dc=vec3(1.)*la+dc*(1.-la);da=la+da*(1.-la);



 la=dm*smoothstep(-2.,0.,dd)*.55;dc=mix(vec3(1.),irid,.45)*la+dc*(1.-la);da=la+da*(1.-la);



 c=dc+c*(1.-da);a=da+a*(1.-da);



 gl_FragColor=vec4(c,a);



}`;







  function initGL(canvasEl) {



    try {



      const gl = canvasEl.getContext("webgl", { premultipliedAlpha: true, alpha: true, antialias: false });



      if (!gl) return null;



      const sh = (type, src) => {



        const s = gl.createShader(type);



        gl.shaderSource(s, src);



        gl.compileShader(s);



        return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null;



      };



      const vs = sh(gl.VERTEX_SHADER, VERT);



      const fs = sh(gl.FRAGMENT_SHADER, FRAG);



      if (!vs || !fs) return null;



      const p = gl.createProgram();



      gl.attachShader(p, vs);



      gl.attachShader(p, fs);



      gl.linkProgram(p);



      if (!gl.getProgramParameter(p, gl.LINK_STATUS)) return null;



      gl.useProgram(p);



      const buf = gl.createBuffer();



      gl.bindBuffer(gl.ARRAY_BUFFER, buf);



      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);



      const loc = gl.getAttribLocation(p, "a");



      gl.enableVertexAttribArray(loc);



      gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);



      const u = {};



      ["uRes", "uDpr", "uTime", "uPill", "uMouse", "uDark", "uAmb"].forEach(n => {



        u[n] = gl.getUniformLocation(p, n);



      });



      u["uBlob"] = gl.getUniformLocation(p, "uBlob[0]") || gl.getUniformLocation(p, "uBlob");



      u["uSy"] = gl.getUniformLocation(p, "uSy[0]") || gl.getUniformLocation(p, "uSy");



      u["uRip"] = gl.getUniformLocation(p, "uRip[0]") || gl.getUniformLocation(p, "uRip");



      return { gl, u };



    } catch (e) {



      return null;



    }



  }







  const items = Array.from(nav.querySelectorAll('.nimbus-item'));



  let current = 0;



  const audio = { ctx: null };







  const st = {



    a: { x: 0, v: 0 },



    b: { x: 0, v: 0 },



    sy: { s: 1, v: 0 },



    lead: 0,



    lagFrom: 0,



    sats: [],



    rips: [],



    t: { x: 0, cy: 0, q: 0, r: 21 },



    q: 0,



    mouse: { x: 0, y: 0, s: 0, on: false },



    moving: false,



    split: false,



    ready: false,



    w: 0,



    h: 0,



    visible: true,



    reduce: false,



    raf: 0,



    last: 0,



    time: 0,



    glc: null



  };







  st.reduce = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);



  st.glc = initGL(canvas);



  if (!st.glc) {



    nav.setAttribute('data-gl', 'off');



  }







  function plip() {
    // Click sound disabled on PC as requested
  }







  function local(clientX, clientY) {



    const r = nav.getBoundingClientRect();



    return { x: clientX - r.left + PAD, y: clientY - r.top + PAD };



  }







  function ripple(x, y, amp) {



    if (st.reduce) return;



    st.rips.push({ x, y, age: 0, amp });



    loop();



  }







  function iconCenter(i) {



    const item = items[i];




    if (!item) return null;



    const icon = item.querySelector('.nv-ico');



    if (!icon) return null;



    const b = icon.getBoundingClientRect();



    return local(b.left + b.width / 2, b.top + b.height / 2);



  }



  function getItemCenter(i) {

    const el = items[i];


    if (!el || !nav) return 0;

    const rItem = el.getBoundingClientRect();

    const rNav = nav.getBoundingClientRect();

    return PAD + (rItem.left - rNav.left) + rItem.width / 2;

  }



  function getClosestItemIndex(localX) {

    let closestIdx = 0;

    let minDistance = Infinity;

    for (let i = 0; i < items.length; i++) {

      const cx = getItemCenter(i);

      const d = Math.abs(localX - cx);

      if (d < minDistance) {

        minDistance = d;

        closestIdx = i;

      }

    }

    return closestIdx;

  }







  function draw() {



    const T = st.t;



    const sep = Math.abs(st.a.x - st.b.x);



    const thin = Math.min(sep / (2 * (st.q + T.r) || 1), 1);



    const r = T.r * (1 - 0.3 * thin);



    if (st.glc) {



      const { gl: g, u } = st.glc;



      const dpr = Math.min(window.devicePixelRatio || 1, 2);



      g.viewport(0, 0, g.drawingBufferWidth, g.drawingBufferHeight);



      g.uniform2f(u.uRes, st.w + PAD * 2, st.h + PAD * 2);



      g.uniform1f(u.uDpr, dpr);



      g.uniform1f(u.uTime, st.time);



      g.uniform4f(u.uPill, PAD, PAD, st.w, st.h);



      const blobs = new Float32Array(24);



      const sy = new Float32Array(6).fill(1);



      const head = st.lead === 0 ? st.a : st.b;



      const tail = st.lead === 0 ? st.b : st.a;



      blobs.set([head.x, T.cy, st.q * (1 - 0.25 * thin), T.r * (1 - 0.12 * thin), tail.x, T.cy, st.q * (1 - 0.8 * thin), T.r * (1 - 0.5 * thin)], 0);



      sy[0] = sy[1] = st.sy.s;



      st.sats.slice(0, 4).forEach((d, i) => blobs.set([d.x, d.y, 0, d.r], 8 + i * 4));



      g.uniform4fv(u.uBlob, blobs);



      g.uniform1fv(u.uSy, sy);



      const rips = new Float32Array(24);



      st.rips.slice(-6).forEach((p, i) => rips.set([p.x, p.y, p.age, p.amp], i * 4));



      g.uniform4fv(u.uRip, rips);



      g.uniform3f(u.uMouse, st.mouse.x, st.mouse.y, st.mouse.s);



      g.uniform1f(u.uDark, 0);



      g.uniform1f(u.uAmb, st.reduce ? 0 : 1);



      g.clearColor(0, 0, 0, 0);



      g.clear(g.COLOR_BUFFER_BIT);



      g.drawArrays(g.TRIANGLES, 0, 3);



    } else if (drop) {



      const left = Math.min(st.a.x, st.b.x) - st.q - r - PAD;



      const width = sep + 2 * (st.q + r);



      drop.style.width = width + 'px';



      drop.style.transform = `translateX(${left}px) scaleY(${st.sy.s})`;



    }



  }







  // --- ENHANCED VISCOELASTIC FLUID DYNAMICS (Sub-stepped Newtonian Fluid Simulation) ---

  function stepSub(dt, now) {

    const T = st.t;

    st.time += dt;

    st.q += (T.q - st.q) * Math.min(1, dt * 14);



    if (st.reduce) {

      st.a.x = st.b.x = T.x;

      st.a.v = st.b.v = 0;

      st.sy.s = 1;

      st.sats = [];


      return true;

    }



    const bodies = [st.a, st.b];


    const head = bodies[st.lead];


    const tail = bodies[1 - st.lead];




    // Responsive head body tracking target with fluid inertia

    const kHead = isDragging ? 230 : 185;

    const cHead = isDragging ? 25 : 21;

    head.v += (kHead * (T.x - head.x) - cHead * head.v) * dt;

    head.x += head.v * dt;



    // Tail body: continuous viscoelastic fluid cohesion & surface tension

    // F_fluid pulls tail towards head proportionally to distance & relative velocity

    const kCohesion = 140;

    const cCohesion = 18;

    const kTailTarget = 60;

    const tailForce = kCohesion * (head.x - tail.x) + cCohesion * (head.v - tail.v) + kTailTarget * (T.x - tail.x);

    tail.v += (tailForce - 21 * tail.v) * dt;

    tail.x += tail.v * dt;



    // Soft boundary damping against capsule ends

    const lo = PAD + 6 + st.q + T.r - 3;

    const hi = PAD + st.w - 6 - st.q - T.r + 3;

    bodies.forEach(B => {

      if (B.x < lo) {

        B.x = lo;

        st.sy.v -= Math.min(Math.abs(B.v), 800) * 0.002;

        B.v *= -0.2;

      } else if (B.x > hi) {

        B.x = hi;

        st.sy.v -= Math.min(Math.abs(B.v), 800) * 0.002;

        B.v *= -0.2;

      }

    });



    // Incompressible fluid volume conservation:

    // As horizontal elongation increases, height compresses vertically (meniscus necking)

    const sep = Math.abs(st.a.x - st.b.x);

    const r = T.r * (1 - 0.3 * Math.min(sep / (2 * (T.q + T.r) || 1), 1));

    const stretchRatio = 1 + sep / Math.max(30, (T.q + T.r) * 1.8);

    const syTarget = Math.max(0.72, Math.min(1.24, 1 / Math.sqrt(stretchRatio)));



    // Damped harmonic jelly wobble / liquid slosh

    const kSy = 320;

    const cSy = 14;

    st.sy.v += (kSy * (syTarget - st.sy.s) - cSy * st.sy.v) * dt;

    st.sy.s += st.sy.v * dt;



    // Fluid pinch-off: satellite droplet nucleation on long jumps

    if (!st.split && st.moving && sep - 2 * T.q - 2 * r > -4) {

      st.split = true;

      const loB = bodies[1 - st.lead];


      const hiB = bodies[st.lead];


      [0.32, 0.52, 0.72].forEach((t, j) => {

        st.sats.push({

          x: loB.x + (hiB.x - loB.x) * t + (Math.random() - 0.5) * 5,

          y: T.cy + (Math.random() - 0.5) * 8,

          vx: (loB.v + hiB.v) * 0.45,

          vy: (Math.random() - 0.5) * 50,

          r: 5.5 + Math.random() * 2.5 - j * 0.5,

          k: 75 + Math.random() * 85,

        });

      });

    }



    // Satellite droplets coalescing & surface tension

    st.sats = st.sats.filter(d => {

      d.vx += (d.k * (T.x - d.x) - 10 * d.vx) * dt;

      d.vy += (95 * (T.cy - d.y) - 8 * d.vy) * dt;

      d.x += d.vx * dt;

      d.y += d.vy * dt;

      d.x = Math.max(PAD + 8 + d.r, Math.min(PAD + st.w - 8 - d.r, d.x));

      d.y = Math.max(T.cy - T.r + d.r, Math.min(T.cy + T.r - d.r, d.y));

      if (Math.abs(T.x - d.x) < T.q + T.r * 0.5) d.r -= dt * 28;

      return d.r > 0.6;

    });



    let still = true;

    if (Math.abs(T.x - head.x) > 0.3 || Math.abs(T.x - tail.x) > 0.3 || Math.abs(head.v) > 2 || Math.abs(tail.v) > 2) {

      still = false;

    }

    if (Math.abs(st.sy.s - 1) > 0.003 || Math.abs(st.sy.v) > 0.03) still = false;

    if (st.sats.length) still = false;



    return still;

  }



  function step(dt, now) {

    // Two sub-steps for 120Hz high-precision fluid stability

    const subDt = dt / 2;

    let s1 = stepSub(subDt, now);

    let s2 = stepSub(subDt, now);

    let still = s1 && s2;



    if (st.moving && still && !isDragging) {

      st.moving = false;

      if (st.split || !st.reduce) {

        st.rips.push({ x: st.t.x, y: st.t.cy, age: 0, amp: st.split ? 1.2 : 0.7 });

      }

    }



    st.rips.forEach(p => (p.age += dt));

    st.rips = st.rips.filter(p => p.age < 2.4);



    const targetMouse = st.mouse.on ? 1 : 0;

    st.mouse.s += (targetMouse - st.mouse.s) * Math.min(1, dt * 8);

  }



  function loop() {

    if (st.raf) return;

    st.last = performance.now();

    const tick = (now) => {

      const dt = Math.min((now - st.last) / 1000, 1 / 30);

      st.last = now;

      step(dt, now);

      draw();

      const busy = isDragging || st.moving || st.rips.length || st.sats.length || st.mouse.s > 0.01;

      if (st.visible && busy) {
        st.raf = requestAnimationFrame(tick);
      } else {
        st.raf = 0;
      }

    };

    st.raf = requestAnimationFrame(tick);

  }



  function measure() {



    const el = items[current];




    if (!nav || !el) return;



    st.w = nav.offsetWidth;



    st.h = nav.offsetHeight;



    const T = st.t;



    T.r = el.offsetHeight / 2;



    T.q = Math.max(0, el.offsetWidth / 2 - T.r);



    T.cy = PAD + el.offsetTop + el.offsetHeight / 2;



    const nx = PAD + el.offsetLeft + el.offsetWidth / 2;



    if (!st.ready) {



      st.a.x = st.b.x = nx;



      st.q = T.q;



      st.ready = true;



    } else if (Math.abs(nx - T.x) > 0.5) {



      st.lead = Math.abs(nx - st.a.x) <= Math.abs(nx - st.b.x) ? 0 : 1;



      st.lagFrom = performance.now() + 70;



      st.moving = true;



      st.split = false;



    }



    T.x = nx;



    if (canvas) {



      const dpr = Math.min(window.devicePixelRatio || 1, 2);



      const W = st.w + PAD * 2;



      const Hh = st.h + PAD * 2;



      if (canvas.width !== Math.round(W * dpr) || canvas.height !== Math.round(Hh * dpr)) {



        canvas.width = Math.round(W * dpr);



        canvas.height = Math.round(Hh * dpr);



        canvas.style.width = W + 'px';



        canvas.style.height = Hh + 'px';



      }



    }



    loop();



  }







  function select(i, playFx = true) {



    if (i < 0 || i >= items.length) return;



    const isNew = (current !== i);



    current = i;







    items.forEach((btn, idx) => {
      const ico = btn.querySelector('.nv-ico');
      const svg = ico ? (ico.querySelector('svg') || ico) : null;
      if (idx === i) {
        btn.classList.add('active');
        btn.setAttribute('aria-current', 'page');
        if (svg) {
          svg.classList.remove('nimbus-yupi-anim');
          void svg.offsetWidth;
          svg.classList.add('nimbus-yupi-anim');
        }
      } else {
        btn.classList.remove('active');
        btn.removeAttribute('aria-current');
        if (svg) {
          svg.classList.remove('nimbus-yupi-anim');
        }
      }
    });







    if (playFx) {



      const item = items[i];




      const ico = item ? item.querySelector('.nv-ico') : null;



      const kind = ico ? (ico.getAttribute('data-fx') || 'pop') : 'pop';







      if (ico) {



        ico.style.animation = 'none';



        void ico.offsetWidth;



        ico.style.animation = '';



      }



      plip();



      const c = iconCenter(i);



      if (c && kind === 'drop') setTimeout(() => ripple(c.x, st.t.cy, 1.4), 430);



      if (c && kind === 'plane') ripple(c.x, c.y, 0.6);



      if (c && kind !== 'drop' && kind !== 'plane') ripple(c.x, c.y, 1.0);



    }







    measure();



  }







  // --- DRAG-AND-RELEASE INTERACTION SYSTEM ("bisa digeser & lepas baru pindah") ---

  let isDragging = false;

  let hasMoved = false;

  let dragStartX = 0;

  let dragStartY = 0;

  let dragLastX = 0;

  let dragLastTime = 0;

  let dragVelEMA = 0;

  let pointerDownElement = null;

  let candidateIndex = 0;

  let activePointerId = null;

  let suppressClickUntil = 0;

  let lastWakeRippleTime = 0;



  nav.addEventListener('pointerdown', (e) => {



    if (e.button !== undefined && e.button !== 0) return;



    e.stopPropagation();







    isDragging = true;



    hasMoved = false;



    dragStartX = e.clientX;



    dragStartY = e.clientY;



    dragLastX = e.clientX;



    pointerDownElement = e.target.closest('.nimbus-item');



    candidateIndex = current;



    activePointerId = e.pointerId;







    try {



      nav.setPointerCapture(e.pointerId);



    } catch (err) {}







    const p = local(e.clientX, e.clientY);



    st.mouse.x = p.x;



    st.mouse.y = p.y;



    st.mouse.on = true;



    ripple(p.x, p.y, 0.7);



    loop();



  });



  const handleNavPointerMove = (e) => {

    const p = local(e.clientX, e.clientY);

    st.mouse.x = p.x;

    st.mouse.y = p.y;

    st.mouse.on = true;



    if (!isDragging) {

      loop();

      return;

    }



    const now = performance.now();

    const dx = e.clientX - dragStartX;

    const dy = e.clientY - dragStartY;



    if (!hasMoved && (Math.abs(dx) > 3 || Math.abs(dy) > 3)) {

      hasMoved = true;

      suppressClickUntil = now + 500;

      dragLastTime = now;

      dragLastX = e.clientX;

      dragVelEMA = 0;

      nav.classList.add('is-dragging');

      document.body.classList.add('nimbus-is-dragging');

    }



    if (hasMoved) {

      const firstCenter = getItemCenter(0);

      const lastCenter = getItemCenter(items.length - 1);

      const clampedX = Math.max(firstCenter - 10, Math.min(lastCenter + 10, p.x));



      // Measure continuous drag velocity with Exponential Moving Average (EMA)

      const dtMove = Math.max((now - dragLastTime) / 1000, 0.008);

      const instantVel = (e.clientX - dragLastX) / dtMove;

      dragLastX = e.clientX;

      dragLastTime = now;

      dragVelEMA += (instantVel - dragVelEMA) * 0.35;



      // Smooth fluid head direction without binary jitter

      if (Math.abs(dragVelEMA) > 15) {

        if (dragVelEMA > 0) {

          st.lead = (st.a.x >= st.b.x) ? 0 : 1;

        } else {

          st.lead = (st.a.x <= st.b.x) ? 0 : 1;

        }

      }



      // Smooth continuous physical target position

      st.t.x = clampedX;

      st.moving = true;

      st.split = false;



      // Find closest item candidate while dragging

      const closest = getClosestItemIndex(clampedX);

      candidateIndex = closest;



      // Volumetric morphing of drop width to match candidate item

      const targetItem = items[candidateIndex];


      if (targetItem) {

        const tr = targetItem.offsetHeight / 2;

        const tq = Math.max(0, targetItem.offsetWidth / 2 - tr);

        st.t.q = tq;

        st.t.r = tr;

      }



      // Visual preview feedback on items

      items.forEach((btn, idx) => {

        btn.classList.toggle('nimbus-drag-hover', idx === candidateIndex);

      });



      // Hydrodynamic wake ripples scaling with drag velocity

      if (now - lastWakeRippleTime > 110 && Math.abs(dragVelEMA) > 40) {

        ripple(clampedX, st.t.cy, Math.min(0.7, 0.2 + Math.abs(dragVelEMA) * 0.0006));

        lastWakeRippleTime = now;

      }



      loop();

    }

  };



  nav.addEventListener('pointermove', handleNavPointerMove);

  window.addEventListener('pointermove', (e) => {

    if (isDragging) handleNavPointerMove(e);

  });



  function endDrag(e) {

    if (!isDragging) return;

    isDragging = false;

    nav.classList.remove('is-dragging');

    document.body.classList.remove('nimbus-is-dragging');



    if (activePointerId !== null) {

      try {

        nav.releasePointerCapture(activePointerId);

      } catch (err) {}

      activePointerId = null;

    }



    items.forEach(btn => btn.classList.remove('nimbus-drag-hover'));



    let finalIdx = current;



    if (hasMoved) {

      // Destination is the closest item where user released

      const p = local(e.clientX, e.clientY);

      finalIdx = getClosestItemIndex(p.x);

      suppressClickUntil = performance.now() + 300;

    } else {

      // Instant tap / click without drag

      if (pointerDownElement) {

        const idx = items.indexOf(pointerDownElement);

        if (idx !== -1) finalIdx = idx;

      } else {

        const p = local(e.clientX, e.clientY);

        finalIdx = getClosestItemIndex(p.x);

      }

      suppressClickUntil = performance.now() + 300;

    }



    // Snap water droplet to the target item with physics bounce

    select(finalIdx, true);



    // ONLY NOW switch the page on release! ("kalo di lepas baru masuk ke halaman tersebut")

    const pageName = desktopPageList[finalIdx] || 'home';

    if (window.handleLiquidNavClick) {

      window.handleLiquidNavClick(finalIdx, pageName);

    }

  }



  nav.addEventListener('pointerup', endDrag);

  window.addEventListener('pointerup', endDrag);

  nav.addEventListener('pointercancel', endDrag);

  window.addEventListener('pointercancel', endDrag);



  nav.addEventListener('pointerleave', () => {



    st.mouse.on = false;



    loop();



  });







  // Handle accessible keyboard clicks or button clicks



  items.forEach((item, idx) => {



    item.addEventListener('click', (e) => {



      e.preventDefault();



      e.stopPropagation();



      if (performance.now() < suppressClickUntil) {



        return;



      }



      const pageName = desktopPageList[idx] || 'home';



      if (window.handleLiquidNavClick) {



        window.handleLiquidNavClick(idx, pageName);



      }



    });



  });







  let lastW = -1;



  const ro = new ResizeObserver(() => {



    const w = nav.offsetWidth || 0;



    if (w !== lastW) {



      lastW = w;



      st.ready = false;



      measure();



    }



  });



  ro.observe(nav);







  window.addEventListener('resize', measure);



  setTimeout(measure, 100);







  window.selectLiquidNavItem = select;



  window.previewLiquidNavSlide = function(baseIndex, fraction) {

    if (isDragging) return;

    const targetIdx = Math.max(0, Math.min(items.length - 1, baseIndex - fraction));

    const floorIdx = Math.floor(targetIdx);

    const ceilIdx = Math.min(items.length - 1, floorIdx + 1);

    const t = targetIdx - floorIdx;



    const c1 = getItemCenter(floorIdx);

    const c2 = getItemCenter(ceilIdx);

    const targetX = c1 + (c2 - c1) * t;



    st.lead = fraction < 0 ? 0 : 1;

    st.t.x = targetX;

    st.moving = true;

    st.split = false;



    const el1 = items[floorIdx];


    const el2 = items[ceilIdx];


    if (el1 && el2) {

      const q1 = Math.max(0, el1.offsetWidth / 2 - el1.offsetHeight / 2);

      const q2 = Math.max(0, el2.offsetWidth / 2 - el2.offsetHeight / 2);

      st.t.q = q1 + (q2 - q1) * t;

      st.t.r = el1.offsetHeight / 2;

    }



    loop();

  };





  window.resetLiquidNavToHome = () => select(0);



}







// Auto-initialize when ready



if (document.readyState === 'loading') {



  document.addEventListener('DOMContentLoaded', initDesktopLiquidNavbar);



} else {



  initDesktopLiquidNavbar();



}







/* ==========================================================================

   AI PROMPT COMPOSER WITH MODEL SELECTOR (LIGHT / WHITE THEME) - APP LOGIC

   ========================================================================== */



const COMPOSER_MODELS = [
  { id: 'gemini-37-flash', name: 'Gemini 3.7 Flash', shortName: 'Gemini 3.7 Flash', effort: 'High', provider: 'gemini', tag: '', isFav: false, efforts: ['Low', 'Medium', 'High', 'Max'] },
  { id: 'qwen3-8-omni-flash', name: 'qwen3-8-omni-flash:free', shortName: 'qwen3-8-omni-flash', effort: 'Medium', provider: 'qwen', tag: '', isFav: false, efforts: ['Low', 'Medium', 'High'] },
  { id: 'laguna-xs-2-1', name: 'laguna-xs-2-1:free', shortName: 'laguna-xs-2-1', effort: 'Low', provider: 'laguna', tag: '', isFav: false, efforts: ['Low', 'Medium'] },
  { id: 'glm-4-7-flash', name: 'glm-4-7-flash:free', shortName: 'glm-4-7-flash', effort: 'Medium', provider: 'glm', tag: '', isFav: false, efforts: ['Low', 'Medium', 'High'] }
];


window.COMPOSER_MODELS = COMPOSER_MODELS;
let activeComposerModelId = 'gemini-37-flash';
window.activeComposerModelId = activeComposerModelId;

let activeComposerMode = 'Build';

let activeComposerAuto = false;

let activeComposerFilterTab = 'all';

let hoveredComposerModelId = null;

let composerAttachedFilesList = [];


let composerVoiceRecordingActive = false;

let composerVoiceSecCount = 0;

let composerVoiceTimerId = null;

function getComposerProviderSvg(provider, size = 16) {
  if (provider === 'qwen') {
    // Official Alibaba Tongyi Qianwen (Qwen) vector logo
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
      <path d="M19.713 2.825h-5.907c0-.251-.066-.503-.196-.728L12.819.728A1.46 1.46 0 0 0 11.559 0h-1.58c-.52 0-1 .275-1.26.728l-2.42 4.19a1.45 1.45 0 0 0 0 1.453l.791 1.37c.26.448.74.727 1.26.727h11.36c.52 0 1-.275 1.26-.728l.79-1.37a1.45 1.45 0 0 0 0-1.451l-.79-1.37a1.46 1.46 0 0 0-1.26-.728zM.195 9.905l2.951 5.115a1.46 1.46 0 0 0-.531.531l-.791 1.37a1.45 1.45 0 0 0 0 1.452l.79 1.37c.26.448.74.727 1.26.727h4.84c.52 0 1-.275 1.26-.728l.79-1.37a1.45 1.45 0 0 0 0-1.451L5.086 7.083a1.46 1.46 0 0 0-1.26-.728h-1.58c-.52 0-1 .276-1.26.728l-.79 1.37a1.45 1.45 0 0 0 0 1.452m15.888 13.367 2.951-5.115c.217.125.469.196.728.196h1.582c.52 0 1-.275 1.26-.728l.79-1.37a1.45 1.45 0 0 0 0-1.451l-2.42-4.191a1.46 1.46 0 0 0-1.259-.728h-1.582c-.52 0-1 .276-1.259.728l-5.678 9.838a1.45 1.45 0 0 0 0 1.452l.79 1.37c.26.448.74.727 1.26.727h1.582c.52 0 1-.275 1.26-.728z" fill="#615CED"/>
    </svg>`;
  }
  if (provider === 'laguna') {
    // Official Poolside AI (Laguna XS) vector logo
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
      <path d="M6.742 22.786a11.93 11.93 0 01-5.232-4.963 11.98 11.98 0 01-1.463-6.886.975.975 0 011.943.173c-.178 2.005.246 4 1.226 5.769a9.968 9.968 0 003.526 3.685l4.586-9.405c-1.795-.598-3.29-.338-3.425-.312l-.058.012a.972.972 0 01-1.054-.576c-.24-.448-.96-1.544-1.834-1.97-.873-.426-2.218-.289-2.651-.195a.977.977 0 01-1.087-1.38C4.117.792 11.315-1.686 17.262 1.215c5.946 2.9 8.422 10.093 5.529 16.038l-.01.02c-2.903 5.94-10.095 8.414-16.039 5.514zm6.338-10.773l-4.586 9.405c4.629 1.73 9.896-.192 12.304-4.558-.338-.524-.932-1.275-1.62-1.61-.888-.434-2.19-.292-2.637-.198a.989.989 0 01-.616-.055.984.984 0 01-.49-.473c-.028-.058-.739-1.438-2.355-2.51zM5.81 6.56c.747.365 1.356.944 1.81 1.49 1.406-2.15 3.314-3.774 4.787-4.82a20.81 20.81 0 011.66-1.067A10.078 10.078 0 003.882 6.077c.617.042 1.297.174 1.929.482zm12.671-2.243c.09.624.152 1.294.182 1.965.083 1.801-.021 4.296-.844 6.722.686.018 1.484.14 2.214.495.652.318 1.198.8 1.628 1.28a10.082 10.082 0 00-3.18-10.462zm-5.394 5.46a9.522 9.522 0 012.984 2.287c1.075-3.493.606-7.402.215-8.85-1.381.584-4.75 2.62-6.84 5.618a9.515 9.515 0 013.64.944z" fill="#0284C7"/>
    </svg>`;
  }
  if (provider === 'glm') {
    // Official Zhipu AI (ChatGLM) vector logo
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
      <path d="M11.991 23.503a.24.24 0 00-.244.248.24.24 0 00.244.249.24.24 0 00.245-.249.24.24 0 00-.22-.247l-.025-.001zM9.671 5.365a1.697 1.697 0 011.099 2.132l-.071.172-.016.04-.018.054c-.07.16-.104.32-.104.498-.035.71.47 1.279 1.186 1.314h.366c1.309.053 2.338 1.173 2.286 2.523-.052 1.332-1.152 2.38-2.478 2.327h-.174c-.715.018-1.274.64-1.239 1.368 0 .124.018.23.053.337.209.373.54.658.96.8.75.23 1.517-.125 1.9-.782l.018-.035c.402-.64 1.17-.96 1.92-.711.854.284 1.378 1.226 1.099 2.167a1.661 1.661 0 01-2.077 1.102 1.711 1.711 0 01-.907-.711l-.017-.035c-.2-.323-.463-.58-.851-.711l-.056-.018a1.646 1.646 0 00-1.954.746 1.66 1.66 0 01-1.065.764 1.677 1.677 0 01-1.989-1.279c-.209-.906.332-1.83 1.257-2.043a1.51 1.51 0 01.296-.035h.018c.68-.071 1.151-.622 1.116-1.333a1.307 1.307 0 00-.227-.693 2.515 2.515 0 01-.366-1.403 2.39 2.39 0 01.366-1.208c.14-.195.21-.444.227-.693.018-.71-.506-1.261-1.186-1.332l-.07-.018a1.43 1.43 0 01-.299-.07l-.05-.019a1.7 1.7 0 01-1.047-2.114 1.68 1.68 0 012.094-1.101zm-5.575 10.11c.26-.264.639-.367.994-.27.355.096.633.379.728.74.095.362-.007.748-.267 1.013-.402.41-1.053.41-1.455 0a1.062 1.062 0 010-1.482zm14.845-.294c.359-.09.738.024.992.297.254.274.344.665.237 1.025-.107.36-.396.634-.756.718-.551.128-1.1-.22-1.23-.781a1.05 1.05 0 01.757-1.26zm-.064-4.39c.314.32.49.753.49 1.206 0 .452-.176.886-.49 1.206-.315.32-.74.5-1.185.5-.444 0-.87-.18-1.184-.5a1.727 1.727 0 010-2.412 1.654 1.654 0 012.369 0zm-11.243.163c.364.484.447 1.128.218 1.691a1.665 1.665 0 01-2.188.923c-.855-.36-1.26-1.358-.907-2.228a1.68 1.68 0 011.33-1.038c.593-.08 1.183.169 1.547.652zm11.545-4.221c.368 0 .708.2.892.524.184.324.184.724 0 1.048a1.026 1.026 0 01-.892.524c-.568 0-1.03-.47-1.03-1.048 0-.579.462-1.048 1.03-1.048zm-14.358 0c.368 0 .707.2.891.524.184.324.184.724 0 1.048a1.026 1.026 0 01-.891.524c-.569 0-1.03-.47-1.03-1.048 0-.579.461-1.048 1.03-1.048z" fill="#0052D9"/>
    </svg>`;
  }
  if (provider === 'agnes') {
    // Official Agnes AI vector mark
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="url(#dynAgnesGrad)"/>
      <circle cx="16.5" cy="6.5" r="1.8" fill="#FFFFFF"/>
      <path d="M6 16.5c2.5 1.5 6.2 1.2 8.5-3.5 1.8-3.7 2.5-5.5 2.5-5.5s-1.8 4.2-2.8 7.5c-.8 2.6-1.5 3.5-3 2.5 1.5-.2 2.5-1.2 3.2-3" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      <defs>
        <linearGradient id="dynAgnesGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop stop-color="#4F46E5"/>
          <stop offset="1" stop-color="#8B5CF6"/>
        </linearGradient>
      </defs>
    </svg>`;
  }
  if (provider === 'mimo') {
    // Official Xiaomi MiMo vector squircle
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
      <path d="M12 0C8.016 0 4.756.255 2.493 2.516.23 4.776 0 8.033 0 12.012c0 3.98.23 7.235 2.494 9.497C4.757 23.77 8.017 24 12 24c3.983 0 7.243-.23 9.506-2.491C23.77 19.247 24 15.99 24 12.012c0-3.984-.233-7.243-2.502-9.504C19.234.252 15.978 0 12 0z" fill="#FF6900"/>
      <path d="M4.906 7.405h5.624c1.47 0 3.007.068 3.764.827.746.746.827 2.233.83 3.676v4.54a.15.15 0 0 1-.152.147h-1.947a.15.15 0 0 1-.152-.148V11.83c-.002-.806-.048-1.634-.464-2.051-.358-.36-1.026-.441-1.72-.458H7.158a.15.15 0 0 0-.151.147v6.98a.15.15 0 0 1-.152.148H4.906a.15.15 0 0 1-.15-.148V7.554a.15.15 0 0 1 .15-.149zm12.131 0h1.949a.15.15 0 0 1 .15.15v8.892a.15.15 0 0 1-.15.148h-1.949a.15.15 0 0 1-.151-.148V7.554a.15.15 0 0 1 .151-.149zM8.92 10.948h2.046c.083 0 .15.066.15.147v5.352a.15.15 0 0 1-.15.148H8.92a.15.15 0 0 1-.152-.148v-5.352a.15.15 0 0 1 .152-.147Z" fill="#FFFFFF"/>
    </svg>`;
  }
  // Official Google Gemini 4-pointed sparkle gradient star
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
    <path d="M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z" fill="#3186FF"/>
    <path d="M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z" fill="url(#dynGeminiGrad0)"/>
    <path d="M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z" fill="url(#dynGeminiGrad1)"/>
    <path d="M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z" fill="url(#dynGeminiGrad2)"/>
    <defs>
      <linearGradient id="dynGeminiGrad0" x1="7" y1="15.5" x2="11" y2="12" gradientUnits="userSpaceOnUse">
        <stop stop-color="#08B962"/>
        <stop offset="1" stop-color="#08B962" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="dynGeminiGrad1" x1="8" y1="5.5" x2="11.5" y2="11" gradientUnits="userSpaceOnUse">
        <stop stop-color="#F94543"/>
        <stop offset="1" stop-color="#F94543" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="dynGeminiGrad2" x1="3.5" y1="13.5" x2="17.5" y2="12" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FABC12"/>
        <stop offset="0.46" stop-color="#FABC12" stop-opacity="0"/>
      </linearGradient>
    </defs>
  </svg>`;
}

function updateComposerSubmitButtonState() {

  const input = document.getElementById('desktopAiPagePromptInput');

  const btn = document.getElementById('desktopAiSendBtn');

  if (!btn) return;

  const hasText = input && input.value.trim().length > 0;

  const hasFiles = composerAttachedFilesList.length > 0;

  if (hasText || hasFiles) {

    btn.classList.add('ready');

  } else {

    btn.classList.remove('ready');

  }

}



window.handleDesktopAiComposerInput = function(textarea) {

  if (!textarea) return;

  textarea.style.height = 'auto';

  textarea.style.height = Math.min(textarea.scrollHeight, 160) + 'px';

  updateComposerSubmitButtonState();



  const popover = document.getElementById('desktopAiContextPopover');

  if (popover) {

    if (textarea.value.endsWith('@')) {

      popover.classList.remove('aic-popover-hidden');

      popover.classList.add('aic-popover-visible');

    } else {

      popover.classList.remove('aic-popover-visible');

      popover.classList.add('aic-popover-hidden');

    }

  }

};



window.insertAiContextTag = function(tag) {

  const textarea = document.getElementById('desktopAiPagePromptInput');

  if (textarea) {

    textarea.value = textarea.value.replace(/@$/, `${tag} `);

    textarea.focus();

    window.handleDesktopAiComposerInput(textarea);

  }

  const popover = document.getElementById('desktopAiContextPopover');

  if (popover) {

    popover.classList.remove('aic-popover-visible');

    popover.classList.add('aic-popover-hidden');

  }

};



window.toggleDesktopAiModeMenu = function(e) {
  if (e) e.stopPropagation();
  const popover = document.getElementById('desktopAiModePopover');
  const btn = document.getElementById('desktopAiModeBtn');
  if (!popover) return;

  const isOpen = popover.classList.contains('aic-popover-visible') && !popover.classList.contains('aic-genie-closing');
  if (isOpen) {
    window.closeComposerPopoverWithGenie(popover, btn, 'mode');
  } else {
    window.closeAllComposerPopovers('mode');
    window.openComposerPopoverWithGenie(popover, btn, 'mode');
  }
};

window.selectDesktopAiMode = function(modeName) {
  syncSelectedModeToUI(modeName);
  const popover = document.getElementById('desktopAiModePopover');
  const btn = document.getElementById('desktopAiModeBtn');
  window.closeComposerPopoverWithGenie(popover, btn, 'mode');
};



// Unified Model List Renderer for Desktop and Mobile

function renderDesktopAiModelsList(filterTab = activeComposerFilterTab, query = '') {

  const desktopContainer = document.getElementById('desktopAiModelsList');

  const mobileContainer = document.getElementById('mobileAiModelsList');



  const q = query.trim().toLowerCase();

  const visible = COMPOSER_MODELS.filter(m => {

    const matchesTab = (filterTab === 'fav') ? m.isFav : true;

    const matchesSearch = m.name.toLowerCase().includes(q) || m.effort.toLowerCase().includes(q);

    return matchesTab && matchesSearch;

  });



  const favCount = COMPOSER_MODELS.filter(m => m.isFav).length;

  const favBadge = document.getElementById('aicFavCount');

  if (favBadge) favBadge.textContent = favCount;

  const mobileFavBadge = document.getElementById('mobileAicFavCount');

  if (mobileFavBadge) mobileFavBadge.textContent = favCount;



  const emptyHTML = `<div style="padding: 10px; text-align: center; font-size: 13px; color: #64748B;">Tidak ada model yang cocok</div>`;



  if (visible.length === 0) {

    if (desktopContainer) desktopContainer.innerHTML = emptyHTML;

    if (mobileContainer) mobileContainer.innerHTML = emptyHTML;

    return;

  }



  const renderItems = (isMobile = false) => visible.map(m => {

    const isSelected = (!activeComposerAuto && m.id === activeComposerModelId);

    const clickHandler = isMobile ? `selectMobileAiModel('${m.id}')` : `selectDesktopAiModel('${m.id}')`;

    const mouseEnterHandler = isMobile ? '' : `onmouseenter="handleModelRowMouseEnter('${m.id}', this)" onmouseleave="handleModelRowMouseLeave()"`;
    const effortSubHandler = isMobile ? `onclick="toggleMobileEffortMenu(event, '${m.id}', this)"` : `onclick="toggleDesktopEffortMenu(event, '${m.id}', this)"`;

    return `

      <div class="aic-model-row ${isSelected ? 'selected' : ''}" onclick="${clickHandler}" ${mouseEnterHandler}>

        <div class="aic-model-row-info">

          <span class="aic-provider-badge">${getComposerProviderSvg(m.provider)}</span>

          <span class="aic-model-title">${m.name}</span>

          <span class="aic-model-eff-sub aic-eff-interactive" ${effortSubHandler} title="Pilih kinerja model">${m.effort} ▾</span>

        </div>

      </div>

    `;

  }).join('');



  if (desktopContainer) desktopContainer.innerHTML = renderItems(false);

  if (mobileContainer) mobileContainer.innerHTML = renderItems(true);

}



// Unified Sync for Model Selection

function syncSelectedModelToUI(modelId) {
  activeComposerModelId = modelId;
  window.activeComposerModelId = modelId;

  const m = COMPOSER_MODELS.find(item => item.id === modelId);

  if (!m) return;



  const desktopEl = document.getElementById('desktopAiModelNameText');
  if (desktopEl) {
    desktopEl.textContent = m.name;
    desktopEl.title = m.name;
  }
  const mobileEl = document.getElementById('mobileAiModelNameText');
  if (mobileEl) {
    mobileEl.textContent = 'Model';
    mobileEl.title = m.name;
  }

  ['desktopAiModelEffortText', 'mobileAiModelEffortText'].forEach(id => {

    const el = document.getElementById(id);

    if (el) el.textContent = m.effort;

  });

  const headerPill = document.getElementById('desktopAiHeaderVersionPill');
  if (headerPill) headerPill.textContent = m.name;

  ['desktopAiProviderBadge', 'mobileAiProviderBadge'].forEach(id => {

    const el = document.getElementById(id);

    if (el) el.innerHTML = getComposerProviderSvg(m.provider);

  });

  ['desktopAiAutoSwitch', 'mobileAiAutoSwitch'].forEach(id => {

    const el = document.getElementById(id);

    if (el) el.classList.remove('on');

  });

  ['desktopAiAutoTriggerBtn', 'mobileAiAutoTriggerBtn'].forEach(id => {

    const el = document.getElementById(id);

    if (el) el.style.display = 'none';

  });

  ['desktopAiModelTriggerBtn', 'mobileAiModelTriggerBtn'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.style.display = 'inline-flex';
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.classList.remove('aic-trigger-hidden-by-popover', 'menu-open');
    }
  });

}



// Unified Sync for Mode Selection

function syncSelectedModeToUI(modeName) {

  activeComposerMode = modeName;

  ['desktopAiCurrentModeText', 'mobileAiCurrentModeText'].forEach(id => {

    const el = document.getElementById(id);

    if (el) el.textContent = modeName;

  });



  ['Plan', 'Ask', 'Build'].forEach(m => {

    const deskCheck = document.getElementById(`aicCheck-${m}`);

    if (deskCheck) deskCheck.style.display = (m === modeName) ? 'inline-block' : 'none';

    const mobCheck = document.getElementById(`mobileAicCheck-${m}`);

    if (mobCheck) mobCheck.style.display = (m === modeName) ? 'inline-block' : 'none';

  });

}



// Mobile-specific Composer Event Handlers

window.handleMobileAiComposerInput = function(textarea) {

  if (!textarea) return;

  textarea.style.height = 'auto';

  textarea.style.height = Math.min(textarea.scrollHeight, 100) + 'px';

  const sendBtn = document.getElementById('btnSendAiPrompt');

  if (sendBtn) {

    if (textarea.value.trim().length > 0 || (typeof pendingAiImage !== 'undefined' && pendingAiImage)) {

      sendBtn.classList.add('ready');

    } else {

      sendBtn.classList.remove('ready');

    }

  }

};



window.toggleMobileAiModeMenu = function(e) {
  if (e) e.stopPropagation();
  const popover = document.getElementById('mobileAiModePopover');
  const btn = document.getElementById('mobileAiModeBtn');
  if (!popover) return;

  const isOpen = popover.classList.contains('aic-popover-visible') && !popover.classList.contains('aic-genie-closing');
  if (isOpen) {
    window.closeComposerPopoverWithGenie(popover, btn, 'mobileMode');
  } else {
    window.closeAllComposerPopovers('mobileMode');
    window.openComposerPopoverWithGenie(popover, btn, 'mobileMode');
  }
};

window.selectMobileAiMode = function(modeName) {
  syncSelectedModeToUI(modeName);
  const popover = document.getElementById('mobileAiModePopover');
  const btn = document.getElementById('mobileAiModeBtn');
  window.closeComposerPopoverWithGenie(popover, btn, 'mobileMode');
};



window.toggleMobileAiModelMenu = function(e) {
  if (e) e.stopPropagation();
  const popover = document.getElementById('mobileAiModelPopover');
  const autoTrigger = document.getElementById('mobileAiAutoTriggerBtn');
  const modelTrigger = document.getElementById('mobileAiModelTriggerBtn');
  const btn = (activeComposerAuto && autoTrigger && autoTrigger.style.display !== 'none') ? autoTrigger : modelTrigger;
  if (!popover) return;

  const isOpen = popover.classList.contains('aic-popover-visible') && !popover.classList.contains('aic-genie-closing');
  if (isOpen) {
    window.closeComposerPopoverWithGenie(popover, btn, 'mobileModel');
    setMobileControlsHidden(false);
    if (popover) popover.classList.remove('aic-mobile-split-active');
    const effortPopover = document.getElementById('mobileAiEffortPopover');
    if (effortPopover) window.closeComposerPopoverWithGenie(effortPopover, null, '', true);
  } else {
    window.closeAllComposerPopovers('mobileModel');
    renderDesktopAiModelsList();
    setMobileControlsHidden(true);
    window.openComposerPopoverWithGenie(popover, btn, 'mobileModel');
  }
};

window.selectMobileAiModel = function(modelId) {
  const m = typeof COMPOSER_MODELS !== 'undefined' ? COMPOSER_MODELS.find(x => x.id === modelId || x.name === modelId) : null;
  activeComposerModelId = m ? m.id : modelId;
  activeComposerAuto = false;
  syncSelectedModelToUI(activeComposerModelId);
  const popover = document.getElementById('mobileAiModelPopover');
  const btn = document.getElementById('mobileAiModelTriggerBtn');
  window.closeComposerPopoverWithGenie(popover, btn, 'mobileModel');
  setMobileControlsHidden(false);
};



window.toggleMobileAiAutoMode = function(e) {
  if (e) e.stopPropagation();
  activeComposerAuto = !activeComposerAuto;

  const autoSwitch = document.getElementById('mobileAiAutoSwitch');
  const autoTrigger = document.getElementById('mobileAiAutoTriggerBtn');
  const modelTrigger = document.getElementById('mobileAiModelTriggerBtn');
  const inlineSwitch = document.getElementById('mobileAiInlineAutoSwitch');

  if (activeComposerAuto) {
    if (autoSwitch) autoSwitch.classList.add('on');
    if (inlineSwitch) inlineSwitch.classList.add('on');
    if (autoTrigger) {
      autoTrigger.style.display = 'inline-flex';
      autoTrigger.style.opacity = '1';
    }
    if (modelTrigger) modelTrigger.style.display = 'none';

    setTimeout(() => {
      const popover = document.getElementById('mobileAiModelPopover');
      if (popover && popover.classList.contains('aic-popover-visible')) {
        window.closeComposerPopoverWithGenie(popover, autoTrigger, 'mobileModel');
        setMobileControlsHidden(false);
      }
    }, 220);
  } else {
    if (autoSwitch) autoSwitch.classList.remove('on');
    if (inlineSwitch) inlineSwitch.classList.remove('on');
    if (autoTrigger) autoTrigger.style.display = 'none';
    if (modelTrigger) modelTrigger.style.display = 'inline-flex';
  }
};

window.disableMobileAiAutoMode = function(e) {
  if (e) e.stopPropagation();
  activeComposerAuto = false;

  const autoSwitch = document.getElementById('mobileAiAutoSwitch');
  const autoTrigger = document.getElementById('mobileAiAutoTriggerBtn');
  const modelTrigger = document.getElementById('mobileAiModelTriggerBtn');
  const inlineSwitch = document.getElementById('mobileAiInlineAutoSwitch');

  if (inlineSwitch) inlineSwitch.classList.remove('on');
  if (autoSwitch) autoSwitch.classList.remove('on');

  setTimeout(() => {
    if (autoTrigger) autoTrigger.style.display = 'none';
    if (modelTrigger) {
      modelTrigger.style.display = 'inline-flex';
      modelTrigger.style.opacity = '1';
      modelTrigger.style.transform = 'none';
    }
    syncSelectedModelToUI(activeComposerModelId);
  }, 120);
};

window.handleMobileAiAutoPillClick = function(e) {
  if (e.target.closest('.aic-ios-switch')) return;
  window.toggleMobileAiModelMenu(e);
};



window.filterMobileAiModels = function(query) {

  renderDesktopAiModelsList(activeComposerFilterTab, query);

};



window.switchMobileModelFilterTab = function(tabName) {

  activeComposerFilterTab = tabName;

  const tabFav = document.getElementById('mobileAicFilterTabFav');

  const tabAll = document.getElementById('mobileAicFilterTabAll');

  if (tabName === 'fav') {

    tabFav?.classList.add('active');

    tabAll?.classList.remove('active');

  } else {

    tabAll?.classList.add('active');

    tabFav?.classList.remove('active');

  }

  const searchInput = document.getElementById('mobileAiModelSearchInput');

  renderDesktopAiModelsList(tabName, searchInput ? searchInput.value : '');

};



let mobileVoiceRecordingActive = false;

let mobileVoiceTimerId = null;

let mobileVoiceSecCount = 0;



// (Delegated to unified SpeechRecognition engine below)



window.handleModelRowMouseEnter = function(modelId, rowEl) {

  if (effortHideTimer) {
    clearTimeout(effortHideTimer);
    effortHideTimer = null;
  }

  hoveredComposerModelId = modelId;

  const model = COMPOSER_MODELS.find(m => m.id === modelId);

  const effortPopover = document.getElementById('desktopAiEffortPopover');

  if (!effortPopover || !model) return;

  const supported = model.efforts || ['Low', 'Medium', 'High', 'Max'];

  ['Low', 'Medium', 'High', 'Max'].forEach(level => {
    const itemEl = document.querySelector(`#desktopAiEffortPopover .aic-mode-menu-item[onclick*="${level}"]`);
    const checkEl = document.getElementById(`effortCheck-${level}`);
    if (itemEl) itemEl.style.display = supported.includes(level) ? 'flex' : 'none';
    if (checkEl) {
      checkEl.style.display = (model.effort === level) ? 'inline-block' : 'none';
    }
  });

  const rowRect = rowEl.getBoundingClientRect();
  const menuEl = rowEl.closest('.aic-model-popover') || document.getElementById('desktopAiModelPopover');
  if (menuEl) {
    const menuRect = menuEl.getBoundingClientRect();
    const bottomOffset = Math.max(0, menuRect.bottom - rowRect.bottom);
    effortPopover.style.bottom = `${bottomOffset}px`;
  }
  effortPopover.style.left = '422px';

  effortPopover.classList.remove('aic-popover-hidden');
  effortPopover.classList.add('aic-popover-visible');
};

let effortHideTimer = null;

window.clearEffortHideTimer = function() {
  if (effortHideTimer) {
    clearTimeout(effortHideTimer);
    effortHideTimer = null;
  }
};

window.handleModelRowMouseLeave = function() {
  if (effortHideTimer) clearTimeout(effortHideTimer);
  effortHideTimer = setTimeout(() => {
    const effortPopover = document.getElementById('desktopAiEffortPopover');
    if (!effortPopover) return;
    const isHoveringEffort = effortPopover.matches(':hover') || effortPopover.contains(document.activeElement);
    const isHoveringRow = !!document.querySelector('#desktopAiModelPopover .aic-model-row:hover');
    if (!isHoveringEffort && !isHoveringRow) {
      effortPopover.classList.remove('aic-popover-visible');
      effortPopover.classList.add('aic-popover-hidden');
      hoveredComposerModelId = null;
    }
  }, 350);
};

window.toggleDesktopEffortMenu = function(e, modelId, badgeEl) {
  if (e) {
    e.stopPropagation();
    e.preventDefault();
  }
  const effortPopover = document.getElementById('desktopAiEffortPopover');
  if (!effortPopover) return;

  const isOpen = effortPopover.classList.contains('aic-popover-visible');
  if (isOpen && hoveredComposerModelId === modelId) {
    effortPopover.classList.remove('aic-popover-visible');
    effortPopover.classList.add('aic-popover-hidden');
    hoveredComposerModelId = null;
    return;
  }

  const rowEl = badgeEl ? badgeEl.closest('.aic-model-row') : null;
  if (rowEl) {
    handleModelRowMouseEnter(modelId, rowEl);
  }
};



window.toggleModelFavorite = function(e, modelId) {

  if (e) e.stopPropagation();

  const m = COMPOSER_MODELS.find(item => item.id === modelId);

  if (m) {

    m.isFav = !m.isFav;

    renderDesktopAiModelsList();

  }

};



window.switchModelFilterTab = function(tabName) {

  activeComposerFilterTab = tabName;

  const tabFav = document.getElementById('aicFilterTabFav');

  const tabAll = document.getElementById('aicFilterTabAll');

  if (tabName === 'fav') {

    tabFav?.classList.add('active');

    tabAll?.classList.remove('active');

  } else {

    tabAll?.classList.add('active');

    tabFav?.classList.remove('active');

  }

  const searchInput = document.getElementById('desktopAiModelSearchInput');

  renderDesktopAiModelsList(tabName, searchInput ? searchInput.value : '');

};



window.filterDesktopAiModels = function(query) {

  renderDesktopAiModelsList(activeComposerFilterTab, query);

};



window.toggleDesktopAiModelMenu = function(e) {
  if (e) e.stopPropagation();
  const popover = document.getElementById('desktopAiModelPopover');
  const autoTrigger = document.getElementById('desktopAiAutoTriggerBtn');
  const modelTrigger = document.getElementById('desktopAiModelTriggerBtn');
  const btn = (activeComposerAuto && autoTrigger && autoTrigger.style.display !== 'none') ? autoTrigger : modelTrigger;
  if (!popover) return;

  const isOpen = popover.classList.contains('aic-popover-visible') && !popover.classList.contains('aic-genie-closing');
  if (isOpen) {
    window.closeComposerPopoverWithGenie(popover, btn, 'model');
    const effortPopover = document.getElementById('desktopAiEffortPopover');
    if (effortPopover) window.closeComposerPopoverWithGenie(effortPopover, null, '', true);
  } else {
    window.closeAllComposerPopovers('model');
    renderDesktopAiModelsList();
    window.openComposerPopoverWithGenie(popover, btn, 'model');
  }
};

window.selectComposerModel = function(modelId) {
  activeComposerModelId = modelId;
  activeComposerAuto = false;
  if (typeof syncSelectedModelToUI === 'function') syncSelectedModelToUI(modelId);
};
window.selectDesktopAiModel = function(modelId) {
  const m = typeof COMPOSER_MODELS !== 'undefined' ? COMPOSER_MODELS.find(x => x.id === modelId || x.name === modelId) : null;
  activeComposerModelId = m ? m.id : modelId;
  activeComposerAuto = false;
  syncSelectedModelToUI(activeComposerModelId);
  const popover = document.getElementById('desktopAiModelPopover');
  const btn = document.getElementById('desktopAiModelTriggerBtn');
  window.closeComposerPopoverWithGenie(popover, btn, 'model');
};



window.selectModelEffort = function(level) {

  const targetId = hoveredComposerModelId || activeComposerModelId;

  const m = COMPOSER_MODELS.find(item => item.id === targetId);

  if (m) {

    m.effort = level;

    if (m.id === activeComposerModelId) {

      const effEl = document.getElementById('desktopAiModelEffortText');

      if (effEl) effEl.textContent = level;

    }

    renderDesktopAiModelsList();

  }

  const effortPopover = document.getElementById('desktopAiEffortPopover');

  if (effortPopover) {

    effortPopover.classList.remove('aic-popover-visible');

    effortPopover.classList.add('aic-popover-hidden');

  }

};

window.toggleMobileEffortMenu = function(e, modelId, badgeEl) {
  if (e) e.stopPropagation();
  const mobEffortPopover = document.getElementById('mobileAiEffortPopover');
  const mobModelPopover = document.getElementById('mobileAiModelPopover');
  if (!mobEffortPopover) return;

  const isOpen = mobEffortPopover.classList.contains('aic-popover-visible');
  if (isOpen && hoveredComposerModelId === modelId) {
    mobEffortPopover.classList.remove('aic-popover-visible');
    mobEffortPopover.classList.add('aic-popover-hidden');
    if (mobModelPopover) mobModelPopover.classList.remove('aic-mobile-split-active');
    return;
  }

  hoveredComposerModelId = modelId;
  const m = COMPOSER_MODELS.find(item => item.id === modelId);
  const currentEffort = m ? m.effort : 'Medium';

  ['Low', 'Medium', 'High', 'Max'].forEach(lvl => {
    const checkEl = document.getElementById('mobileEffortCheck-' + lvl);
    if (checkEl) checkEl.style.display = (lvl === currentEffort) ? 'inline' : 'none';
  });

  if (mobModelPopover) mobModelPopover.classList.add('aic-mobile-split-active');
  mobEffortPopover.classList.remove('aic-popover-hidden');
  mobEffortPopover.classList.add('aic-popover-visible');
};

window.selectMobileModelEffort = function(level) {
  const targetId = hoveredComposerModelId || activeComposerModelId;
  const m = COMPOSER_MODELS.find(item => item.id === targetId);
  if (m) {
    m.effort = level;
    const effEl = document.getElementById('mobileAiModelEffortText');
    if (effEl) effEl.textContent = level;
    const deskEffEl = document.getElementById('desktopAiModelEffortText');
    if (deskEffEl) deskEffEl.textContent = level;
    renderDesktopAiModelsList();
  }

  ['Low', 'Medium', 'High', 'Max'].forEach(lvl => {
    const checkEl = document.getElementById('mobileEffortCheck-' + lvl);
    if (checkEl) checkEl.style.display = (lvl === level) ? 'inline' : 'none';
  });

  const effortPopover = document.getElementById('mobileAiEffortPopover');
  if (effortPopover) {
    effortPopover.classList.remove('aic-popover-visible');
    effortPopover.classList.add('aic-popover-hidden');
  }
  const mobModelPopover = document.getElementById('mobileAiModelPopover');
  if (mobModelPopover) mobModelPopover.classList.remove('aic-mobile-split-active');
};




window.toggleDesktopAiAutoMode = function(e) {
  if (e) e.stopPropagation();
  activeComposerAuto = !activeComposerAuto;

  const autoSwitch = document.getElementById('desktopAiAutoSwitch');
  const autoTrigger = document.getElementById('desktopAiAutoTriggerBtn');
  const modelTrigger = document.getElementById('desktopAiModelTriggerBtn');
  const inlineSwitch = document.getElementById('desktopAiInlineAutoSwitch');

  if (activeComposerAuto) {
    if (autoSwitch) autoSwitch.classList.add('on');
    if (inlineSwitch) inlineSwitch.classList.add('on');
    if (autoTrigger) {
      autoTrigger.style.display = 'inline-flex';
      autoTrigger.style.opacity = '1';
    }
    if (modelTrigger) modelTrigger.style.display = 'none';

    setTimeout(() => {
      const popover = document.getElementById('desktopAiModelPopover');
      if (popover && popover.classList.contains('aic-popover-visible')) {
        window.closeComposerPopoverWithGenie(popover, autoTrigger, 'model');
      }
    }, 220);
  } else {
    if (autoSwitch) autoSwitch.classList.remove('on');
    if (inlineSwitch) inlineSwitch.classList.remove('on');
    if (autoTrigger) autoTrigger.style.display = 'none';
    if (modelTrigger) modelTrigger.style.display = 'inline-flex';
  }
};

window.disableDesktopAiAutoMode = function(e) {
  if (e) e.stopPropagation();
  activeComposerAuto = false;

  const autoSwitch = document.getElementById('desktopAiAutoSwitch');
  const autoTrigger = document.getElementById('desktopAiAutoTriggerBtn');
  const modelTrigger = document.getElementById('desktopAiModelTriggerBtn');
  const inlineSwitch = document.getElementById('desktopAiInlineAutoSwitch');

  if (inlineSwitch) inlineSwitch.classList.remove('on');
  if (autoSwitch) autoSwitch.classList.remove('on');

  setTimeout(() => {
    if (autoTrigger) autoTrigger.style.display = 'none';
    if (modelTrigger) {
      modelTrigger.style.display = 'inline-flex';
      modelTrigger.style.opacity = '1';
      modelTrigger.style.transform = 'none';
    }
    syncSelectedModelToUI(activeComposerModelId);
  }, 120);
};

window.handleDesktopAiAutoPillClick = function(e) {
  if (e.target.closest('.aic-ios-switch')) return;
  window.toggleDesktopAiModelMenu(e);
};




// ==========================================================================
// REAL-TIME SPEECH RECOGNITION ENGINE (WEB SPEECH API - SPEECH-TO-TEXT)
// ==========================================================================

let activeAiSpeechRecognition = null;
let activeAiSpeechTarget = null; // 'desktop' or 'mobile'
let activeAiSpeechInitialText = '';
let activeAiSpeechFinalText = '';

function startAiVoiceRecognition(target = 'desktop') {
  const isDesktop = target === 'desktop';
  const btn = document.getElementById(isDesktop ? 'desktopAiRecordBtn' : 'mobileAiRecordBtn');
  const label = document.getElementById(isDesktop ? 'desktopAiRecordLabel' : 'mobileAiRecordLabel');
  const icon = document.getElementById(isDesktop ? 'desktopAiRecordIcon' : 'mobileAiRecordIcon');
  const input = document.getElementById(isDesktop ? 'desktopAiPagePromptInput' : 'aiScreenPromptInput');

  if (!btn || !label || !icon || !input) return;

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    if (typeof showGeminiToast === 'function') {
      showGeminiToast('Browser belum mendukung Speech Recognition. Gunakan Chrome atau Edge.');
    } else {
      alert('Browser Anda belum mendukung Web Speech Recognition API. Mohon gunakan Google Chrome atau Microsoft Edge untuk menggunakan input suara secara langsung.');
    }
    return;
  }

  // Stop any currently running instance first
  stopAiVoiceRecognition();

  try {
    const recognition = new SpeechRecognition();
    recognition.lang = 'id-ID'; // Bahasa Indonesia
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    activeAiSpeechRecognition = recognition;
    activeAiSpeechTarget = target;
    activeAiSpeechInitialText = input.value || '';
    activeAiSpeechFinalText = '';

    let secCount = 0;
    btn.classList.add('recording', 'is-listening');
    btn.classList.remove('is-counting', 'is-counting-long');
    icon.innerHTML = `<span class="aic-recording-dot"></span>`;
    label.textContent = 'Mendengarkan';
    btn.setAttribute('title', 'Sedang merekam suara... Klik untuk berhenti');

    if (typeof showGeminiToast === 'function') {
      showGeminiToast('Mendengarkan... Silakan berbicara');
    }

    const timerId = setInterval(() => {
      secCount++;
      btn.classList.remove('is-listening');
      btn.classList.add('is-counting');
      if (secCount < 60) {
        btn.classList.remove('is-counting-long');
        label.textContent = `${secCount}s`;
      } else {
        btn.classList.add('is-counting-long');
        const m = Math.floor(secCount / 60);
        const s = String(secCount % 60).padStart(2, '0');
        label.textContent = `${m}:${s}`;
      }
    }, 1000);

    if (isDesktop) {
      composerVoiceTimerId = timerId;
      composerVoiceRecordingActive = true;
    } else {
      mobileVoiceTimerId = timerId;
      mobileVoiceRecordingActive = true;
    }

    recognition.onresult = function(event) {
      let sessionFinal = '';
      let sessionInterim = '';
      for (let i = 0; i < event.results.length; ++i) {
        const item = event.results[i];
        if (item && item[0]) {
          const transcript = item[0].transcript;
          if (item.isFinal) {
            sessionFinal += transcript + ' ';
          } else {
            sessionInterim += transcript;
          }
        }
      }

      const spokenContent = (sessionFinal + sessionInterim).trim();
      if (spokenContent) {
        const spacer = activeAiSpeechInitialText.length > 0 && !activeAiSpeechInitialText.endsWith(' ') ? ' ' : '';
        input.value = activeAiSpeechInitialText + spacer + spokenContent;
        input.dispatchEvent(new Event('input', { bubbles: true }));

        if (isDesktop && typeof handleDesktopAiComposerInput === 'function') {
          handleDesktopAiComposerInput(input);
        } else if (typeof handleMobileAiComposerInput === 'function') {
          handleMobileAiComposerInput(input);
        } else if (typeof autoResizeGeminiTextarea === 'function') {
          autoResizeGeminiTextarea(input);
        }

        if (typeof updateComposerSubmitButtonState === 'function') {
          updateComposerSubmitButtonState();
        }
      }
    };

    recognition.onerror = function(event) {
      console.warn('SpeechRecognition error:', event.error);
      if (event.error === 'not-allowed') {
        if (typeof showGeminiToast === 'function') {
          showGeminiToast('Izin akses mikrofon belum diberikan. Silakan izinkan di browser.');
        } else {
          alert('Izin akses mikrofon belum diberikan. Silakan izinkan akses mikrofon di pengaturan browser Anda.');
        }
      } else if (event.error === 'no-speech') {
        // No speech detected yet, continue listening
        return;
      } else if (event.error === 'audio-capture') {
        if (typeof showGeminiToast === 'function') {
          showGeminiToast('Mikrofon tidak terdeteksi pada perangkat Anda.');
        } else {
          alert('Mikrofon tidak terdeteksi pada perangkat Anda.');
        }
      } else if (event.error === 'network') {
        if (typeof showGeminiToast === 'function') {
          showGeminiToast('Layanan suara offline atau koneksi terputus.');
        }
      }
      stopAiVoiceRecognition();
    };

    recognition.onend = function() {
      // If stopped naturally or timed out, reset UI state
      if (isDesktop ? composerVoiceRecordingActive : mobileVoiceRecordingActive) {
        stopAiVoiceRecognition();
      }
    };

    recognition.start();
  } catch (err) {
    console.error('Failed to start SpeechRecognition:', err);
    stopAiVoiceRecognition();
  }
}

function stopAiVoiceRecognition() {
  if (activeAiSpeechRecognition) {
    try {
      activeAiSpeechRecognition.stop();
    } catch (e) {}
    activeAiSpeechRecognition = null;
  }

  // Reset desktop UI
  if (composerVoiceTimerId) {
    clearInterval(composerVoiceTimerId);
    composerVoiceTimerId = null;
  }
  composerVoiceRecordingActive = false;
  const dBtn = document.getElementById('desktopAiRecordBtn');
  const dLabel = document.getElementById('desktopAiRecordLabel');
  const dIcon = document.getElementById('desktopAiRecordIcon');
  if (dBtn) {
    dBtn.classList.remove('recording', 'is-listening', 'is-counting', 'is-counting-long');
    dBtn.setAttribute('title', 'Input Suara');
  }
  if (dLabel) dLabel.textContent = 'Record';
  if (dIcon) {
    dIcon.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="5.5" y="1.8" width="5" height="7.6" rx="2.5" stroke="currentColor" stroke-width="1.45"/><path d="M3.2 7.2C3.2 9.85 5.35 12 8 12C10.65 12 12.8 9.85 12.8 7.2" stroke="currentColor" stroke-width="1.45" stroke-linecap="round"/><path d="M8 12V14.2M5.8 14.2H10.2" stroke="currentColor" stroke-width="1.45" stroke-linecap="round"/></svg>`;
  }

  // Reset mobile UI
  if (typeof mobileVoiceTimerId !== 'undefined' && mobileVoiceTimerId) {
    clearInterval(mobileVoiceTimerId);
    mobileVoiceTimerId = null;
  }
  mobileVoiceRecordingActive = false;
  const mBtn = document.getElementById('mobileAiRecordBtn');
  const mLabel = document.getElementById('mobileAiRecordLabel');
  const mIcon = document.getElementById('mobileAiRecordIcon');
  if (mBtn) {
    mBtn.classList.remove('recording', 'is-listening', 'is-counting', 'is-counting-long');
    mBtn.setAttribute('title', 'Input Suara');
  }
  if (mLabel) mLabel.textContent = 'Record';
  if (mIcon) {
    mIcon.innerHTML = `<svg width="15" height="15" viewBox="0 0 16 16" fill="none"><rect x="5.5" y="1.8" width="5" height="7.6" rx="2.5" stroke="currentColor" stroke-width="1.45"/><path d="M3.2 7.2C3.2 9.85 5.35 12 8 12C10.65 12 12.8 9.85 12.8 7.2" stroke="currentColor" stroke-width="1.45" stroke-linecap="round"/><path d="M8 12V14.2M5.8 14.2H10.2" stroke="currentColor" stroke-width="1.45" stroke-linecap="round"/></svg>`;
  }

  activeAiSpeechTarget = null;
  activeAiSpeechInitialText = '';
  activeAiSpeechFinalText = '';

  if (typeof updateComposerSubmitButtonState === 'function') {
    updateComposerSubmitButtonState();
  }
}

window.startAiVoiceRecognition = startAiVoiceRecognition;
window.stopAiVoiceRecognition = stopAiVoiceRecognition;

window.toggleDesktopAiVoiceRecord = function() {
  if (composerVoiceRecordingActive) {
    stopAiVoiceRecognition();
  } else {
    startAiVoiceRecognition('desktop');
  }
};

window.toggleMobileAiVoiceRecord = function() {
  if (mobileVoiceRecordingActive) {
    stopAiVoiceRecognition();
  } else {
    startAiVoiceRecognition('mobile');
  }
};




window.handleDesktopAiComposerFiles = function(event) {

  const files = Array.from(event.target.files || []);

  if (files.length === 0) return;

  files.forEach(f => {

    composerAttachedFilesList.push(f.name);

  });

  renderComposerAttachedChips();

  updateComposerSubmitButtonState();

  event.target.value = '';

};



function renderComposerAttachedChips() {

  const tray = document.getElementById('desktopAiAttachedChips');

  if (!tray) return;

  if (composerAttachedFilesList.length === 0) {

    tray.style.display = 'none';

    tray.innerHTML = '';

    return;

  }

  tray.style.display = 'flex';

  tray.innerHTML = composerAttachedFilesList.map((name, idx) => `

    <div class="aic-attached-chip">

      <span>📄 ${escapeHtmlSafe(name)}</span>

      <button type="button" class="aic-chip-close" onclick="removeComposerFile(${idx})" title="Hapus file">✕</button>

    </div>

  `).join('');

}



window.removeComposerFile = function(idx) {

  composerAttachedFilesList.splice(idx, 1);

  renderComposerAttachedChips();

  updateComposerSubmitButtonState();

};



window.closeAllComposerPopovers = function(except = '') {
  if (except !== 'mode' && typeof window.shiftModelButtonForMode === 'function') {
    window.shiftModelButtonForMode(false, false);
  }
  if (except !== 'mobileMode' && typeof window.shiftModelButtonForMode === 'function') {
    window.shiftModelButtonForMode(false, true);
  }
  const mobModelPopoverCloseAll = document.getElementById('mobileAiModelPopover');
  if (mobModelPopoverCloseAll) mobModelPopoverCloseAll.classList.remove('aic-mobile-split-active');
  const mobEffortPopoverCloseAll = document.getElementById('mobileAiEffortPopover');
  if (mobEffortPopoverCloseAll) {
    mobEffortPopoverCloseAll.classList.remove('aic-popover-visible');
    mobEffortPopoverCloseAll.classList.add('aic-popover-hidden');
  }

  if (except !== 'mobileModel' && except !== 'mobileMode') {
    setMobileControlsHidden(false);
  }

  const items = [
    { popId: 'desktopAiModePopover', btnId: 'desktopAiModeBtn', key: 'mode' },
    { popId: 'desktopAiModelPopover', btnId: 'desktopAiModelTriggerBtn', key: 'model' },
    { popId: 'desktopAiEffortPopover', btnId: null, key: 'model' },
    { popId: 'desktopAiContextPopover', btnId: null, key: 'context' },
    { popId: 'mobileAiModePopover', btnId: 'mobileAiModeBtn', key: 'mobileMode' },
    { popId: 'mobileAiModelPopover', btnId: 'mobileAiModelTriggerBtn', key: 'mobileModel' },
    { popId: 'mobileAiEffortPopover', btnId: null, key: 'mobileModel' }
  ];


  items.forEach(item => {
    if (except && item.key === except) return;
    const p = document.getElementById(item.popId);
    let b = item.btnId ? document.getElementById(item.btnId) : null;
    if (item.key === 'model' && document.getElementById('desktopAiAutoTriggerBtn') && document.getElementById('desktopAiAutoTriggerBtn').style.display !== 'none') {
      b = document.getElementById('desktopAiAutoTriggerBtn');
    }
    if (item.key === 'mobileModel' && document.getElementById('mobileAiAutoTriggerBtn') && document.getElementById('mobileAiAutoTriggerBtn').style.display !== 'none') {
      b = document.getElementById('mobileAiAutoTriggerBtn');
    }

    if (p && (p.classList.contains('aic-popover-visible') || p.classList.contains('aic-genie-opening'))) {
      if (typeof window.closeComposerPopoverWithGenie === 'function') {
        window.closeComposerPopoverWithGenie(p, b, item.key, false);
      } else {
        p.classList.remove('aic-popover-visible', 'aic-genie-opening');
        p.classList.add('aic-popover-hidden');
        if (b) b.classList.remove('menu-open', 'aic-trigger-hidden-by-popover');
      }
    }
  });
};

document.addEventListener('click', (e) => {
  const openPopovers = document.querySelectorAll('.aic-glass-popover.aic-popover-visible, .aic-glass-popover.aic-genie-opening, .aic-glass-popover.is-open');
  if (!openPopovers || openPopovers.length === 0) return;

  openPopovers.forEach(pop => {
    if (pop.contains(e.target)) return;
    const triggerId = pop.id === 'desktopAiModelPopover' ? 'desktopAiModelTriggerBtn' :
                      pop.id === 'desktopAiModePopover' ? 'desktopAiModeBtn' :
                      pop.id === 'mobileAiModelPopover' ? 'mobileAiModelTriggerBtn' :
                      pop.id === 'mobileAiModePopover' ? 'mobileAiModeBtn' : null;
    const triggerBtn = triggerId ? document.getElementById(triggerId) : null;
    if (triggerBtn && triggerBtn.contains(e.target)) return;

    const key = pop.id.includes('Model') ? (pop.id.includes('mobile') ? 'mobileModel' : 'model') :
                pop.id.includes('Mode') ? (pop.id.includes('mobile') ? 'mobileMode' : 'mode') : '';
    window.closeComposerPopoverWithGenie(pop, triggerBtn, key, false);
  });
});



window.openDesktopAiProModal = function() {

  const modal = document.getElementById('desktopAiProModal');

  if (modal) modal.style.display = 'flex';

};



window.closeDesktopAiProModal = function() {

  const modal = document.getElementById('desktopAiProModal');

  if (modal) modal.style.display = 'none';

};



window.dismissDesktopAiProBanner = function() {

  const banner = document.getElementById('desktopAiProBanner');

  if (banner) banner.style.display = 'none';

};



window.activateDesktopAiProTrial = function() {

  window.closeDesktopAiProModal();

  showGeminiToast('Fitur Pro Trial Aktif — Kapasitas Max Effort tersedia');

};





// Initialize AI Composer on Load

if (document.readyState === 'loading') {

  document.addEventListener('DOMContentLoaded', () => {

    if (typeof renderDesktopAiModelsList === 'function') renderDesktopAiModelsList();
    if (typeof syncSelectedModelToUI === 'function') syncSelectedModelToUI(activeComposerModelId);

  });

} else {

  if (typeof renderDesktopAiModelsList === 'function') renderDesktopAiModelsList();

}


// URL hash direct navigation & state sync support
function checkUrlHashNav() {
  const hash = (window.location.hash || '').replace('#', '').toLowerCase();
  const navMap = { home: 0, beranda: 0, detail: 1, divisi: 1, ai: 2, chat: 3, stats: 4, statistik: 4 };
  if (hash === 'ai' && window.innerWidth <= 1024) {
    if (typeof window.navigateTo === 'function') {
      window.navigateTo('ai');
    }
  }
  if (hash && navMap[hash] !== undefined) {
    window.goToDesktopSlide(navMap[hash], false);
  }
}
if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', checkUrlHashNav);
} else {
  checkUrlHashNav();
}
window.addEventListener('hashchange', checkUrlHashNav);