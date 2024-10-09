const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");

const sidebar = document.getElementById('.container .sidebar');

menuOpen.addEventListener('click', ()=> sidebar.style.left ='0');
menuClose.addEventListener('click', () => sidebar.style.left = '-100%');


document.querySelector(".play-button").addEventListener("click", function () {
  const audioPlayer = document.getElementById("audio-player");

  if (audioPlayer.paused) {
    audioPlayer.play();
    this.classList.replace("bxs-right-arrow", "bxs-pause"); // Change icon to pause
  } else {
    audioPlayer.pause();
    this.classList.replace("bxs-pause", "bxs-right-arrow"); // Change icon to play
  }
});

