import React from 'react';
import './App.css';
import {Button} from "./components/Button";

function App() {
    const Button1Foo = (sub: string, age: number, address: string) => {
        console.log(sub, age, address)
    }
    const Button2Foo = (sub: string) => {
        console.log(sub)
    }
    const onClickHandler = () => {
        console.log('I am stupid button')
    }
    return (
        <>
            {/*<button>MyYoutubeChannel-1</button>*/}
            {/*<button>MyYoutubeChannel-2</button>*/}
            <Button name={'MyYoutubeChannel-1'} callBack={() => Button1Foo('I am Vasya', 16, 'live in Russia')}/>
            <Button name={'MyYoutubeChannel-2'} callBack={() => Button2Foo('I am Ivan')}/>
            <Button name={'stupid'} callBack={onClickHandler}/>
        </>
    )
}

export default App;
