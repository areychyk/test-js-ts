// function icreaseAge(u: UserType) {
//     u.age++
// }

type UserType = {
    name: string
    age: number
}

test('reference type test', () => {
    let user: UserType = {
        name: 'Denis',
        age: 25
    }

    // icreaseAge(user)

    expect(user.age).toBe(26)

    const newUser = user
    newUser.age = 1000
    expect(user.age).toBe(1000)
    // icreaseAge(user)
    expect(user.age).toBe(1001)

})

test('array reference test', () => {
    let users = [
        {
            name: 'Denis',
            age: 25
        },
        {
            name: 'Denis',
            age: 25
        },
    ]

    let admins = users

    admins.push({
        name: 'Array',
        age: 5
    })


    expect(users[2]).toEqual({
        name: 'Array',
        age: 5
    })

})


test('value type test', () => {
    let userCount = 100;
    let adminsCount = userCount




})


test('sort array test', () => {
    let letters = ['c','z','d']
    letters.sort()


    expect(letters).toEqual(['c','d','z'])


})