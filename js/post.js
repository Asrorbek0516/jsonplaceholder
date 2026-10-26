

const postEl = document.querySelector(".posts")
const readMorebtnEl = document.querySelector(".read-more")


let allPosts = []
let postCount = 0
const limit = 10
function updatePosts() {
    const postsToShow = allPosts.slice(postCount, postCount + limit);

    postsToShow.forEach((post) => {
       postEl.innerHTML += `
            <div class="post-card">
                <span class="post-number">POST #${post.id}</span>

                <p class="user-id">User ID: ${post.userId}</p>

                <h2>${post.title}</h2>

                <p class="post-body">${post.body}</p>
            </div>
       ` 
    });

    postCount += postsToShow.length;
    if (postCount >= allPosts.length) {
    readMorebtnEl.style.display = "none";
    }
}

readMorebtnEl.addEventListener("click", () => {
    updatePosts();
});

fetch("https://jsonplaceholder.typicode.com/posts")
.then((res)=> res.json())
.then((json)=>{
    allPosts=json;
    updatePosts();
    
})
.catch((error)=>{
    console.log(error);
    
})
