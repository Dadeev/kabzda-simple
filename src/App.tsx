import React from 'react';
import './App.css';
// import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
// import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";



function App() {
    console.log('App rendering')
    return (
        <div className="App">
            {/*<UncontrolledAccordion titleValue={'Menu'} collapsed={true}/>*/}
            {/*<UncontrolledAccordion titleValue={'Users'} collapsed={false}/>*/}
            {/*<UncontrolledRating value={0}/>*/}
            {/*<UncontrolledRating value={1}/>*/}
            {/*<UncontrolledRating value={2}/>*/}
            {/*<UncontrolledRating value={3}/>*/}
            {/*<UncontrolledRating value={4}/>*/}
            {/*<UncontrolledRating value={5}/>*/}
            <OnOff/>
            <OnOff/>
            <OnOff/>
            <OnOff/>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledAccordion titleValue={'Users'}/>
            <UncontrolledRating/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string;
}

function PageTitle(props: PageTitlePropsType) {
    console.log('AppTitle rendering')
    return <h1>{props.title}</h1>
}

export default App;
