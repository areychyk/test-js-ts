export type GovernmentBuildingType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressType
}

export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingType>
    citizensNumber: number

}

export type HouseType = {
    id?:number
    buildedAt: number
    repaired: boolean
    address: AddressType

}

export type AddressType = {
    number?: number
    street: StreetType

}

export type StreetType = {
    title: string

}


export const getStreetsTitlesOfGovernmentBuildings = (government: Array<GovernmentBuildingType>)=>{
    return  government.map(s=>s.address.street.title)

}

export const getStreetsTitlesOfHouses = (houses: Array<HouseType>)=>{
    return  houses.map(s=>s.address.street.title)

}