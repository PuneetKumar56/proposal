// select karo
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

// Messages list
const messages = [
  "No? Really? 😢",
  "Think again 😭",
  "Please don’t do this 💔",
  "I will cry 🥺",
  "Last chance 😤",
  "अब तो YES दबा दो 😭❤️"
];

let messageIndex = 0;
let canMove = true;

// 🔥 FULL PAGE SMART DODGE (Desktop)
document.addEventListener("mousemove", (e) => {
  const rect = noBtn.getBoundingClientRect();

  const distance = Math.hypot(
    e.clientX - (rect.left + rect.width / 2),
    e.clientY - (rect.top + rect.height / 2)
  );

  if (distance < 100) {
    moveButton();
  }
});

// 📱 Mobile support
// document.addEventListener("touchstart", () => {
//   moveButton();
// });
noBtn.addEventListener("touchstart", moveButton);

// 🔥 Main move function
function moveButton() {
  if (!canMove) return;

  canMove = false;

  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = window.innerWidth - btnWidth;
  const maxY = window.innerHeight - btnHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  // ✅ Show messages one by one (no skipping)
  if (messageIndex < messages.length) {
    message.innerText = messages[messageIndex];
    messageIndex++;
  }

  // ⏱️ control speed (avoid spam)
  setTimeout(() => {
    canMove = true;
  }, 300);
}

// 💖 Floating hearts animation
const heartsContainer = document.querySelector(".hearts");

if (heartsContainer) {
  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";

    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }, 250);
}