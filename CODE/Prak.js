// Array warna neon untuk tema cyberpunk
const neonColors = [
    '#FF00FF', // Magenta neon
    '#00FFFF', // Cyan neon
    '#FF007F', // Pink neon
    '#7F00FF', // Ungu neon
    '#00FF7F', // Hijau neon
    '#FF4500', // Oranye neon
    '#FFFF00', // Kuning neon
    '#00B7EB', // Biru elektrik
    '#FF1493', // Deep pink neon
    '#39FF14'  // Hijau limau neon
];

// Fungsi untuk memilih warna acak
function getRandomColor(excludeColor = null) {
    let availableColors = neonColors;
    if (excludeColor) {
        availableColors = neonColors.filter(color => color !== excludeColor);
    }
    return availableColors[Math.floor(Math.random() * availableColors.length)];
}

// Terapkan warna background dan font acak serta alert selamat datang saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const body = document.body;
    
    // Tampilkan alert selamat datang
    alert('Selamat datang di Portofolio Pribadi Rama Maulana Nurrahman!');

    // Efek fade-in
    container.style.opacity = '0';
    container.style.transition = 'opacity 1s ease-in';
    setTimeout(() => {
        container.style.opacity = '1';
    }, 100);

    // Set warna background acak untuk tema cyberpunk
    body.classList.add('cyberpunk');
    const bgColor = getRandomColor();
    body.style.backgroundColor = bgColor;

    // Set warna font acak untuk elemen tertentu
    const fontColor = getRandomColor(bgColor); // Hindari warna font sama dengan background
    document.querySelectorAll('h1, h2').forEach(el => {
        el.style.color = fontColor;
        el.style.textShadow = `0 0 10px ${fontColor}`;
        el.classList.add('glitch');
        el.setAttribute('data-text', el.textContent);
    });
    document.querySelectorAll('.container p, a').forEach(el => {
        el.style.color = fontColor;
        el.style.textShadow = `0 0 5px ${fontColor}`;
    });
});

// Toggle tema antara cyberpunk dan default
function toggleTheme() {
    const body = document.body;
    const container = document.querySelector('.container');
    const isCyberpunk = body.classList.contains('cyberpunk');

    if (isCyberpunk) {
        // Switch to default theme
        body.classList.remove('cyberpunk');
        body.style.backgroundColor = '#1A1A1A';
        container.style.backgroundColor = '#2C2C2C';
        container.style.color = '#E0E0E0';
        container.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
        document.querySelectorAll('h1, h2').forEach(el => {
            el.style.color = '#4B5EAA';
            el.style.textShadow = 'none';
            el.classList.remove('glitch');
            el.removeAttribute('data-text');
        });
        document.querySelectorAll('th').forEach(el => {
            el.style.backgroundColor = '#4B5EAA';
            el.style.textShadow = 'none';
        });
        document.querySelectorAll('a').forEach(el => {
            el.style.color = '#4B5EAA';
            el.style.textShadow = 'none';
            el.classList.remove('neon');
        });
        document.querySelectorAll('.container p').forEach(el => {
            el.style.color = '#E0E0E0';
            el.style.textShadow = 'none';
        });
        document.querySelector('img').style.borderColor = '#4B5EAA';
        document.querySelector('img').classList.remove('neon');
        document.querySelector('iframe').style.borderColor = '#4B5EAA';
        document.querySelector('iframe').classList.remove('neon');
        document.querySelector('blockquote').style.borderLeftColor = '#4B5EAA';
        document.querySelector('blockquote').classList.remove('neon', 'typewriter');
        document.querySelector('.theme-toggle').classList.remove('neon');
    } else {
        // Switch to cyberpunk theme
        body.classList.add('cyberpunk');
        const bgColor = getRandomColor();
        body.style.backgroundColor = bgColor;
        container.style.backgroundColor = '#1C2526';
        container.style.color = '#00FFFF';
        container.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.5)';
        
        // Set warna font acak untuk elemen tertentu
        const fontColor = getRandomColor(bgColor); // Hindari warna font sama dengan background
        document.querySelectorAll('h1, h2').forEach(el => {
            el.style.color = fontColor;
            el.style.textShadow = `0 0 10px ${fontColor}`;
            el.classList.add('glitch');
            el.setAttribute('data-text', el.textContent);
        });
        document.querySelectorAll('th').forEach(el => {
            el.style.backgroundColor = '#7F00FF';
            el.style.textShadow = '0 0 5px #7F00FF';
        });
        document.querySelectorAll('.container p, a').forEach(el => {
            el.style.color = fontColor;
            el.style.textShadow = `0 0 5px ${fontColor}`;
            el.classList.add('neon');
        });
        document.querySelector('img').style.borderColor = '#00FFFF';
        document.querySelector('img').classList.add('neon');
        document.querySelector('iframe').style.borderColor = '#00FFFF';
        document.querySelector('iframe').classList.add('neon');
        document.querySelector('blockquote').style.borderLeftColor = '#FF007F';
        document.querySelector('blockquote').classList.add('neon', 'typewriter');
        document.querySelector('.theme-toggle').classList.add('neon');
    }
}

// Animasi gambar profil saat hover
const profileImg = document.querySelector('img');
profileImg.addEventListener('mouseenter', () => {
    profileImg.style.transform = 'scale(1.1)';
    profileImg.style.transition = 'transform 0.3s ease';
    profileImg.style.boxShadow = '0 0 15px #00FFFF';
});
profileImg.addEventListener('mouseleave', () => {
    profileImg.style.transform = 'scale(1)';
    profileImg.style.boxShadow = body.classList.contains('cyberpunk') ? '0 0 15px #00FFFF' : 'none';
});

// Validasi klik link media sosial
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        if (!confirm('Anda akan meninggalkan situs ini untuk mengunjungi ' + link.href + '. Lanjutkan?')) {
            e.preventDefault();
        }
    });
});