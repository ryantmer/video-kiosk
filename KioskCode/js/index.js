const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResultsContainer = document.getElementById('video-container');
const noResults = document.getElementById('no-results');

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
    theme: 'flat'
});

const search = () => {
    const searchTerm = searchInput.value.toLowerCase();

    let searchResults;
    if (!searchTerm) {
        // By default, show the most-recent videos first
        searchResults = videos.sort((a, b) => {
            return b.year - a.year;
        }).slice(0, 5);
    } else {
        searchResults = videos.filter(video => {
            return video.fileName.toLowerCase().includes(searchTerm)
                || video.keywords.toLowerCase().includes(searchTerm);
        }).slice(0, 5);
    }

    const videoElements = searchResults.map(searchResult => {
        if (videoCache[searchResult.fileName]) {
            return videoCache[searchResult.fileName];
        }

        const source = document.createElement('source');
        source.src = `../Videos/${searchResult.fileName}#t=2`;

        const video = document.createElement('video');
        video.appendChild(source);

        const title = document.createElement('h3');
        title.innerText = searchResult.fileName.substring(6, searchResult.fileName.length - 4);

        const div = document.createElement('div');
        div.classList.add('search-result');
        div.addEventListener('click', event => {
            const searchResult = event.target.tagName == 'div' ? event.target : event.target.parentElement;
            const videoElement = searchResult.querySelector('video');
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

        videoCache[searchResult.fileName] = div;
        
        return div;
    });

    searchResultsContainer.replaceChildren(...videoElements);
    noResults.hidden = videoElements.length > 0;
};

searchInput.addEventListener('change', search)
searchButton.onclick = search;

search();