import React, { useState } from "react";
import "./App.css";

// --- KAMUS TRANSLASI BAHASA ---
const translations = {
  en: {
    welcome: "Welcome to my portfolio",
    contactBtn: "Contact Me",
    downloadCV: "Download Original CV",
    bgTitle: "Background",
    bgDesc:
      "I am an Information Systems graduate focused on creating data-driven digital solutions. I combine expertise in software engineering (SDLC), database management, and system optimization to build applications that not only function well but also provide real impact for businesses and users.",
    eduTitle: "Education",
    degree: "Bachelor of Information Systems (January 2022 - July 2026)",
    servicesTitle: "My Services",
    servicesDesc:
      "I offer comprehensive web development services, ranging from WordPress-based website creation, SEO optimization, to regular maintenance to ensure optimal performance. With a structured approach, I help businesses increase their online visibility and achieve their digital goals with tailored solutions.",
    expTitle: "Experience & Projects",
    achieveTitle: "Achievement History",
    certTitle: "Professional Certifications",
    contactTitle: "Contact Me",
    location: "Location: South Jakarta",
    rights: "All rights reserved.",

    // Tanggal
    datePosyandu: "August 2025 - January 2026",
    dateSc: "May 2025 - January 2026",
    dateFt: "January 2025 - January 2026",
    dateJurnal: "February 2026 - May 2026",
    dateGudang: "February 2026 - February 2026",
    dateOld: "May 2026 - July 2026",
    dateAl: "May 2026 - July 2026",

    // Deskripsi Proyek
    posyandu1:
      "Successfully digitized the community information center by building a Centralized Digital Repository platform based on WordPress.",
    posyandu2:
      "Optimized system accessibility using a mobile-first approach for easy health service access.",
    sc1: "Optimized store operational efficiency by redesigning the transaction flow using WooCommerce integration.",
    sc2: "Automated the inventory management system and minimized downtime through regular web maintenance.",
    ft1: "Increased the effectiveness of academic information dissemination by managing a structured news publication system.",
    ft2: "Ensured all crucial information updates are delivered accurately and in real-time.",
    jurnal1:
      "Developed a web-based trading journal platform using React.js to assist in recording and analyzing trading activities.",
    jurnal2:
      "Ensured trading data is securely stored and easily accessible for regular trading performance evaluation.",
    gudang1:
      "Developed a web-based movie repository platform using React.js to watch free movies online.",
    gudang2:
      "Made it easy to watch movies of various genres with an attractive and comfortable viewing interface.",
    old1: "Developed a web-based e-commerce platform using the WordPress content management system and Elementor design.",
    old2: "Helped a store grow and increase sales through a responsive and attractive e-commerce platform.",
    al1: "Developed a web-based e-commerce platform using WordPress and Elementor, developed new features, and implemented search engine optimization.",
    al2: "Built digital sales capabilities to increase product visibility and business sales.",

    // Pencapaian
    achieve1: "Evaluation website design discussion meeting",
    achieve2: "Printed website user guide document",
    achieve3:
      "Photo documentation of the Posyandu Asoka website project with cadres",
    achieve4: "1st Place in Best Marketing Competition with Team",
    achieve5: "2nd Place in Bank Samoah Jamboree Editing Competition",
  },
  id: {
    welcome: "Selamat datang di portofolio saya",
    contactBtn: "Hubungi Saya",
    downloadCV: "Unduh CV Asli",
    bgTitle: "Latar Belakang",
    bgDesc:
      "Saya adalah seorang lulusan Sistem Informasi yang berfokus pada penciptaan solusi digital berbasis data. Saya menggabungkan keahlian dalam rekayasa perangkat lunak (SDLC), manajemen database, dan optimasi sistem untuk membangun aplikasi yang tidak hanya berfungsi dengan baik, tetapi juga memberikan dampak nyata bagi bisnis dan pengguna.",
    eduTitle: "Pendidikan",
    degree: "S1 Sistem Informasi (Januari 2022 - Juli 2026)",
    servicesTitle: "Layanan Saya",
    servicesDesc:
      "Saya menawarkan layanan pengembangan web yang komprehensif, mulai dari pembuatan website berbasis WordPress, optimasi SEO, hingga maintenance berkala untuk memastikan performa optimal. Dengan pendekatan yang terstruktur, saya membantu bisnis meningkatkan visibilitas online dan mencapai tujuan digital mereka dengan solusi yang disesuaikan.",
    expTitle: "Pengalaman & Proyek",
    achieveTitle: "Riwayat Pencapaian",
    certTitle: "Sertifikasi Profesional",
    contactTitle: "Hubungi Saya",
    location: "Lokasi: Jakarta Selatan",
    rights: "Hak cipta dilindungi.",

    // Tanggal
    datePosyandu: "Agustus 2025 - Januari 2026",
    dateSc: "Mei 2025 - Januari 2026",
    dateFt: "Januari 2025 - Januari 2026",
    dateJurnal: "Februari 2026 - Mei 2026",
    dateGudang: "Februari 2026 - Februari 2026",
    dateOld: "Mei 2026 - Juli 2026",
    dateAl: "Mei 2026 - Juli 2026",

    // Deskripsi Proyek
    posyandu1:
      "Berhasil mendigitalisasi pusat informasi warga dengan membangun platform Centralized Digital Repository berbasis WordPress.",
    posyandu2:
      "Mengoptimalkan aksesibilitas sistem menggunakan pendekatan mobile-first untuk akses layanan kesehatan yang mudah.",
    sc1: "Mengoptimalkan efisiensi operasional toko dengan merancang ulang alur transaksi menggunakan integrasi WooCommerce.",
    sc2: "Mengotomatisasi sistem manajemen inventaris dan meminimalkan downtime melalui pemeliharaan web berkala.",
    ft1: "Meningkatkan efektivitas penyebaran informasi akademik dengan mengelola sistem publikasi berita yang terstruktur.",
    ft2: "Memastikan seluruh pembaruan informasi krusial tersampaikan secara akurat dan real-time.",
    jurnal1:
      "Mengembangkan platform jurnal trading berbasis web menggunakan React.js untuk membantu dalam mencatat dan menganalisis aktivitas trading.",
    jurnal2:
      "Memastikan data trading tersimpan dengan aman dan mudah diakses untuk evaluasi performa trading secara berkala.",
    gudang1:
      "Mengembangkan platform gudang film berbasis web menggunakan React.js untuk menonton film gratis secara online.",
    gudang2:
      "Memudahkan untuk menonton film berbagai genre dengan tampilan yang menarik dan nyaman untuk ditonton.",
    old1: "Mengembangkan platform e-commerce berbasis web menggunakan content management system wordpress dan design elementor.",
    old2: "Membantu sebuah toko agar berkembang dan meningkatkan penjualan melalui platform e-commerce yang responsif dan menarik.",
    al1: "Mengembangkan platform e-commerce berbasis web menggunakan content management system wordpress dan design elementor dan mengembangkan fitur-fitur baru serta search engine optimization.",
    al2: "Membangun digitalisasi penjualan guna meningkatkan visibilitas dan penjualan produk usaha penjualan.",

    // Pencapaian
    achieve1: "Rapat diskusi perancangan website evaluasi",
    achieve2: "Cetak dokumen panduan penggunaan website",
    achieve3: "Foto dokumentasi project website posyandu asoka bersama kader",
    achieve4: "Juara 1 Lomba Marketing Terbaik Bersama Tim",
    achieve5: "Juara 2 Lomba Editing Jambore Bank Samoah",
  },
};

function App() {
  // State untuk bahasa (default "en" = English)
  const [lang, setLang] = useState("en");

  // State untuk modal pop-up gambar
  const [modalImg, setModalImg] = useState(null);

  // Konstanta agar penulisan teks lebih mudah
  const t = translations[lang];

  // Fungsi toggle bahasa
  const toggleLanguage = () => {
    setLang((prevLang) => (prevLang === "en" ? "id" : "en"));
  };

  return (
    <>
      {/* --- CSS KHUSUS (Ditempatkan di luar container utama agar position: fixed berfungsi sempurna) --- */}
      <style>{`
        /* Tombol Bahasa Melayang (Fixed & Tidak Tenggelam) */
        .lang-toggle-btn {
          position: fixed;
          top: 20px;
          right: 30px;
          padding: 8px 18px;
          background: rgba(0, 229, 255, 0.1);
          color: #00e5ff;
          border: 1px solid #00e5ff;
          border-radius: 30px;
          cursor: pointer;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          z-index: 999999; /* Z-Index maksimum agar selalu di atas */
          transition: all 0.3s ease;
          box-shadow: 0 0 10px rgba(0, 229, 255, 0.2);
        }
        .lang-toggle-btn:hover {
          background: #00e5ff;
          color: #0f1523;
          box-shadow: 0 0 20px rgba(0, 229, 255, 0.6);
          transform: translateY(-2px);
        }

        /* Styling Modal Pop-up Gambar */
        .image-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(5, 7, 10, 0.9);
          backdrop-filter: blur(8px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999999; 
          opacity: 0;
          animation: fadeIn 0.3s forwards;
          cursor: zoom-out;
        }
        @keyframes fadeIn { to { opacity: 1; } }
        
        .modal-content {
          max-width: 90%;
          max-height: 90%;
          border-radius: 12px;
          box-shadow: 0 0 40px rgba(0, 229, 255, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transform: scale(0.8);
          animation: zoomIn 0.3s forwards;
          cursor: default;
        }
        @keyframes zoomIn { to { transform: scale(1); } }
        
        .close-modal {
          position: absolute;
          top: 20px;
          right: 40px;
          color: white;
          font-size: 50px;
          font-weight: 300;
          cursor: pointer;
          transition: 0.3s;
        }
        .close-modal:hover { color: #00e5ff; text-shadow: 0 0 15px #00e5ff; }
      `}</style>

      {/* --- TOMBOL BAHASA (Berada di luar kontainer agar tidak kena efek clip-path) --- */}
      <button onClick={toggleLanguage} className="lang-toggle-btn">
        {lang === "en" ? "🇮🇩 ID" : "🇬🇧 EN"}
      </button>

      {/* --- MODAL POPUP GAMBAR --- */}
      {modalImg && (
        <div className="image-modal" onClick={() => setModalImg(null)}>
          <span className="close-modal">&times;</span>
          <img
            src={modalImg}
            alt="Preview"
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* --- CONTAINER UTAMA APLIKASI --- */}
      <div className="portfolio-container">
        {/* --- BAGIAN HERO --- */}
        <header className="hero-section">
          <div className="profile-wrapper">
            <img
              src="/profil.jpeg"
              alt="Dimas Pratama Adji"
              className="profile-img"
            />
          </div>

          <h1>DIMAS PRATAMA ADJI</h1>
          <h2>
            Web Development | Asset Management | SEO Enthusiast | Information
            System
          </h2>
          <p>{t.welcome}</p>

          <div className="cta-group">
            <a href="#contact" className="cta-button">
              {t.contactBtn}
            </a>
            <a
              href="CV_DIMAS.pdf"
              download="CV_DIMAS.pdf"
              className="cta-button outline">
              {t.downloadCV}
            </a>
          </div>
        </header>

        {/* --- BAGIAN LATAR BELAKANG & PENDIDIKAN --- */}
        <section className="about-section">
          <div className="about-grid">
            <div>
              <h2>{t.bgTitle}</h2>
              <p>{t.bgDesc}</p>
            </div>
            <div>
              <h2>{t.eduTitle}</h2>
              <div className="education-card">
                <h3>Universitas Budi Luhur | Jakarta</h3>
                <p>
                  <strong>{t.degree}</strong>
                </p>
                <p>IPK: 3,70</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- BAGIAN LAYANAN --- */}
        <section className="services-section">
          <h2>{t.servicesTitle}</h2>
          <div className="services-container">
            <a
              href="https://solusi-dimas-joki.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="services-image">
              <img src="/layanan1.png" alt="Layanan Web Development" />
            </a>

            <div className="services-list">
              <a
                href="https://solusi-dimas-joki.vercel.app"
                className="service-item"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                }}
                target="_blank"
                rel="noopener noreferrer">
                <h3>Solusi Dimas</h3>
                <p>{t.servicesDesc}</p>
              </a>
            </div>
          </div>
        </section>

        {/* --- BAGIAN PENGALAMAN & PROJECT --- */}
        <section className="experience-section">
          <h2>{t.expTitle}</h2>
          <div className="experience-grid">
            <a
              href="https://posyanduasoka.com"
              target="_blank"
              rel="noopener noreferrer"
              className="experience-card">
              <img
                src="/project-posyandu.png"
                alt="PKM Posyandu Asoka"
                className="project-img"
              />
              <h3>Web Development PKM Posyandu</h3>
              <span className="date">{t.datePosyandu}</span>
              <ul>
                <li>{t.posyandu1}</li>
                <li>{t.posyandu2}</li>
              </ul>
            </a>

            <a
              href="https://scsyifacollection.store"
              target="_blank"
              rel="noopener noreferrer"
              className="experience-card">
              <img
                src="/project-ecommerce.png"
                alt="Toko SC Syifa Collection"
                className="project-img"
              />
              <h3>Web E-Commerce SC Syifa</h3>
              <span className="date">{t.dateSc}</span>
              <ul>
                <li>{t.sc1}</li>
                <li>{t.sc2}</li>
              </ul>
            </a>

            <a
              href="https://ft.budiluhur.ac.id"
              target="_blank"
              rel="noopener noreferrer"
              className="experience-card">
              <img
                src="/project-onjob.png"
                alt="Web Specialist On Job"
                className="project-img"
              />
              <h3>Web Specialist On Job</h3>
              <span className="date">{t.dateFt}</span>
              <ul>
                <li>{t.ft1}</li>
                <li>{t.ft2}</li>
              </ul>
            </a>

            <a
              href="https://jurnaltradingdimas.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="experience-card">
              <img
                src="/project-jurnaltrading.png"
                alt="Web Jurnal Trading"
                className="project-img"
              />
              <h3>Web Jurnal Trading</h3>
              <span className="date">{t.dateJurnal}</span>
              <ul>
                <li>{t.jurnal1}</li>
                <li>{t.jurnal2}</li>
              </ul>
            </a>

            <a
              href="https://gudangmovie.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="experience-card">
              <img
                src="/project-gudangfilm.png"
                alt="Gudang Film Cinema Stream"
                className="project-img"
              />
              <h3>Gudang Film Cinema Stream</h3>
              <span className="date">{t.dateGudang}</span>
              <ul>
                <li>{t.gudang1}</li>
                <li>{t.gudang2}</li>
              </ul>
            </a>

            <a
              href="https://oldsneakers.store/"
              target="_blank"
              rel="noopener noreferrer"
              className="experience-card">
              <img
                src="/project-ecommerce1.png"
                alt="Web E-Commerce Old Sneakers"
                className="project-img"
              />
              <h3>Web E-Commerce Old Sneakers</h3>
              <span className="date">{t.dateOld}</span>
              <ul>
                <li>{t.old1}</li>
                <li>{t.old2}</li>
              </ul>
            </a>

            <a
              href="https://alkamilmuslim.store/"
              target="_blank"
              rel="noopener noreferrer"
              className="experience-card">
              <img
                src="/project-ecommerce2.png"
                alt="Web E-Commerce Al-Kamil Muslim"
                className="project-img"
              />
              <h3>Web E-Commerce Al-Kamil Muslim</h3>
              <span className="date">{t.dateAl}</span>
              <ul>
                <li>{t.al1}</li>
                <li>{t.al2}</li>
              </ul>
            </a>
          </div>
        </section>

        {/* --- SECTION PENCAPAIAN --- */}
        <section className="achievements-section">
          <h2>{t.achieveTitle}</h2>
          <div className="achievements-grid">
            <div
              className="achievement-card"
              onClick={() => setModalImg("/dokumen1.png")}
              style={{ cursor: "pointer" }}>
              <img
                src="/dokumen1.png"
                alt="Pencapaian 1"
                className="achievement-img"
              />
              <p>{t.achieve1}</p>
            </div>
            <div
              className="achievement-card"
              onClick={() => setModalImg("/dokumen2.png")}
              style={{ cursor: "pointer" }}>
              <img
                src="/dokumen2.png"
                alt="Pencapaian 2"
                className="achievement-img"
              />
              <p>{t.achieve2}</p>
            </div>
            <div
              className="achievement-card"
              onClick={() => setModalImg("/dokumen3.png")}
              style={{ cursor: "pointer" }}>
              <img
                src="/dokumen3.png"
                alt="Pencapaian 3"
                className="achievement-img"
              />
              <p>{t.achieve3}</p>
            </div>
            <div
              className="achievement-card"
              onClick={() => setModalImg("/dokumen4.jpg")}
              style={{ cursor: "pointer" }}>
              <img
                src="/dokumen4.jpg"
                alt="Pencapaian 4"
                className="achievement-img"
              />
              <p>{t.achieve4}</p>
            </div>
            <div
              className="achievement-card"
              onClick={() => setModalImg("/dokumen5.jpg")}
              style={{ cursor: "pointer" }}>
              <img
                src="/dokumen5.jpg"
                alt="Pencapaian 5"
                className="achievement-img"
              />
              <p>{t.achieve5}</p>
            </div>
          </div>
        </section>

        {/* --- SECTION SERTIFIKASI --- */}
        <section className="certifications-section">
          <h2>{t.certTitle}</h2>
          <div className="certifications-grid">
            <div
              className="cert-card-v2"
              onClick={() => setModalImg("/sertifikat1.jpg")}
              style={{ cursor: "pointer" }}>
              <div className="cert-img-container">
                <img
                  src="/sertifikat1.jpg"
                  alt="Sertifikasi Web Development"
                  className="cert-preview-img"
                />
              </div>
              <div className="cert-content">
                <h3>Progate x Himti Budi Luhur Coding Bootcamp</h3>
                <p className="cert-issuer">Progate</p>
                <p className="cert-date">2022</p>
              </div>
            </div>

            <div
              className="cert-card-v2"
              onClick={() => setModalImg("/sertifikat2.jpg")}
              style={{ cursor: "pointer" }}>
              <div className="cert-img-container">
                <img
                  src="/sertifikat2.jpg"
                  alt="Sertifikasi SEO"
                  className="cert-preview-img"
                />
              </div>
              <div className="cert-content">
                <h3>Frontend Development</h3>
                <p className="cert-issuer">MySkill</p>
                <p className="cert-date">2023</p>
              </div>
            </div>

            <div
              className="cert-card-v2"
              onClick={() => setModalImg("/sertifikat3.jpg")}
              style={{ cursor: "pointer" }}>
              <div className="cert-img-container">
                <img
                  src="/sertifikat3.jpg"
                  alt="Sertifikasi SEO"
                  className="cert-preview-img"
                />
              </div>
              <div className="cert-content">
                <h3>Social Media Strategy</h3>
                <p className="cert-issuer">MySkill</p>
                <p className="cert-date">2023</p>
              </div>
            </div>

            <div
              className="cert-card-v2"
              onClick={() => setModalImg("/sertifikat4.jpg")}
              style={{ cursor: "pointer" }}>
              <div className="cert-img-container">
                <img
                  src="/sertifikat4.jpg"
                  alt="Sertifikasi SEO"
                  className="cert-preview-img"
                />
              </div>
              <div className="cert-content">
                <h3>UI/UX Fundamental</h3>
                <p className="cert-issuer">MySkill</p>
                <p className="cert-date">2023</p>
              </div>
            </div>

            <div
              className="cert-card-v2"
              onClick={() => setModalImg("/sertifikat5.jpg")}
              style={{ cursor: "pointer" }}>
              <div className="cert-img-container">
                <img
                  src="/sertifikat5.jpg"
                  alt="Sertifikasi React.js"
                  className="cert-preview-img"
                />
              </div>
              <div className="cert-content">
                <h3>Introduction To Data Analyst</h3>
                <p className="cert-issuer">MySkill</p>
                <p className="cert-date">2023</p>
              </div>
            </div>

            <div
              className="cert-card-v2"
              onClick={() => setModalImg("/sertifikat6.jpg")}
              style={{ cursor: "pointer" }}>
              <div className="cert-img-container">
                <img
                  src="/sertifikat6.jpg"
                  alt="Sertifikasi SEO"
                  className="cert-preview-img"
                />
              </div>
              <div className="cert-content">
                <h3>Web Developer PKM Posyandu</h3>
                <p className="cert-issuer">PKM BUDI LUHUR</p>
                <p className="cert-date">2026</p>
              </div>
            </div>

            <div
              className="cert-card-v2"
              onClick={() => setModalImg("/sertifikat7.jpg")}
              style={{ cursor: "pointer" }}>
              <div className="cert-img-container">
                <img
                  src="/sertifikat7.jpg"
                  alt="Sertifikasi SEO"
                  className="cert-preview-img"
                />
              </div>
              <div className="cert-content">
                <h3>Web Developer Specialist</h3>
                <p className="cert-issuer">ON JOB BUDI LUHUR</p>
                <p className="cert-date">2026</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- BAGIAN KONTAK --- */}
        <section id="contact" className="contact-section">
          <h2>{t.contactTitle}</h2>
          <div className="contact-info">
            <p>
              📧 Email:{" "}
              <a
                href="mailto:dimaspratamaadji59@gmail.com"
                target="_blank"
                rel="noopener noreferrer">
                dimaspratamaadji59@gmail.com
              </a>
            </p>
            <p>
              📱 WhatsApp:{" "}
              <a
                href="https://wa.me/6289524099174"
                target="_blank"
                rel="noopener noreferrer">
                089524099174
              </a>
            </p>
            <p>📍 {t.location}</p>
          </div>
        </section>

        <footer>
          <p>
            &copy; {new Date().getFullYear()} Dimas Pratama Adji. {t.rights}
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
