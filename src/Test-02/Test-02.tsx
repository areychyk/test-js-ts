
type AddressType={
    streetTitle:string
    city:LocalCitiType
}
type LocalCitiType ={
    title:string
    countryTitle:string
}
type TechnologiesType={
    id:number
    title:string
}
export type StudentType={
    name:string
    age:number
    isActive:boolean
    address:AddressType
    technologies:Array<TechnologiesType>
}



export const student:StudentType = {
    name: "Denis",
    age: 25,
    isActive: false,
    address: {
        streetTitle: "Kazintza",
        city: {
            title: "Minsk",
            countryTitle: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        }
    ]
}
//
// export type GovernmentBuildingType={
//     type: "HOSPITAL" |"FIRE-STATION"
//     budget:number
//     staffCount:number
//     address:AddressType
// }
//
// export type CityType={
//     title:string
//     houses:Array<HouseType>
//     governmentBuildings:Array<GovernmentBuildingType>
//     citizensNumber:number
//
// }
//
// export type HouseType={
//     buildedAt:number
//     repaired:boolean
//     address:AddressType
//
//
// }
//
//
// export type AddressType={
//     number?:number
//     street:StreetType
//
// }
//
// export type StreetType={
//     title:string
//
// }