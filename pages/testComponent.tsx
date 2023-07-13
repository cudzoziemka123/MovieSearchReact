'use client'
import {useState, useEffect} from 'react';

const TestComponent = () => {
    const [myState, setMyState] = useState(0);
    const [mySecondState, setMySecondState] = useState(0);
    useEffect(()=>{
        setMyState(8);
    }, []);

    useEffect(()=>{
        setMySecondState(mySecondState+1)
    }, [mySecondState])

    return (
        <>
        Hello 
        <br/>
        {myState}
        <br/>
        {mySecondState}
        </>
    );
}

export default TestComponent;