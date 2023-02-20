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

//
// import {findUserInDB} from "./chaning";
//
// async function run(){
//     const user= await findUserInDB(1)
//     console.log(user)
//     let friend1 = await findUserInDB(user.friend);
//     console.log(friend1)
//     let friend2 = await findUserInDB(friend1.friend);
//     console.log(friend2)
// }
//
// run();