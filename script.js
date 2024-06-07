function openModal(modalId){
    document.getElementById(modalId).style.display= "block";
}

function closeModal(modalId){
    document.getElementById(modalId).style.display= "none";

}

window.onclick = function(event){
    if(event.target.classList.contains('modal')){
        event.target.style.display = "none";
    }
}
function populateSongs(modalId){
    var modalContainer= document.getElementById("playlist-cards");
    var songID = "addSongs" + modalId;
    modalContainer.innerHTML+=
    `
    <div id="${modalId}" class="modal">

    <div class="modal-content">
          <span class="close-modal" onclick="closeModal('${modalId}')">&times;</span>
          <div class="modal-header">
            <img src="${data.playlists[modalId].playlist_art}" alt="" class="playlist-modal-image">
            <div class="playlist-modal-title">
              <h2>${data.playlists[modalId].playlist_name}</h2>
              <p>${data.playlists[modalId].playlist_creator}</p>
            </div>
          </div>
          <button  class="shuffle-songs" onclick="shuffleSongs(${modalId},${songID})"> Shuffle</button>
          <div class="playlist-modal-songs">
          <ul id= "${songID}" >
          </ul>
        </div>
    </div>
    </div>
    `;
    var songContainer= document.getElementById(songID);
    songContainer.innerHTML="";
    for(let index =0;index< data.playlists[modalId].songs.length; index++){
        let currSong = data.playlists[modalId].songs[index];
        // console.log("**currSong", currSong);
        
        songContainer.innerHTML+=
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



function populatePlaylists(playlists){
    var containerDiv = document.getElementById("playlist-cards");
    // containerDiv.innerHTML="";
    for(let index = 0; index < playlists.length; index++){
    containerDiv.innerHTML+=
    `<div class="playlist" onclick="openModal('${playlists[index].playlistID}')">
    <div class="playlist-image-container"><img src="${playlists[index].playlist_art}"></div>
    <h3>${playlists[index].playlist_name}</h3>
    <p>${playlists[index].playlist_creator}</p>
    <div class ="like-container">
            <button class="like-btn" onclick ="toggleLike(event,this,'${playlists[index].playlistID}')"><i class="fa-regular fa-heart"></i></button></i>
            <div class = "like-count">
                ${playlists[index].likeCount}
            </div>
    </div>
    </div>

        
    
    `;
    populateSongs(playlists[index].playlistID);
    }
    
    
}
populatePlaylists(data.playlists);


// extract the playlist container via document.get...
// write some JS where you create elements via JS DOM manipulation
    // document.createElement/createChild
    // google js create dom elements
// with those created elements, you populate the element contents with the playlist data
    // appendchild
    // interhtml
    // textcontent



function toggleLike(event,button){
    event.stopPropagation();
    const icon = button.querySelector('.fa-heart');
    const likeCountDiv = button.nextElementSibling;
    let likeCount = parseInt(likeCountDiv.innerText);
    if(button.classList.contains('liked')){
        button.classList.remove('liked');
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular');
        likeCount--;
    }
    else{
        button.classList.add('liked');
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
        likeCount++;
    }
    likeCountDiv.innerText = likeCount;


    const playlist = data.playlists.find(pl => pl.playlistID === parseInt(playlistID));
    if(playlist){
        playlist.likeCount= likeCount;
    }
 // savePlaylistsToStorage(data.playlists);
}

// function savePlaylistsToStorage(){
//     localStorage.setItem('playlists',JSON.stringify(playlists));
// }

// function loadPlaylistsFromStorage(){
//     const storedPlaylists = localStorage.getItem('playlists');
//     return storedPlaylists ? JSON.parse(storedPlaylists) : data.playlists;
// }
// const playlists = loadPlaylistsFromStorage();


    function shuffleArray(array){
        for(let index = array.length-1;index>0; index--){
            const j = Math.floor(Math.random() * (index + 1));
            [array[index], array[j]] =[array[j],array[index]];
        }
        return array;
    }
function shuffleSongs(playlistID,songID){
    data.playlists[playlistID].songs = shuffleArray(data.playlists[playlistID].songs);
    let songOrder = shuffleArray(data.playlists[playlistID].songs);
    console.log(songOrder);
    
    populateSongs(playlistID);
    // var songContainer= document.getElementById(songID);
    
    // for(let index =0;index< data.playlists[playlistID].songs.length; index++){
    //     let currSong = songOrder[index];
    //     // console.log("**currSong", currSong);
    //     songContainer.innerHTML+=
    //     `
    //     <li>
    //             <img src="${currSong.cover_art}" alt="" class="playlist-modal-song-image">
    //             <div class="playlist-modal-song-details">
    //               <h3>${currSong.title}</h3>
    //               <p>${currSong.artist}</p>
    //               <p class="modal-album">${currSong.album}</p>
    //             </div>
    //             <span>${currSong.duration}</span>
    //           </li>
    //           `;
    // }


}






