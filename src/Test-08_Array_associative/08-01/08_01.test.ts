
type UsersType={
    [key:string]:{id:number, name:string}
}

let users:UsersType

beforeEach(()=>{
    users = {
        '101': {id: 101, name: "Denis"},
        '323232': {id: 323232, name: "Valera"},
        '1212': {id: 1212, name: "Katya"},
        '1': {id: 1, name: "Andrey"},
    }

})



test("should update corresponding user ",()=>{
    users["1212"].name="Ekaterina"

    expect(users["1212"]).toEqual({id: 1212, name: "Ekaterina"})



})

test("should delete corresponding user ",()=>{
   delete users["1212"]

    expect(users["1212"]).toBeUndefined()



})