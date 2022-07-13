import React, {useState} from 'react';
import './App.css';
// import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
// import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";


function App() {
    console.log('App rendering')
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)

    return (
        <div className="App">
            <Accordion accordionCollapsed={accordionCollapsed} onClick={()=>setAccordionCollapsed(!accordionCollapsed)} titleValue={'Menu'}/>

            <UncontrolledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
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
