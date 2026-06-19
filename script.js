function openSurprise() {
  document.getElementById("surprise").classList.remove("hidden");

  const music = document.getElementById("bgMusic");
  music.play();

  document.getElementById("surprise").scrollIntoView({ behavior: "smooth" });
}
