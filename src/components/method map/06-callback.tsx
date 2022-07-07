import React, {ChangeEvent, MouseEvent} from 'react';

// const callback = (): number => {
//     alert('hey')
//     return 12
// }
// window.setTimeout(callback, 1000)

export const User = () => {

    const search = (e: MouseEvent<HTMLButtonElement>) => {
        alert('user deleted')
    }
    const saveUser = () => {
        alert('user saved')
    }

    const onNameChanged = () => {
        console.log('name changed')
    }

    const focusLostHandler = () => {
        console.log('focus lost')
    }

    const onAgeChanged = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('age changed' + e.currentTarget.value)
    }
    return (
        <div>
            <textarea onChange={onNameChanged} onBlur={focusLostHandler}>Dimych</textarea>
            <input onChange={onAgeChanged} type={'number'}/>
            <button name="delete" onClick={search}>search</button>
        </div>
    )
}