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


export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
    building.budget += budget

}


