const rooms = [
  {
      image: "./assets/products/5.png",
      title: "Inner Peace",
      label: "01 — Bed Room"
  },
  {
      image: "./assets/products/2.png",
      title: "Serene White",
      label: "02 — Dining Room"
  },
  {
      image: "./assets/products/1.png",
      title: "Modern Vibes",
      label: "03 — Living Room"
  },
  {
      image: "./assets/products/5.png",
      title: "Modern Vibes",
      label: "04 — Living Room"
  }
];

// ✅ نبدأ من أول عنصر
let currentIndex = 0;

const mainImage = document.getElementById('mainImage');
const mainBtn = document.getElementById('mainBtn');
const dots = document.querySelectorAll('.dot');

// ✅ يعرض overlay و main
function showImages(index) {
  const overlayRoom = rooms[index];
  const nextIndex = (index + 1) % rooms.length;
  const mainRoom = rooms[nextIndex];

  // ✅ تحديث overlay
  const overlayImage = document.getElementById('overlayImage');
  const overlayLabel = document.getElementById('overlayLabel');
  const overlayTitle = document.getElementById('overlayTitle');

  if (overlayImage && overlayLabel && overlayTitle) {
    overlayImage.src = overlayRoom.image;
    overlayImage.alt = overlayRoom.title;
    overlayLabel.textContent = overlayRoom.label;
    overlayTitle.textContent = overlayRoom.title;
  }

  // ✅ تحديث main
  if (mainImage) {
    mainImage.src = mainRoom.image;
    mainImage.alt = mainRoom.title;
  }

  // ✅ تفعيل الدوت
  updateSlider(index);
}

// ✅ يفعل الدوت الصح
function updateSlider(index) {
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index+1);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // ✅ أول تحميل
  showImages(currentIndex);

  // ✅ عند الضغط على الزر
  mainBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % rooms.length;
    showImages(currentIndex);
  });

  // ✅ عند الضغط على dot
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.getAttribute('data-index'));
      currentIndex = index;
      showImages(currentIndex);
    });
  });
});
