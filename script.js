const cards = document.querySelectorAll(".group-card");

cards.forEach((card, index) => {
  window.setTimeout(() => card.classList.add("visible"), 120 + index * 120);
});
