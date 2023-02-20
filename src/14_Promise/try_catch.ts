type UserType = {
    id: number
    name: string
    friend: number
}


export let findUserInDB = (id: number) => {
    let users: UserType[] = [
        {id: 1, name: 'Denis', friend: 4},
        {id: 2, name: 'Sveta', friend: 1},
        {id: 3, name: 'Valera', friend: 2},
    ]


    return new Promise<UserType>((resolve, reject) => {
        let user = users.find(u => u.id === id)
        user
            ? resolve(user)
            : reject('user not found')

    })

}


// console.log(findUserInDB(2))
// console.log(findUserInDB(1))
// console.log(findUserInDB(3))


findUserInDB(1)

    .then(user => {
        console.log(user.name)
        return user.friend
    })
    .then(friendID => findUserInDB(friendID))
    .catch(error => {
        console.log(error)
        return {id: 1, name: 'Friend Bot', friend: 3}
    })
    .then(friend1 => {
        console.log(friend1.name)
        return friend1.friend
    })
    .then(friendID => findUserInDB(friendID))
    .then(friend2 => {
        console.log(friend2.name)
    })
    .catch(error => console.log(error))


// async function run() {
//     try {
//
//         const user = await findUserInDB(1)
//         console.log(user.name)
//         let friend1
//         try {
//             friend1 = await findUserInDB(user.friend);
//
//         } catch (error) {
//             friend1 = {id: 1, name: 'Friend Bot', friend: 3}
//             console.log(error)
//         }
//         console.log(friend1.name)
//
//         let friend2 = await findUserInDB(friend1.friend);
//         console.log(friend2.name)
//     } catch (error) {
//         console.log('error')
//     }
//
// }
//
// run();