import React from 'react';
import {DefaultClock} from "./DefaultClock";
import {CoolClock} from "./CoolClock";

type MainClockType = {
    value: boolean
}

export const MainClock: React.FC<MainClockType> = (props) => {
    return (
        <div>
            {props.value ? <CoolClock/> : <DefaultClock/>}
        </div>
    );
};