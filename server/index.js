import express from 'express';
import { readFileSync } from 'fs';
import cors from 'cors';

if (process.argv.length !== 3) {
    throw new Error('Specify video index location');
}

const VIDEO_INDEX_FILE = process.argv[2];

const app = express();
const port = 3000;

let videos = [];

function refreshVideoIndex() {
    console.log('Refreshing video index');
    const videoIndex = readFileSync(VIDEO_INDEX_FILE, 'utf-8');
    videos = videoIndex.split('\n').map(line => {
        const [year, name, ...tags] = line.split(',');
        return {
            year: year.trim(),
            name: name.trim(),
            tags: tags.join(', ').trim()
        };
    }).reverse();
}

refreshVideoIndex();

app.use(cors());

app.post('/refresh', (_, res) => {
    refreshVideoIndex();
    res.sendStatus(200);
});

app.get('/', (req, res) => {
    const searchQuery = req.query.q?.toLowerCase();
    console.log(`Searching for ${searchQuery}...`);

    let relevantVideos;
    if (!searchQuery) {
        relevantVideos = videos.slice(0, 5);
    } else {
        relevantVideos = videos.filter(video => {
            return video.name.toLowerCase().includes(searchQuery)
                || video.year.includes(searchQuery)
                || video.tags.toLowerCase().includes(searchQuery);
        }).slice(0, 5);
    }

    const videoNames = relevantVideos.map(video => `${video.year} - ${video.name}.mp4`);

    console.log(`Found ${videoNames.length} relevant results for query ${searchQuery}: ${videoNames}`);

    res.type('application/json');
    res.send(videoNames);
});

app.listen(port, () => {
    console.log(`Kiosk server listening on localhost:${port}`);
});
