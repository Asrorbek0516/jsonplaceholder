
const commEl = document.querySelector(".comments")
const readMorebtnEl = document.querySelector(".read-more")

let allComments=[]
let comentCount=0
const limit=10



function getComment (){
    const commentsToShow = allComments.slice(comentCount, comentCount + limit);
   commentsToShow.forEach((comm) => {
    
    commEl.innerHTML += `
        <div class="comment-card">
                <span class="comment-number">COMMENT #${comm.id}</span>

                <p class="post-id">Post ID: ${comm.postId}</p>

                <p class="comment-id">ID: ${comm.id}</p>

                <h2 class="comment-name">${comm.name}</h2>

                <p class="comment-email">Email: ${comm.email}</p>

                <p class="comment-body">${comm.body}</p>
        </div>

    `
   });

    comentCount += commentsToShow.length;
    if (comentCount >= allComments.length) {
    readMorebtnEl.style.display = "none";
    }
}

readMorebtnEl.addEventListener("click", () => {
    getComment();
});



fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((json) => {
        allComments = json;
        getComment();
        
    }).catch((error) => {
        console.log(error);
        
    })