//
// import axios from "axios";
//
// export const findUserInDB = (n: number) => {
//
//     return Promise.resolve(axios.get('https://google.com'))
//
// }
//
//
//
// findUserInDB(1)
//     .then(user => user.name)
//     .then(name => console.log(name))
//


//
// .then(res => res.data)
// .then(data =>console.log(data))


// const makeGoogleRequest=()=>{
//
//     return axios.get('https://google.com')
//         .then(res => res.data)
// }
//
// makeGoogleRequest().then(data=>console.log(data))


///callback hall
// const lastPromise=findUserInDB(1)
// .then (user=>{
//     console.log(user) //{id:1, name:'1', friend:'3'}
//     findUserInDB(user.friend)
//         .then (user=>{
//             console.log(user)//{id:2, name:'2', friend:'2'}
//             findUserInDB(user.friend)
//                 .then (user=>{
//                     console.log(user)//{id:3, name:'3', friend:null}
//                     findUserInDB(user.friend)
//                 })
//         })
// })


// const lastPromise = findUserInDB(1)
//     .then(user => {
//         console.log(user) //{id:1, name:'1', friend:'3'}
//         return user
//     })
//     .then(user => findUserInDB(user.friend))
//     .then(friend1 => {
//         console.log(friend1)//{id:2, name:'2', friend:'2'}
//         return friend1
//     })
//     .then(friend1 => findUserInDB(friend1.friend))
//
//     .then(friend2 => {
//         console.log(friend2)//{id:3, name:'3', friend:null}
//     })