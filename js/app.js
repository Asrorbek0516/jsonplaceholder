// function myPromise() {
//     return new Promise((resolve,reject) => {
//         let internet = '';

//         setTimeout(() => {
//             if (internet){
//                 resolve("Malumotlar olindi")
//             }else{
//                 reject("Internet aloqasi yoq")
//             }
//         },2000);
//     });
// }

// myPromise().then((data)=>{
//     console.log(data);
    
// }).catch((error)=>{
//     console.log(error);
    
// })

const userEl = document.querySelector('.users')

function updateUi(arr) {
    arr.forEach((user) => {
        userEl.innerHTML += `
            <div class="user-card">
                <h2>${user.name}</h2>
                <p>@${user.username}</p>
                <p>📧 ${user.email}</p>
                <p>📞 ${user.phone}</p>
                <p>📍 ${user.address.city}</p>
                <p>🌐 ${user.website}</p>
                <p>🏢 ${user.company.name}</p>
            </div>
        `;
    });
}



fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=> res.json())
.then((json)=>{
   updateUi(json);
    
}).catch((error)=>{
    console.log(error);
    
})
