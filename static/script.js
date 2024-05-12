document.addEventListener('DOMContentLoaded', function() {
  const songListDiv = document.getElementById('songList');
  let currentAudio = null;
  let mostRecentSong = null; // Variable to store the name of the most recent song

  function addSongToList(file) {
      const audioURL = URL.createObjectURL(file);
      const audio = new Audio(audioURL);
      const audioName = file.name;
      const audioContainer = document.createElement('div');
      const playButton = document.createElement('button');
      playButton.textContent = 'Play';
      playButton.addEventListener('click', function() {
          if (currentAudio && currentAudio !== audio) {
              currentAudio.pause();
          }
          audio.play();
          currentAudio = audio;
          mostRecentSong = audioName; // Update mostRecentSong when a song is played
      });
      const pauseButton = document.createElement('button');
      pauseButton.textContent = 'Pause';
      pauseButton.addEventListener('click', function() {
          audio.pause();
      });
      const stopButton = document.createElement('button');
      stopButton.textContent = 'Stop';
      stopButton.addEventListener('click', function() {
          audio.pause();
          audio.currentTime = 0;
      });
      const audioNameElement = document.createElement('span');
      audioNameElement.textContent = audioName;

      // Range input for seeking
      const seekInput = document.createElement('input');
      seekInput.type = 'range';
      seekInput.min = 0;
      seekInput.max = 100;
      seekInput.value = 0;
      seekInput.addEventListener('input', function() {
          const seekTime = audio.duration * (this.value / 100);
          audio.currentTime = seekTime;
      });

      audio.addEventListener('timeupdate', function() {
          const progress = (audio.currentTime / audio.duration) * 100;
          seekInput.value = progress;
      });

      audioContainer.appendChild(playButton);
      audioContainer.appendChild(pauseButton);
      audioContainer.appendChild(stopButton);
      audioContainer.appendChild(seekInput);
      audioContainer.appendChild(audioNameElement);
      songListDiv.appendChild(audioContainer);
  }

  const audioFileInput = document.createElement('input');
  audioFileInput.type = 'file';
  audioFileInput.accept = 'audio/*';
  audioFileInput.multiple = true;
  audioFileInput.addEventListener('change', function() {
      const files = this.files;
      for (const file of files) {
          addSongToList(file);
      }
  });

  const uploadButton = document.getElementById('uploadButton');
  uploadButton.addEventListener('click', function() {
      audioFileInput.click();
  });

  const recommendationButton = document.getElementById('recommendationButton');
  recommendationButton.addEventListener('click', function() {
      // Send an AJAX request to the backend with the most recent song name
      if (mostRecentSong) {
          const xhr = new XMLHttpRequest();
          xhr.open('POST', '/recommendation');
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.send(JSON.stringify({ songName: mostRecentSong }));
      } else {
          console.log('No recent song played.');
      }
  });
});

