import React, {useState, KeyboardEvent, useEffect} from 'react';
import s from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {
    const [active, setActive] = useState(false)
    const [hoveredElemValue, setHoveredElemValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredELem = props.items.find(i => i.value === hoveredElemValue)
    const toggleItems = () => {
        setActive(!active)
    }
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }
    const onMouseHandler = (value: any) => {
        setHoveredElemValue(value)
    }
    useEffect(() => {
        setHoveredElemValue(props.value)
    }, [props.value])

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElemValue) {
                    const pretendentElem = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElem) {
                        props.onChange(pretendentElem.value)
                        return;
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }
    return (
        <>
            <div className={s.select + ' '} onKeyUp={onKeyUp} tabIndex={0}>

                <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {active && <div className={s.items}>
                    {props.items.map(i => <div className={s.item + ' ' + (hoveredELem === i ? s.selected : '')}
                                               onMouseEnter={() => onMouseHandler(i.value)}
                                               key={i.value}
                                               onClick={() => onItemClick(i.value)}>
                        {i.title}</div>)}
                </div>}
            </div>
        </>
    );
};
