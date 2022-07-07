import {GovernmentBuildingType, HouseType} from "./05.test";

export const getStreetsTitlesOfGovernmentBuildings = (buildings: Array<GovernmentBuildingType>) => {
    return buildings.map(el => el.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) => {
    return houses.map(el => el.address.street.title)
}

export const createMessages = (houses: Array<HouseType>) => {
    let callbackfn = (el: HouseType) => `Hello from ${el.address.street.title}`;
    return houses.map(callbackfn)
}