function showMessage() {
const surprise = document.getElementById("surprise");
surprise.classList.remove("hidden");
surprise.scrollIntoView({ behavior: "smooth" });
}