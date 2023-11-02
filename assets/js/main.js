/* javascript */
const moodTracks = {
    happy: ["assets/audio/happy1.flac", "assets/audio/happy2.mp3"],
    sad: ["assets/audio/sad.mp3", "assets/audio/sad2.mp3"],
    exciting: ["assets/audio/exciting.mp3", "assets/audio/exciting2.mp3"],
    scared: [],
  };

  const moodQuotes = {
    happy: [
      "Happiness is not out there, it's in you.",
      "The most important thing is to enjoy your life to be happy it's all that matters.",
      "Every day is a new day, and you'll never be able to find happiness if you don't move on.",
    ],
    sad: [
      "Every man has his secret sorrows which the world knows not.",
      "It's okay to feel the pain until it hurts no more.",
      "The word 'happy' would lose its meaning if it were not balanced by sadness.",
    ],
    exciting: [
      "Every moment is a fresh beginning.",
      "The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience.",
      "Your time is limited, so don't waste it living someone else's life.",
    ],
    scared: [
      "Fear is only as deep as the mind allows.",
      "Sometimes the thing we can't change end up changing us.",
      "Fear is the main source of superstition, and one of the main sources of cruelty. To conquer fear is the beginning of wisdom.",
    ],
  };

document.addEventListener("DOMContentLoaded", function () {
  let moodInput = document.querySelector(".mood-input-field");
  let submitButton = document.querySelector(".submit-button");
  let moodAudio = document.getElementById("mood-audio");
  let moodQuote = document.querySelector(".quote-text");

  
  submitButton.addEventListener("click", function () {
    let mood = moodInput.value.toLowerCase().trim();
    moodQuote.textContent = moodQuotes[mood][Math.floor(Math.random() * moodQuotes[mood].length)];

    if (moodTracks[mood] && moodTracks[mood].length > 0) {
      let randomTrack =
        moodTracks[mood][Math.floor(Math.random() * moodTracks[mood].length)];
      moodAudio.src = randomTrack;
      moodAudio.play();
    }
    if (mood === "scared" || mood === "sad") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
  });
});
