import React from 'react';
import './App.css';
import {Button} from "./components/Button";

function App() {
    return (
        <>
            {/*<button>MyYoutubeChannel-1</button>*/}
            {/*<button>MyYoutubeChannel-2</button>*/}
            <Button name={'MyYoutubeChannel-1'}/>
            <Button name={'MyYoutubeChannel-2'}/>
        </>
    )
}

export default App;
