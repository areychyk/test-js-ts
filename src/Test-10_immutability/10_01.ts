export type UserType = {
    name: string
    hair: number
    address: { city: string, house:number }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type WithCompaniesType = UserType & {
    companies: Array<{id:number, title:string}>
}


export function makeHairStyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power,

    }
    // copy.hair= u.hair/power
    return copy

}

export function moveUser(u: UserWithLaptopType, city: string) {
   return  {...u, address:{...u.address, city:city}}

}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
    return  {...u, laptop:{...u.laptop, title:laptop}}

}

export function addNewBooksUser(u: UserWithLaptopType & UserWithBooksType, book: string) {
    return  {...u,books:[...u.books, book]}

}

export function updateBooksUser(u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook:string) {
    return  {...u,books:u.books.map(b=>b===oldBook ? newBook: b)}

}

export function removeBooksUser(u: UserWithLaptopType & UserWithBooksType, removeBook:string) {
    return  {...u,books:u.books.filter(b=>b!==removeBook)}

}

export function addCompanies(u: UserWithLaptopType & WithCompaniesType, newCompanies:{id:number, title:string} ) {
    return  {...u, companies: [...u.companies, newCompanies]}

}

export function updateCompanies(u: UserWithLaptopType & WithCompaniesType,
                                id:number,
                                title:string ) {
    return  {...u, companies: u.companies.map(c=>c.id===id? {...c, title : title} : c)}

}