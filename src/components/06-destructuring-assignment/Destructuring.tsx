import React, {useState} from 'react'

type LessonType = {
    title: string
}

type ManType = {
    name: string
    age: number
    lessons: LessonType[]
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: ManType
    food: String[]
    car: { model: string }
}

const useDimichState = (m: string) => {
    return [m, function () {
    }]
}
const useDimichState2 = (m: string) => {
    return {
        message: m, setMessage: function () {
        }
    }
}

export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {
    // const {title, man, ...resProps} = props
    const [message, setMessage] = useState('hello')
    return (
        <>
            <h1>{title}</h1>
            <hr/>
            <div>
                {props.car}
            </div>
        </>
    )
}