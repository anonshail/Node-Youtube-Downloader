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

		ytdl(url, {filter: 'audioonly'}).pipe(fs.createWriteStream(`${title}.mp`))

	})
}

// ytSearch( 'superman theme', function ( err, r ) {
//     if ( err ) throw err
   
//     const videos = r.videos
//     const playlists = r.playlists
//     const accounts = r.accounts
   
//     const firstResult = videos[ 0 ]
   
//     console.log( videos.length )
//   } )

// const url = 'http://www.youtube.com/watch?v=A02s8omM_hI';
  
// ytdl(url, {filter: 'audioonly'}).pipe(fs.createWriteStream('audio.mp3'))