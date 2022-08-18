import React, {useCallback, useMemo, useState} from 'react';

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1;
    let resultB = 1;


    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA *= i;
        }
        return tempResultA
    }, [a])
    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }

    return (
        <div>
            <input value={a} onChange={(e) => {
                setA(+e.currentTarget.value)
            }}/>
            <input value={b} onChange={(e) => {
                setB(Number(e.currentTarget.value))
            }}/>
            <hr/>
            <div>Result for a:{resultA}</div>
            <div>Result for b:{resultB}</div>
        </div>
    );
};


const UsersSecret = (props: { users: string[] }) => {
    console.log('users secret')
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
}
const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem'])
    const OnClickHandler = () => {
        setCounter(counter + 1)
    }
    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        let newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={OnClickHandler}>+</button>
        <button onClick={addUser}>+</button>
        {counter}
        <Users users={newArray}/>
    </>
}

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'Js', 'CSS', 'HTML'])
    const OnClickHandler = () => {
        setCounter(counter + 1)
    }

    const memoizedAddBook = useMemo(() => {
        return () => {
            console.log(books)
            let newUsers = [...books, 'Angular' + new Date().getTime()]
            setBooks(newUsers)
        }
    }, [books])

    const memoizedAddBook2 = useCallback(() => {
        console.log(books)
        let newUsers = [...books, 'Angular' + new Date().getTime()]
        setBooks(newUsers)
    }, [books])


    return <>
        <button onClick={OnClickHandler}>+</button>
        {counter}
        <Book addBook={memoizedAddBook}/>
    </>
}

type BooksSecretType = {
    addBook: () => void
}

const BooksSecret = (props: BooksSecretType) => {
    console.log('BooksSecret')
    return (
        <div>
            <button onClick={() => props.addBook()}>add book</button>
        </div>
    )
}

export const Book = React.memo(BooksSecret)