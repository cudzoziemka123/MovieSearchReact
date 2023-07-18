'use client'
import { useState, useEffect } from 'react';

const TestComponent = () => {
    const [myState, setMyState] = useState(0);
    const [mySecondState, setMySecondState] = useState(0);
    

    useEffect(() => {
        setMySecondState(mySecondState + 1)
    }, [mySecondState])

    let a = 5;
    let result = a === 5;
    if (result == true) {
        useEffect(() => {
            setMyState(8);
        }, []);
    } else {
        useEffect(() => {
            setMyState(10);
        }, []);
    }

    return (
        <>
            Hello
            <br />
            My state: {myState}
            <br /> <br />
            <a onClick={
                () => {
                    setMyState(myState + 1);
                }
            }>Click me</a>
            <br />
            {mySecondState}
        </>
    );
}

export default TestComponent;