import React from "react";

type ButtonType = {
    name: string;
}

export const Button: React.FC<ButtonType> = (props) => {
    return (
        <button>{props.name}</button>
    )
}