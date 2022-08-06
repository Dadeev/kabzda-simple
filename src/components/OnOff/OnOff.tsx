import React, {useState} from 'react';

type onOffType = {
    //on: boolean
    style: boolean
    setStyle: (style: boolean)=> void
}

export const OnOffForMemo: React.FC<onOffType> = ({style, setStyle}) => {
    const on = false;

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: style ? 'green' : 'white'

    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        marginLeft: '2px',
        backgroundColor: style ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        borderRadius: '50%',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: style ? 'green' : 'red'

    }

    return (
        <div>
            <div style={onStyle} onClick={()=>setStyle(true)}>on</div>
            <div style={offStyle} onClick={()=>setStyle(false)}>off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export const OnOff = React.memo(OnOffForMemo)