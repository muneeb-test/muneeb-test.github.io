let song = document.getElementById("song");
let icon = document.getElementById("icon");
let btn = document.querySelector(".open-invitation");

icon.onclick = function () {
  if (song.paused) {
    song.play();
    icon.src = "/img/pause.png";
  } else {
    song.pause();
    icon.src = "/img/play.png";
  }
};

btn.addEventListener("click", () => {
  song.play();
  icon.src = "/img/pause.png";
});
