import React from "react";
import { usePDF } from "react-to-pdf";
import "./App.css";

function App() {
  // --- KONFIGURASI PENCETAKAN PDF ---
  const { toPDF, targetRef } = usePDF({
    filename: "PORTOFOLIO_DIMAS.pdf",
    page: {
      format: "A4", // Memaksa format A4
      margin: 15, // Memberikan margin agar konten tidak terlalu mepet tepi
    },
  });

  return (
    <div className="portfolio-container" ref={targetRef}>
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
        <p>Selamat datang di portofolio saya</p>

        <div className="cta-group">
          <a href="#contact" className="cta-button">
            Hubungi Saya
          </a>

          <a
            href="CV_DIMAS.pdf"
            download="CV_DIMAS.pdf"
            className="cta-button outline">
            Unduh CV Asli
          </a>

          <button onClick={() => toPDF()} className="cta-button outline">
            📥 Cetak Halaman (PDF)
          </button>
        </div>
      </header>

      {/* --- BAGIAN LATAR BELAKANG & PENDIDIKAN --- */}
      <section className="about-section">
        <div className="about-grid">
          <div>
            <h2>Latar Belakang</h2>
            <p>
              Saya adalah seorang lulusan Sistem Informasi yang berfokus pada
              penciptaan solusi digital berbasis data. Saya menggabungkan
              keahlian dalam rekayasa perangkat lunak (SDLC), manajemen
              database, dan optimasi sistem untuk membangun aplikasi yang tidak
              hanya berfungsi dengan baik, tetapi juga memberikan dampak nyata
              bagi bisnis dan pengguna.
            </p>
          </div>
          <div>
            <h2>Pendidikan</h2>
            <div className="education-card">
              <h3>Universitas Budi Luhur | Jakarta</h3>
              <p>
                <strong>S1 Sistem Informasi</strong> (Januari 2022 - Juli 2026)
              </p>
              <p>IPK: 3,70</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- BAGIAN LAYANAN --- */}
      <section className="services-section">
        <h2>Layanan Saya</h2>
        <div className="services-container">
          <div className="services-image">
            <img src="/layanan1.png" alt="Layanan Web Development" />
          </div>

          <div className="services-list">
            {/* Bagian Layanan sekarang bisa diklik */}
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
              <p>
                Saya menawarkan layanan pengembangan web yang komprehensif,
                mulai dari pembuatan website berbasis WordPress, optimasi SEO,
                hingga maintenance berkala untuk memastikan performa optimal.
                Dengan pendekatan yang terstruktur, saya membantu bisnis
                meningkatkan visibilitas online dan mencapai tujuan digital
                mereka dengan solusi yang disesuaikan.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* --- BAGIAN PENGALAMAN & PROJECT --- */}
      <section className="experience-section">
        <h2>Pengalaman & Proyek</h2>
        <div className="experience-grid">
          {/* Silakan ganti href="#" dengan link asli proyekmu */}
          <a
            href="https://posyanduasoka.com"
            target="Posyandu Asoka"
            rel="noopener noreferrer"
            className="experience-card">
            <img
              src="/project-posyandu.png"
              alt="PKM Posyandu Asoka"
              className="project-img"
            />
            <h3>Web Development PKM Posyandu</h3>
            <span className="date">Agustus 2025 - Januari 2026</span>
            <ul>
              <li>
                Berhasil mendigitalisasi pusat informasi warga dengan membangun
                platform Centralized Digital Repository berbasis WordPress.
              </li>
              <li>
                Mengoptimalkan aksesibilitas sistem menggunakan pendekatan
                mobile-first untuk akses layanan kesehatan yang mudah.
              </li>
            </ul>
          </a>

          <a
            href="https://scsyifacollection.store"
            target="SC Syifa Collection"
            rel="noopener noreferrer"
            className="experience-card">
            <img
              src="/project-ecommerce.png"
              alt="Toko SC Syifa Collection"
              className="project-img"
            />
            <h3>Web E-Commerce SC Syifa</h3>
            <span className="date">Mei 2025 - Januari 2026</span>
            <ul>
              <li>
                Mengoptimalkan efisiensi operasional toko dengan merancang ulang
                alur transaksi menggunakan integrasi WooCommerce.
              </li>
              <li>
                Mengotomatisasi sistem manajemen inventaris dan meminimalkan
                downtime melalui pemeliharaan web berkala.
              </li>
            </ul>
          </a>

          <a
            href="https://ft.budiluhur.ac.id"
            target="FT Budi Luhur"
            rel="noopener noreferrer"
            className="experience-card">
            <img
              src="/project-onjob.png"
              alt="Web Specialist On Job"
              className="project-img"
            />
            <h3>Web Specialist On Job</h3>
            <span className="date">Januari 2025 - Januari 2026</span>
            <ul>
              <li>
                Meningkatkan efektivitas penyebaran informasi akademik dengan
                mengelola sistem publikasi berita yang terstruktur.
              </li>
              <li>
                Memastikan seluruh pembaruan informasi krusial tersampaikan
                secara akurat dan real-time.
              </li>
            </ul>
          </a>

          <a
            href="https://jurnaltradingdimas.vercel.app"
            target="Jurnal Trading Dimas"
            rel="noopener noreferrer"
            className="experience-card">
            <img
              src="/project-jurnaltrading.png"
              alt="Web Jurnal Trading"
              className="project-img"
            />
            <h3>Web Jurnal Trading</h3>
            <span className="date">Februari 2026 - Mei 2026</span>
            <ul>
              <li>
                Mengembangkan platform jurnal trading berbasis web menggunakan
                React.js untuk membantu dalam mencatat dan menganalisis
                aktivitas trading.
              </li>
              <li>
                Memastikan data trading tersimpan dengan aman dan mudah diakses
                untuk evaluasi performa trading secara berkala.
              </li>
            </ul>
          </a>

          <a
            href="https://gudangmovie.vercel.app/"
            target="Gudang Film Cinema Stream"
            rel="noopener noreferrer"
            className="experience-card">
            <img
              src="/project-gudangfilm.png"
              alt="Gudang Film Cinema Stream"
              className="project-img"
            />
            <h3>Gudang Film Cinema Stream</h3>
            <span className="date">Februari 2026 - Februari 2026</span>
            <ul>
              <li>
                Mengembangkan platform gudang film berbasis web menggunakan
                React.js untuk menonton film gratis secara online.
              </li>
              <li>
                Memudahkan untuk menonton film berbagai genre dengan tampilan
                yang menarik dan nyaman untuk ditonton.
              </li>
            </ul>
          </a>

          <a
            href="https://oldsneakers.store/"
            target="E-Commerce Old Sneakers"
            rel="noopener noreferrer"
            className="experience-card">
            <img
              src="/project-ecommerce1.png"
              alt="Web E-Commerce Old Sneakers"
              className="project-img"
            />
            <h3>Web E-Commerce Old Sneakers</h3>
            <span className="date">Mei 2026 - Juli 2026</span>
            <ul>
              <li>
                Mengembangkan platform e-commerce berbasis web menggunakan
                content management system wordpress dan design elementor.
              </li>
              <li>
                Membantu sebuah toko agar berkembang dan meningkatkan penjualan
                melalui platform e-commerce yang responsif dan menarik.
              </li>
            </ul>
          </a>

          <a
            href="https://alkamilmuslim.store/"
            target="E-Commerce Al-Kamil Muslim"
            rel="noopener noreferrer"
            className="experience-card">
            <img
              src="/project-ecommerce2.png"
              alt="Web E-Commerce Al-Kamil Muslim"
              className="project-img"
            />
            <h3>Web E-Commerce Al-Kamil Muslim</h3>
            <span className="date">Mei 2026 - Juli 2026</span>
            <ul>
              <li>
                Mengembangkan platform e-commerce berbasis web menggunakan
                content management system wordpress dan design elementor dan
                mengembangkan fitur-fitur baru serta search engine optimization.
              </li>
              <li>
                Membangun digitalisasi penjualan guna meningkatkan visibilitas
                dan penjualan produk usaha penjualan.
              </li>
            </ul>
          </a>
        </div>
      </section>

      {/* --- SECTION PENCAPAIAN --- */}
      <section className="achievements-section">
        <h2>Riwayat Pencapaian</h2>
        <div className="achievements-grid">
          <div className="achievement-card">
            <img
              src="/dokumen1.png"
              alt="Pencapaian 1"
              className="achievement-img"
            />
            <p>Rapat diskusi perancangan website evaluasi</p>
          </div>
          <div className="achievement-card">
            <img
              src="/dokumen2.png"
              alt="Pencapaian 2"
              className="achievement-img"
            />
            <p>Cetak dokumen panduan penggunaan website</p>
          </div>
          <div className="achievement-card">
            <img
              src="/dokumen3.png"
              alt="Pencapaian 3"
              className="achievement-img"
            />
            <p>Foto dokumentasi project website posyandu asoka bersama kader</p>
          </div>

          <div className="achievement-card">
            <img
              src="/dokumen4.jpg"
              alt="Pencapaian 4"
              className="achievement-img"
            />
            <p>Juara 1 Lomba Marketing Terbaik Bersama Tim</p>
          </div>

          <div className="achievement-card">
            <img
              src="/dokumen5.jpg"
              alt="Pencapaian 5"
              className="achievement-img"
            />
            <p>Juara 2 Lomba Editing Jambore Bank Samoah</p>
          </div>
        </div>
      </section>

      {/* --- SECTION SERTIFIKASI --- */}
      <section className="certifications-section">
        <h2>Sertifikasi Profesional</h2>
        <div className="certifications-grid">
          <div className="cert-card-v2">
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

          <div className="cert-card-v2">
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

          <div className="cert-card-v2">
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

          <div className="cert-card-v2">
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

          <div className="cert-card-v2">
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

          <div className="cert-card-v2">
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

          <div className="cert-card-v2">
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
      {/* --- BAGIAN KONTAK --- */}
      <section id="contact" className="contact-section">
        <h2>Hubungi Saya</h2>
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
          <p>📍 Lokasi: Jakarta Selatan</p>
        </div>
      </section>

      <footer>
        <p>
          &copy; {new Date().getFullYear()} Dimas Pratama Adji. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
