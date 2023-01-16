import {
    addCompanies,
    addNewBooksUser,
    makeHairStyle,
    moveUser, removeBooksUser, updateBooksUser, updateCompanies,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./10_01";





test('reference type text', ()=>{
    let user:UserType={
        name:"Denis",
        hair:25,
        address:{city:'Minsk',
            house:12}
    }
    const awesomeUser=makeHairStyle(user,2)


    expect(user.hair).toBe(25)
    expect(awesomeUser.hair).toBe(12.5)
    expect(awesomeUser.address).toBe(user.address)
})

test('change address', ()=>{
    let user:UserWithLaptopType={
        name:"Denis",
        hair:25,
        address:{
            city:'Minsk',
            house:12
        },
        laptop:{title:'ZenBook'}
    }
    const movedUser=moveUser(user, 'Kiev')


    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(movedUser.address.city).toBe('Kiev')
    expect(user.laptop).toBe(movedUser.laptop)


})

test('upgrade user laptop to macbook', ()=>{
    let user:UserWithLaptopType={
        name:"Denis",
        hair:25,
        address:{
            city:'Minsk',
            house:12
        },
        laptop:{title:'ZenBook'}
    }
    const movedUserLaptop=upgradeUserLaptop(user, 'Macbook')


    expect(user).not.toBe(movedUserLaptop)
    expect(user.laptop).not.toBe(movedUserLaptop.laptop)
    expect(movedUserLaptop.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('ZenBook')
    expect(user.address).toBe(movedUserLaptop.address)



})

test('upgrade user books, add new books', ()=>{
    let user:UserWithLaptopType & UserWithBooksType={
        name:"Denis",
        hair:25,
        address:{
            city:'Minsk',
            house:12
        },
        laptop:{title:'ZenBook'},
        books:['css','html','js','react']
    }
    const userCopy=addNewBooksUser(user, 'ts' )


    expect(user).not.toBe(userCopy)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('ts')
    expect(userCopy.books.length).toBe(5)




})

test('upgrade user books, js to ts', ()=>{
    let user:UserWithLaptopType & UserWithBooksType={
        name:"Denis",
        hair:25,
        address:{
            city:'Minsk',
            house:12
        },
        laptop:{title:'ZenBook'},
        books:['css','html','js','react']
    }
    const userCopy=updateBooksUser(user, 'js','ts' )


    expect(user).not.toBe(userCopy)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('ts')
    expect(userCopy.books.length).toBe(4)




})

test('remove js book', ()=>{
    let user:UserWithLaptopType & UserWithBooksType={
        name:"Denis",
        hair:25,
        address:{
            city:'Minsk',
            house:12
        },
        laptop:{title:'ZenBook'},
        books:['css','html','js','react']
    }
    const userCopy=removeBooksUser(user, 'js')


    expect(user).not.toBe(userCopy)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).not.toBe('ts')
    expect(userCopy.books.length).toBe(3)




})

test('add companies', ()=>{
    let user:UserWithLaptopType & WithCompaniesType={
        name:"Denis",
        hair:25,
        address:{
            city:'Minsk',
            house:12
        },
        laptop:{title:'ZenBook'},
        companies:[
            {id:1,title:"Epam"},
            {id:1,title:"incubator"},
        ]

    }
    const userCopy=addCompanies(user, {id:3, title:'IT-Work'})




    expect(userCopy.companies.length).toBe(3)
    expect(userCopy.companies[2].title).toBe('IT-Work')
    expect(user.companies).not.toBe(userCopy.companies)




})

test('update companies', ()=>{
    let user:UserWithLaptopType & WithCompaniesType={
        name:"Denis",
        hair:25,
        address:{
            city:'Minsk',
            house:12
        },
        laptop:{title:'ZenBook'},
        companies:[
            {id:1,title:"Epam"},
            {id:1,title:"incubator"},
        ]

    }
    const userCopy=updateCompanies(user, 1,'google')




    expect(userCopy.companies.length).toBe(2)
    expect(userCopy.companies[0].title).toBe('google')
    expect(user.companies).not.toBe(userCopy.companies)




})