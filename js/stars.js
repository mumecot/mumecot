const starContainer = document.getElementById("stars-container");

const numStars = 80;
for (let i = 0; i < numStars; i++) {
  const star = document.createElement("div");
  const size = Math.random() * 2 + 1;
  const duration = Math.random() * 3 + 2;
  const colors = ['#f5f3f0', '#ebd978', '#a6c8de', '#d4cdb8', '#c7c9d4'];
  star.style.background = colors[Math.floor(Math.random() * colors.length)];

  star.classList.add("star");
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  star.style.animationDuration = `${duration}s`;

  starContainer.appendChild(star);
}