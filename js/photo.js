const photoEl = document.querySelector(".photos")
const readMorebtnEl = document.querySelector(".read-more")

let allPhotos=[]
let photoCount=0
const limit=10



function getPhotos (){
    const PhotosToShow = allPhotos.slice(photoCount, photoCount + limit);
   PhotosToShow.forEach((foto) => {

    photoEl.innerHTML += `
        <div class="photo-card">
            <p class="album-id">Album ID: ${foto.albumId}</p>

            <p class="photo-id">Photo ID: ${foto.id}</p>

            <h3 class="photo-title">${foto.title}</h3>

            <img src="${foto.thumbnailUrl}" alt="${foto.title}">

            <a href="${foto.url}" target="_blank">View Full Image</a>
        </div>
    `;

   });

    photoCount += PhotosToShow.length;
    if (photoCount >= allPhotos.length) {
    readMorebtnEl.style.display = "none";
    }
}

readMorebtnEl.addEventListener("click", () => {
    getPhotos();
});



fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((json) => {
        allPhotos = json;
        getPhotos();
        
    }).catch((error) => {
        console.log(error);
        
    })