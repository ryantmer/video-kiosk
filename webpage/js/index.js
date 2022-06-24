const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResultsContainer = document.getElementById('video-container');
const noResults = document.getElementById('no-results');

const server = 'http://localhost:3000';

const videoCache = {};

KioskBoard.Run('.js-kioskboard-input', {
    keysArrayOfObjects: [
        {
          '0': 'Q',
          '1': 'W',
          '2': 'E',
          '3': 'R',
          '4': 'T',
          '5': 'Y',
          '6': 'U',
          '7': 'I',
          '8': 'O',
          '9': 'P'
        },
        {
          '0': 'A',
          '1': 'S',
          '2': 'D',
          '3': 'F',
          '4': 'G',
          '5': 'H',
          '6': 'J',
          '7': 'K',
          '8': 'L'
        },
        {
          '0': 'Z',
          '1': 'X',
          '2': 'C',
          '3': 'V',
          '4': 'B',
          '5': 'N',
          '6': 'M'
        }
    ],
    capsLockActive: false,
    theme: 'oldschool'
});

const refreshVideoIndex = async() => {
    await fetch(`${server}/refresh`, {
        method: 'POST'
    });
}

const search = async() => {
    const searchTerm = searchInput.value.toLowerCase();

    const response = await fetch(`${server}?q=${searchTerm}`);
    const searchResults = await response.json();

    const videoElements = searchResults.map(videoName => {
        if (videoCache[videoName]) {
            return videoCache[videoName];
        }

        const source = document.createElement('source');
        source.src = `../Videos/${videoName}#t=2`;

        const video = document.createElement('video');
        video.appendChild(source);

        const title = document.createElement('h3');
        title.innerText = videoName.substring(6, videoName.length - 4);

        const div = document.createElement('div');
        div.classList.add('search-result');
        div.addEventListener('click', event => {
            const videoName = event.target.tagName == 'div' ? event.target : event.target.parentElement;
            const videoElement = videoName.querySelector('video');
            if (videoElement.paused) {
                videoElement.currentTime = 0;
                videoElement.requestFullscreen();
                videoElement.play();
            } else {
                videoElement.pause();
                videoElement.currentTime = 1;
                document.exitFullscreen();
            }
        });
        div.appendChild(video);
        div.appendChild(title);

        videoCache[videoName] = div;
        
        return div;
    });

    searchResultsContainer.replaceChildren(...videoElements);
    noResults.hidden = videoElements.length > 0;
};

searchInput.addEventListener('change', search)
searchButton.onclick = search;

refreshVideoIndex().then(search);