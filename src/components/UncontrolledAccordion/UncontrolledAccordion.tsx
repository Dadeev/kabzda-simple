import React, {useReducer} from 'react';
import {reducer} from "./reducer";

type AccordionPropsType = {
    titleValue: string,
}

export function UncontrolledAccordionForMemo(props: AccordionPropsType) {
    console.log('UncontrolledAccordion rendering')
    const [state, dispatch] = useReducer(reducer, {collapsed: false})

    return <div>
        <AccordionTitle title={props.titleValue} onClick={() => dispatch({type: 'TOGGLE-COLLAPSED'})}/>
        {!state.collapsed && <AccordionBody/>}
    </div>
}

export const UncontrolledAccordion = React.memo(UncontrolledAccordionForMemo)

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitleForMemo(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={props.onClick}>--- {props.title} --- </h3>
    )
}

export const AccordionTitle = React.memo(AccordionTitleForMemo)

function AccordionBodyForMemo() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export const AccordionBody = React.memo(AccordionBodyForMemo)