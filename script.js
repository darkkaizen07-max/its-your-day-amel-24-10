// Fungsi untuk memindahkan halaman
function nextPage(pageNumber) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));

  const targetPage = document.getElementById(`page-${pageNumber}`);
  if (targetPage) {
    targetPage.classList.add('active');
  }
}

let highestZ = 10;
function bringToFront(element) {
  highestZ++;
  element.style.zIndex = highestZ;
  element.style.transform = "scale(1.08) rotate(0deg)";
}

// Fungsi musik latar
let isPlaying = false;
function toggleMusic() {
  const music = document.getElementById('bgMusic');
  const musicBtn = document.getElementById('musicToggle');

  if (isPlaying) {
    music.pause();
    musicBtn.innerText = "🎵 hidupin lagu";
    isPlaying = false;
  } else {
    music.play().then(() => {
      musicBtn.innerText = "🔇 Matiin lagu";
      isPlaying = true;
    }).catch(error => {
      console.log("Autoplay dicegah browser:", error);
      alert("Silakan klik sekali lagi untuk memutar musik ya!");
    });
  }
}

function triggerSpamConfetti() {
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.7 },
    colors: ['#ff4757', '#ffa502', '#2ed573', '#1e90ff', '#ff6b81']
  });
}