const fs = require('fs');
const ytdl = require('ytdl-core');
const ytSearch = require( 'yt-search' )

ytSearch( 'superman theme', function ( err, r ) {
    if ( err ) throw err
   
    const videos = r.videos
    const playlists = r.playlists
    const accounts = r.accounts
   
    const firstResult = videos[ 0 ]
   
    console.log( videos.length )
  } )

const url = 'http://www.youtube.com/watch?v=A02s8omM_hI';
  
// ytdl(url, {filter: 'audioonly'}).pipe(fs.createWriteStream('audio.mp3'))