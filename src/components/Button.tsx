import React from "react";

type ButtonType = {
    name: string
    callBack: () => void
}

export const Button: React.FC<ButtonType> = (props) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}