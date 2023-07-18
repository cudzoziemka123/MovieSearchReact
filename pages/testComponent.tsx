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
    let myChoices = [10, 15, 20, 25, 30];
    const [myHTMLCode, setMyHTMLCode] = useState(<></>);
    if (result == true) {
        useEffect(() => {
            setMyState(8);
            let b = [1, 2, 3, 4, 5];
            b.forEach((el) => {
                console.log(el)
            });
            setMyHTMLCode(
                <>
                    Make your choice: <br />
                    {myChoices.map((choice) => {
                        return (
                            <i> {choice} <br /></i>
                        )
                    })}
                </>
            )
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
            <br /> <br />
            {myHTMLCode}
        </>
    );
}

export default TestComponent;