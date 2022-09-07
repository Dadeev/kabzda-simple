import React, {useState} from 'react';
import './App.css';
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import {UnControlledOnOff} from "./components/UnControlledOnOff/UnControlledOnOff";
import {action} from "@storybook/addon-actions";
import {Select} from "./components/Select/Select";
import {Example1} from "./ReactMemo";
import {DifficultCountingExample, LikeUseCallback} from "./UseMemoUseCallback";
import {ExampleCLock} from "./Clock/Clock";


function App() {
    console.log('App rendering')
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    const [value, setValue] = useState('1')
    const [style, setStyle] = useState(false)
    const onClick2CallBack = () => action('some item was clicked')


    return (
        <div className="App">
            {/*<OnOff style={style} setStyle={setStyle}/>*/}
            <Accordion accordionCollapsed={accordionCollapsed}
                       onClick={() => setAccordionCollapsed(!accordionCollapsed)} onClick2={onClick2CallBack}
                       titleValue={'Menu'}
                       items={[
                           {title: 'Dima', value: 1},
                           {title: 'Valera', value: 2},
                           {title: 'Vika', value: 3},
                           {title: 'Masha', value: 4}
                       ]}/>
            <UncontrolledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledAccordion titleValue={'Users'}/>
            <UncontrolledRating/>
            <UnControlledOnOff setStyle={setStyle}/>{style.toString()}
            <Select onChange={setValue} value={value} items={[
                {value: '1', title: 'Minsk'},
                {value: '2', title: 'Moscow'},
                {value: '3', title: 'Kiev'}
            ]}/>
            <Example1/>
            <DifficultCountingExample/>
            <LikeUseCallback/>
            |----Here is a clock---|
            <ExampleCLock mode={'analog'}/>
            <ExampleCLock mode={'digital'}/>
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
