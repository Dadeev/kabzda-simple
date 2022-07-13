import React, {useState} from 'react';
import './App.css';
// import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
// import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import {UnControlledOnOff} from "./components/UnControlledOnOff/UnControlledOnOff";


function App() {
    console.log('App rendering')
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    const [style, setStyle] = useState(false)


    return (
        <div className="App">
            {/*<OnOff style={style} setStyle={setStyle}/>*/}
            <Accordion accordionCollapsed={accordionCollapsed}
                       onClick={() => setAccordionCollapsed(!accordionCollapsed)} titleValue={'Menu'}/>
            <UncontrolledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledAccordion titleValue={'Users'}/>
            <UncontrolledRating/>
            <UnControlledOnOff setStyle={setStyle}/>{style.toString()}
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
