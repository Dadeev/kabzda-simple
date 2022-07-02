import {GovernmentBuildingType, HouseType} from "./05.test";

export const getStreetsTitlesOfGovernmentBuildings = (buildings: Array<GovernmentBuildingType>) => {
    return buildings.map(el => el.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) => {
    return houses.map(el => el.address.street.title)
}

export const createMessages = (houses: Array<HouseType>) => {
    return houses.map(el => `Hello from ${el.address.street.title}`)
}