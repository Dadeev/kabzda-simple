import React from 'react';

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    accordionCollapsed: boolean
    onClick: () => void
    items: ItemType[]
    onClick2: (value: any) => void
}

function Accordion(props: AccordionPropsType) {
    console.log('UncontrolledAccordion rendering')
    return <div>
        <AccordionTitle title={props.titleValue} onClick={props.onClick} accordionCollapsed={props.accordionCollapsed}/>
        {!props.accordionCollapsed && <AccordionBody items={props.items} onClick={props.onClick2}/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
    accordionCollapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={(e) => props.onClick()}>--- {props.title} --- </h3>
    )
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering')
    return (<ul>
            {props.items.map((i, index) => <li onClick={() => props.onClick(i.value)} key={index}>{i.title}</li>)}
        </ul>
    )
}


export default Accordion;