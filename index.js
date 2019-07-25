const fs = require('fs');
const ytdl = require('ytdl-core');
const ytSearch = require( 'yt-search' )

var videoKw = fs.readFileSync('input', 'utf8');
videoKw = videoKw.split('\n');

for(let i=0; i<videoKw.length; i++){
	video = videoKw[i];
	ytSearch(video, (err, r) => {
		if (err) throw err;
		let title = r.videos[0].title;
		let url = r.videos[0].url;

		ytdl(url, {filter: 'audioonly'}).pipe(fs.createWriteStream(`./songs/${title}.mp3`));

	})
}