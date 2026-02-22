import React from "react";
import { usePDF } from "react-to-pdf";
import "./App.css";

function App() {
  // --- KONFIGURASI PENCETAKAN PDF ---
  const { toPDF, targetRef } = usePDF({
    filename: "Portofolio_DimasPratamaAdji.pdf",
  });

  return (
    <div className="portfolio-container" ref={targetRef}>
      {/* --- BAGIAN HERO --- */}
      <header className="hero-section">
        <div className="profile-wrapper">
          <img
            src="/profil.jpg"
            alt="Dimas Pratama Adji"
            className="profile-img"
          />
        </div>

        <h1>DIMAS PRATAMA ADJI</h1>
        <h2>
          Web Development | WordPress & E-commerce Specialist | SEO Enthusiast |
          Information System Graduate
        </h2>
        <p>
          Lulusan Sarjana Sistem Informasi dari Universitas Budi Luhur dengan
          spesialisasi pengembangan web menggunakan WordPress.
        </p>

        <div className="cta-group">
          <a href="#contact" className="cta-button">
            Hubungi Saya
          </a>

          <a
            href="/CV_DimasPratamaAdji_FreshGraduate.pdf"
            download="CV_DimasPratamaAdji_FreshGraduate.pdf"
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
              Saya memiliki rekam jejak dalam merancang solusi digital, mulai
              dari platform e-commerce hingga sistem informasi layanan
              masyarakat. Saya ahli dalam kustomisasi tema, optimasi SEO, dan
              integrasi API untuk meningkatkan performa bisnis. Secara personal,
              saya berorientasi pada detail, analitis, dan memiliki kemampuan
              pemecahan masalah teknis yang kuat.
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
              src="/project-web.png"
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
            <span className="date">Februari 2026 - Sekarang</span>
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
              <h3>Sertifikasi Kompetensi Web Development</h3>
              <p className="cert-issuer">Lembaga Sertifikasi Profesi</p>
              <p className="cert-date">2025</p>
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
              <h3>SEO & WordPress Masterclass</h3>
              <p className="cert-issuer">Udemy Professional</p>
              <p className="cert-date">2024</p>
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
              <h3>SEO & WordPress Masterclass</h3>
              <p className="cert-issuer">Udemy Professional</p>
              <p className="cert-date">2024</p>
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
              <h3>SEO & WordPress Masterclass</h3>
              <p className="cert-issuer">Udemy Professional</p>
              <p className="cert-date">2024</p>
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
              <h3>Frontend Developer React.js</h3>
              <p className="cert-issuer">Dicoding Indonesia</p>
              <p className="cert-date">2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- BAGIAN KONTAK --- */}
      <section id="contact" className="contact-section">
        <h2>Hubungi Saya</h2>
        <div className="contact-info">
          <p>📧 Email: dimaspratamaadji59@gmail.com</p>
          <p>📱 Telepon: 089524099174</p>
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
