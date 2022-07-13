import React, {useState} from 'react';

type onOffType = {
    setStyle: (style: boolean) => void
}

export const UnControlledOnOff: React.FC<onOffType> = ({setStyle}) => {
    const on = false;

    const [On, setOn] = useState(true)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: On ? 'green' : 'white'

    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        marginLeft: '2px',
        backgroundColor: On ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        borderRadius: '50%',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: On ? 'green' : 'red'

    }

    const onCLicked = () => {
        setOn(true);
        setStyle(true)
    }
    const offClicked = () => {
        setOn(false);
        setStyle(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onCLicked}>on</div>
            <div style={offStyle} onClick={offClicked}>off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}