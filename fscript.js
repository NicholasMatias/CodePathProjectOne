function featuredPlaylist(playlists){
    let totalPlaylists = playlists.length;
    console.log("Total playlists:",totalPlaylists);
    let randomPlaylistID = Math.floor(Math.random()* totalPlaylists);
    console.log("Random playlistID:",randomPlaylistID);
    let randomPlaylist = playlists[randomPlaylistID];
    var playlistContainer = document.getElementById("featured-playlist");
    playlistContainer.innerHTML =
    `
    <div class="playlist-card">
        <img src="${randomPlaylist.playlist_art}" >
        <h3>${randomPlaylist.playlist_name}</h3>
        <p>${randomPlaylist.playlist_creator}</p>
    </div>
    <div class="playlist-songs">
        <ul id="songs">
        
        </ul>
    </div>
    `;
    var songsContainer = document.getElementById("songs");
    for(let index = 0; index<randomPlaylist.songs.length;index++){
        console.log("Current song:",index);
        let currSong = randomPlaylist.songs[index];
        songsContainer.innerHTML +=
        `
        <li>
                <img src="${currSong.cover_art}" alt="" class="playlist-modal-song-image">
                <div class="playlist-modal-song-details">
                  <h3>${currSong.title}</h3>
                  <p>${currSong.artist}</p>
                  <p class="modal-album">${currSong.album}</p>
                </div>
                <span>${currSong.duration}</span>
              </li>
        `;
    }

}


featuredPlaylist(data.playlists);