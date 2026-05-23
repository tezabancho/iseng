# 🎨 Portfolio Website - Minimalist Modern Design

Website portfolio yang simple, modern, dan responsif. Dibangun dengan HTML, CSS, dan Vanilla JavaScript.

## ✨ Fitur Utama

- 🌙 **Dark/Light Mode** - Toggle tema sesuai preferensi
- 📱 **Fully Responsive** - Sempurna di semua ukuran layar
- ✨ **Smooth Animations** - Animasi yang halus dan menarik
- 📬 **Contact Form** - Terintegrasi dengan Formspree
- 🎯 **Hero Section** - Landing page yang memukau
- 🖼️ **Projects Gallery** - Showcase proyek Anda
- 💼 **Skills Section** - Tampilkan keahlian Anda
- ⚡ **Super Fast** - Total hanya ~26KB, loading instant

## 🚀 Quick Start

### 1. Buka di Browser
Cukup buka `index.html` di browser favorit Anda - tidak perlu setup rumit!

```bash
# Windows - Double-click index.html atau
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### 2. Kustomisasi Konten
Edit `index.html` dan ganti dengan informasi Anda:

```html
<h1 class="hero-title fade-in">Halo, saya [NAMA ANDA]</h1>
<p class="hero-subtitle fade-in-delay">
    [TITLE ANDA] & [DESKRIPSI SINGKAT]
</p>
```

### 3. Setup Contact Form
1. Buka https://formspree.io
2. Daftar dan buat form baru
3. Copy Form ID Anda
4. Di `script.js`, cari:
   ```javascript
   const formspreeId = 'YOUR_FORMSPREE_ID';
   ```
5. Ganti dengan Form ID Anda

### 4. Deploy (Gratis!)

**GitHub Pages:**
```bash
git init
git add .
git commit -m "Portfolio website"
git remote add origin https://github.com/USERNAME/portfolio
git push -u origin main
# Aktifkan GitHub Pages di settings repo
```

**Netlify:**
- Drag & drop folder ke https://netlify.com

**Vercel:**
- Connect GitHub repo, deploy otomatis

## 📝 Struktur File

```
portfolio/
├── index.html          # HTML semua konten
├── styles.css          # Styling & responsive
├── script.js           # Interaktivitas & animasi
├── .github/
│   └── copilot-instructions.md
└── README.md           # File ini
```

## 🎨 Kustomisasi Warna

Edit `styles.css` untuk mengubah warna utama:

```css
:root {
    --accent-color: #4f46e5;  /* Ganti dengan warna Anda */
}
```

Warna populer:
- Biru: `#4f46e5` (Default)
- Merah: `#ef4444`
- Hijau: `#10b981`
- Oranye: `#f59e0b`
- Ungu: `#9333ea`

## 📱 Responsive Breakpoints

- **Desktop** - 1200px ke atas
- **Tablet** - 769px - 1199px
- **Mobile** - 480px - 768px
- **Small Mobile** - Di bawah 480px

Semua sudah dioptimalkan untuk tampilan sempurna di semua device!

## ⚡ Tips Performa

- Tanpa framework berat - pure HTML, CSS, JS
- CSS animations menggunakan `transform` untuk performa maksimal
- Dark mode dengan CSS variables - tidak ada reload
- Lazy loading siap untuk gambar (bisa ditambahkan)

## 🛠️ Customization Lanjutan

### Tambah Section Baru
```html
<section id="section-baru" class="section-baru">
    <div class="container">
        <h2 class="section-title">Judul Saya</h2>
        <!-- Content -->
    </div>
</section>
```

### Tambah Link Navigation
```html
<li><a href="#section-baru" class="nav-link">Menu</a></li>
```

### Update Social Links
Di bagian Contact, ubah URL:
```html
<a href="https://linkedin.com/in/username" target="_blank">LinkedIn</a>
```

## 🔧 Browser Compatibility

✅ Chrome/Edge ✅ Firefox ✅ Safari ✅ Mobile

## 📚 Resources

- **Formspree**: https://formspree.io (Contact form)
- **Netlify**: https://netlify.com (Hosting)
- **GitHub Pages**: https://pages.github.com (Hosting)
- **Vercel**: https://vercel.com (Hosting)

## 🎯 Checklist Sebelum Deploy

- [ ] Update nama dan judul di hero section
- [ ] Tambahkan foto/deskripsi di About section
- [ ] Update projects dengan karya Anda
- [ ] Update skills sesuai keahlian
- [ ] Setup Formspree ID untuk contact form
- [ ] Update email dan social links
- [ ] Test dark mode toggle
- [ ] Test responsivitas di mobile
- [ ] Update footer info

## 💡 Saran Fitur Tambahan

Anda bisa menambahkan:
- Blog section
- Testimonial dari klien
- Download CV button
- Google Analytics
- SEO metadata
- PWA (Progressive Web App)

## 📧 Dukungan

Jika ada pertanyaan atau ingin menambah fitur, tinggal edit file sesuai kebutuhan!

---

**Dibuat dengan ❤️**
Designed untuk kesederhanaan dan keindahan visual.
