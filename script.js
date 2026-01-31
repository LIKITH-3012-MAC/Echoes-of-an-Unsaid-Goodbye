// PDF URL
const pdfFile = "https://pdfhost.io/v/bxCpZ8TVVm_Echoes_of_an_Unsaid_Goodbye";

// Buttons
const readBtn = document.getElementById("readBook");
const downloadBtn = document.getElementById("downloadBook");

// Modal
const modal = document.getElementById("pdfModal");
const pdfFrame = document.getElementById("pdfFrame");
const closeBtn = document.querySelector(".close");

// Open PDF
readBtn.onclick = () => {
  pdfFrame.src = pdfFile;
  modal.style.display = "block";
};

// Download PDF
downloadBtn.onclick = () => {
  window.open(pdfFile, "_blank");
};

// Close modal
closeBtn.onclick = () => {
  modal.style.display = "none";
  pdfFrame.src = "";
};

// PARTICLES
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.dx = Math.random() - 0.5;
    this.dy = Math.random() - 0.5;
  }
  update() {
    this.x += this.dx;
    this.y += this.dy;
    if (this.x < 0 || this.x > canvas.width) this.dx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.dy *= -1;
  }
  draw() {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles() {
  particles = [];
  for (let i = 0; i < 100; i++) particles.push(new Particle());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

initParticles();
animate();

// REVIEW FORM + ROCKET
const reviewForm = document.getElementById("reviewForm");
const successModal = document.getElementById("rocket-success-modal");

reviewForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(reviewForm);

  await fetch(reviewForm.action, {
    method: "POST",
    body: data,
    headers: { Accept: "application/json" }
  });

  successModal.style.display = "flex";
  reviewForm.reset();

  setTimeout(() => {
    successModal.style.display = "none";
  }, 3000);
});
