import React, {useState} from 'react'

const NewMessagesCounter = (props: { count: number }) => {
    return (
        <div>{props.count}</div>
    )
}

const UsersSecret = (props: { users: string[] }) => {
    console.log('users')
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem'])
    const OnClickHandler = () => {
        setCounter(counter + 1)
    }
    const addUser = () => {
        let newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }
    return <>
        <button onClick={OnClickHandler}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}