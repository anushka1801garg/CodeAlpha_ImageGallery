const images = document.querySelectorAll(".gallery img");

let current = 0;

function openBox(index) {
  current = index;

  document.getElementById("lightbox").style.display = "flex";

  show();
}

function show() {
  document.getElementById("preview").src = images[current].src;
}

function closeBox() {
  document.getElementById("lightbox").style.display = "none";
}

function move(step) {
  current += step;

  if (current < 0) current = images.length - 1;

  if (current >= images.length) current = 0;

  show();
}

function filterGallery(category, event) {
  document
    .querySelectorAll(".filters button")
    .forEach((b) => b.classList.remove("active"));

  event.target.classList.add("active");

  document.querySelectorAll(".card").forEach((card) => {
    card.style.display =
      category === "all" || card.classList.contains(category)
        ? "block"
        : "none";
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") move(1);

  if (e.key === "ArrowLeft") move(-1);

  if (e.key === "Escape") closeBox();
});
