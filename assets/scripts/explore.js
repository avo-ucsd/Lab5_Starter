// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  window.speechSynthesis.onvoiceschanged = function() {
    addVoicesToSelect();
  }

  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance();
  const voiceSelect = document.getElementById("voice-select");
  const talkButton = document.querySelector("button");
  const textArea = document.getElementById("text-to-speak");
  const faceImage = document.querySelector("img");

  voiceSelect.addEventListener("change",
    (event) => {
      const selectIndex = voiceSelect.selectedIndex - 1;
      console.log("Index" + selectIndex);
      utterance.voice = speechSynthesis.getVoices()[selectIndex];
    });

  talkButton.addEventListener("click", 
    (event) => {
      const textInput = textArea.textContent;
      utterance.text = textInput;
      utterance.onend = (event) =>  {
        faceImage.src = `assets/images/smiling.png`;
      };

      synth.speak(utterance); 
      faceImage.src = `assets/images/smiling-open.png`;
      
    });

  textArea.addEventListener("change",
    (event) => {
      textArea.textContent = `${event.target.value}`;
    });
}

function addVoicesToSelect() {
  if (typeof speechSynthesis === "undefined") {
    return;
  }

  const voices = speechSynthesis.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name}(${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);

    document.getElementById("voice-select").appendChild(option);
  }
}