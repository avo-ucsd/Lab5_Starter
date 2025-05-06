// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  const soundSelect = document.getElementById("horn-select");
  const volumeSelect = document.getElementById("volume");
  const playButton = document.querySelector("button");
  const audio = document.querySelector("audio");
  const soundImage = document.querySelector("img");
  const volumeImage = document.querySelector("#volume-controls img");
  const jsConfetti = new JSConfetti;

  soundSelect.addEventListener("change", 
    (event) => {
      audio.src = `assets/audio/${event.target.value}.mp3`;
      soundImage.src = `assets/images/${event.target.value}.svg`;
    });

  playButton.addEventListener("click",
    (event) => { 
      audio.play();

      const dropdownValue = soundSelect.value;
      if (dropdownValue === "party-horn") {
        jsConfetti.addConfetti();
      }
    });

  volumeSelect.addEventListener("change",
    (event) => { 
      const volumeVal = Number(event.target.value);
      audio.volume = volumeVal / 100;

      if (volumeVal === 0) {
        volumeImage.src = `assets/icons/volume-level-0.svg`;
      } else if (volumeVal >= 1 && volumeVal < 33) {
        volumeImage.src = `assets/icons/volume-level-1.svg`;
      } else if (volumeVal >= 33 && volumeVal < 67) {
        volumeImage.src = `assets/icons/volume-level-2.svg`;
      } else {
        volumeImage.src = `assets/icons/volume-level-3.svg`;
      }
    });
}