const fs = require('fs');
const ytdl = require('ytdl-core');

const url = 'http://www.youtube.com/watch?v=A02s8omM_hI';

// ytdl(url).pipe(fs.createWriteStream('video.flv'));
  
ytdl(url, {filter: 'audioonly'}).pipe(fs.createWriteStream('audio.mp3'))