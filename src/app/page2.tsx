'use client'
import Image from 'next/image'
import React from 'react'
import NewComponent from './newComponent';

export default function Home() {
    const [likes, setLikes] = React.useState(0);

    async function callAPI() {
        try {
            const res = await fetch('/api/newEndpoint', {method: 'POST'});
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };

    function handleClick() {
        setLikes(likes + 1);
        callAPI()
        console.log(likes);
    }
    return (
        <main>
            strona
            <br />
            test
            <br />
            <button className="btn btn-blue" onClick={handleClick}>
                Button
            </button>
            <ul>
                <li>
                    hello
                </li>
                <li>
                    from
                </li>
                <li>the</li>
                <li>otherside</li>
            </ul>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">JAKIŚ TEKST</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-4 py-2">Alisa</td>
                        <td className="border px-4 py-2">Michał</td>
                    </tr>
                    <tr>
                        <td>a</td>
                        <td>b</td>
                    </tr>
                </tbody>
            </table>
            {likes}
            <div className="grid grid-cols-4 gap-4">
                <div>01</div>

                <div>09</div>
                <div>01</div>

                <div className="box-content h-32 w-32 p-4 border-4 ...">
                    <img src="https://i.imgur.com/JaqbYTb.png"></img>

                </div>
            </div>
            <NewComponent />



        </main>
    )
}
