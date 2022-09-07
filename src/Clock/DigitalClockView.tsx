import React from "react";
import {ClockViewType} from "./Clock";

export const getTwoDigitsString = (date: number) => {
    return date < 10 ? '0' + date : date
}

export const DigitalClockView: React.FC<ClockViewType> = ({date}) => {
    return <>
        <span>{getTwoDigitsString(date.getHours())}</span>:
        <span>{getTwoDigitsString(date.getMinutes())}</span>:
        <span>{getTwoDigitsString(date.getSeconds())}</span>
    </>
}