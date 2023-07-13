'use client'
import {useState, useEffect} from 'react';

const TestComponent = () => {
    const [myState, setMyState] = useState(0);
    useEffect(()=>{
        setMyState(8);
    }, []);

    return (
        <>
        Hello 
        <br/>
        {myState}
        </>
    );
}

export default TestComponent;