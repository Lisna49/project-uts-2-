// Pilih elemen navbar
const navbar = document.getElementById('navbar');

// Inisialisasi variabel untuk posisi scroll terakhir
let lastScrollY = window.scrollY;

// Tambahkan event listener untuk mendeteksi saat pengguna melakukan scroll
window.addEventListener('scroll', () => {
  // Jika pengguna telah scroll ke bawah (scrollY lebih dari 0)
  if (window.scrollY > 0) {
    // Tambahkan kelas "sticky" ke elemen navbar untuk membuatnya tetap di posisi atas halaman
    navbar.classList.add('sticky');
  } else {
    // Hapus kelas "sticky" dari elemen navbar jika berada di posisi awal halaman
    navbar.classList.remove('sticky');
  }

  // Perbarui posisi scroll terakhir dengan posisi scroll saat ini
  lastScrollY = window.scrollY;
});

// Fungsi untuk mengontrol sidebar
function toggleSidebar() {
  // Pilih elemen sidebar
  const sidebar = document.getElementById('sidebar');

  // Cek posisi sidebar saat ini dengan properti left
  if (sidebar.style.left === '0px') {
    // Jika sidebar sudah terbuka (left = 0px), sembunyikan dengan mengatur left ke -250px
    sidebar.style.left = '-250px';
  } else {
    // Jika sidebar tertutup, buka dengan mengatur left ke 0px
    sidebar.style.left = '0px';
  }
}

// Slider script
const sliderWrapper = document.querySelector('.slider-wrapper');
const dotsContainer = document.querySelector('.dots-container');
const slides = document.querySelectorAll('.content-card, .content-card2, .content-card3, .content-card4, .content-card5, .content-card6, .content-card7, .content-card8, .content-card9');
const slideWidth = 100 / slides.length; // Menampilkan gambar secara responsif

let currentIndex = 0; // Indeks awal
let autoSlideInterval;

// Membuat dots secara dinamis
slides.forEach((_, index) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(index));
  dotsContainer.appendChild(dot);
});

// Memperbarui tampilan dots aktif
const updateDots = () => {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
};

// Fungsi untuk berpindah ke slide tertentu
const goToSlide = (index) => {
  currentIndex = index;
  updateDots();
  updateSlidePosition();
};

// Mengatur posisi slide agar gambar aktif selalu di tengah
const updateSlidePosition = () => {
  const offset = -currentIndex * slideWidth; // Mengatur posisi berdasarkan indeks aktif
  sliderWrapper.style.transform = `translateX(${offset}%)`;
  sliderWrapper.style.transition = 'transform 0.4s ease-in-out';

  slides.forEach((slide, index) => {
    if (index === currentIndex) {
      slide.classList.remove('grayscale'); // Tengah tanpa grayscale
    } else {
      slide.classList.add('grayscale'); // Kiri dan kanan grayscale
    }
  });
};

// Fitur auto slide
const autoSlide = () => {
  currentIndex = (currentIndex + 1) % slides.length; // Looping kembali ke slide pertama
  goToSlide(currentIndex);
};

// Mulai auto slide
autoSlideInterval = setInterval(autoSlide, 5000); // Slide otomatis setiap 5 detik

// Menghentikan auto slide saat mouse berada di slider
sliderWrapper.addEventListener('mouseenter', () => {
  clearInterval(autoSlideInterval);
});

// Melanjutkan auto slide saat mouse keluar dari slider
sliderWrapper.addEventListener('mouseleave', () => {
  autoSlideInterval = setInterval(autoSlide, 5000);
});

// Inisialisasi posisi awal
updateSlidePosition();
updateDots();

// END-Slider-Script

// loading screen
window.addEventListener('load', function () {
  const loadingElement = document.getElementById('loading');
  const contentElement = document.getElementById('content');
  loadingElement.style.display = 'none';
  contentElement.style.display = 'block';
});
// query
$(document).ready(function () {
  const text = 'Welcome To Aksa Rental'; // Teks yang akan diketik
  let index = 0; // Indeks untuk karakter
  let isDeleting = false; // Status penghapusan teks

  function typeWriter() {
    if (!isDeleting) {
      // Mengetik teks satu per satu
      $('#typewriter').text(text.substring(0, index));
      index++;
      if (index > text.length) {
        isDeleting = true; // Mulai menghapus
        setTimeout(typeWriter, 1000); // Tunggu 1 detik sebelum mulai menghapus
        return;
      }
    } else {
      // Menghapus teks satu per satu
      $('#typewriter').text(text.substring(0, index));
      index--;
      if (index < 0) {
        isDeleting = false; // Mulai mengetik lagi
        setTimeout(typeWriter, 500); // Tunggu sebelum mengetik ulang
        return;
      }
    }
    setTimeout(typeWriter, isDeleting ? 50 : 100); // Kecepatan mengetik & menghapus
  }

  typeWriter(); // Mulai animasi
});
