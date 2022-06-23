import express from 'express';
import { readFileSync } from 'fs';

const app = express();
const port = 3000;

const videoIndex = readFileSync('../Video Index.csv');
console.log(videoIndex.toString());

app.set('view engine', 'pug');

app.get('/', (_, res) => {
    res.render('index', { title: 'Central Okanagan Sports Hall of Fame', message: 'some header' });
});

app.listen(port, () => {
    console.log(`Kiosk server listening on localhost:${port}`);
});
