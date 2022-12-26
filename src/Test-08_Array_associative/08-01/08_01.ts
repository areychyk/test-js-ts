
type UsersType={
    [key:string]:{id:number, name:string}
}

 const users:UsersType = {
    '101': {id: 101, name: "Denis"},
    '323232': {id: 323232, name: "Valera"},
    '1212': {id: 1212, name: "Katya"},
    '1': {id: 1, name: "Andrey"},
}

// id:1
//user[1]

//добавить нового пользователя

// let user ={id:100500, name:"Igor"}
// users[user.id]=user

//delete
// delete users[user.id]

export const usersArray = [
    {id: 101, name: "Denis"},
    {id: 323232, name: "Valera"},
    {id: 1212, name: "Katya"},
    {id: 1, name: "Andrey"},
]
// id:1
// usersArray.find(u=>u.id===1)

//delete

// через filter
// usersArray=usersArray.filter(u=>u.id !== user.id)