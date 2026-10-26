

const albumEl = document.querySelector(".albums")
const readMorebtnEl = document.querySelector(".read-more")


let allAlbums = []
let albumCount = 0
const limit = 10
function getAlbums() {
    const albumsToShow = allAlbums.slice(albumCount, albumCount + limit);

    albumsToShow.forEach((album) => {
       albumEl.innerHTML += `
        <div class="album-card">
            <span class="album-number">ALBUM #${album.id}</span>

            <p class="user-id">User ID: ${album.userId}</p>

            <p class="album-id">Album ID: ${album.id}</p>

            <h2 class="album-title">${album.title}</h2>
        </div>
       ` 
    });

    albumCount += albumsToShow.length;
    if (albumCount >= allAlbums.length) {
    readMorebtnEl.style.display = "none";
    }
}

readMorebtnEl.addEventListener("click", () => {
    getAlbums();
});

fetch("https://jsonplaceholder.typicode.com/albums")
.then((res)=> res.json())
.then((json)=>{
    allAlbums=json;
    getAlbums();
    
})
.catch((error)=>{
    console.log(error);
    
})
