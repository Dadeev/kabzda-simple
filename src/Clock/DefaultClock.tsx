import React, {useEffect, useState} from 'react';

const getTwoDigitsString = (date: number) => {
    return date < 10 ? '0' + date : date
}

export const DefaultClock = () => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        console.log('tick')
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])
    return (
        <div>
            <span>{getTwoDigitsString(date.getHours())}</span>:
            <span>{getTwoDigitsString(date.getMinutes())}</span>:
            <span>{getTwoDigitsString(date.getSeconds())}</span>
        </div>
    );
};