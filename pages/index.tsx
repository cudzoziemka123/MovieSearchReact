'use client'
import React from 'react'
import SearchBox from '../src/app/components/searchBox';
import MovieTile from '../src/app/components/movieTile';

export default function Home() {
    const [likes, setLikes] = React.useState(0);
    const [queryText, setqueryText] = React.useState('');
    const [movieList, setmovieList] = React.useState([]);


    async function callAPI() {
        try {
            const findMovies = await fetch(`https://api.themoviedb.org/3/search/movie?query=${queryText}`, {
                method: "GET",
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTk0ODU3NWQ0YjlkZjkzNjM5NTNlZTUxYzdmY2MxNiIsInN1YiI6IjY0NzlkZmEyY2FlZjJkMDBhYTQxZTkwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qQicdNoHuKvkwzNftmM7Chp7fxtdamofQYozrqx3Y-s"
                }
            });
            const data = await findMovies.json();
            setmovieList(data.results);
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };
    function changeQueryText(event: any) {
        setqueryText(event.target.value);
        console.log(event.target.value);

    }


    return (
        <main>
            <div id="searchbox">
                <SearchBox queryText={queryText} changeQueryText={changeQueryText} callAPI={callAPI}></SearchBox>
            </div>
            <div id="results" style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
                alignItems: "sretch"
            }}>
                {movieList.map((movie) => {
                    return (<>
                        <div id="resultTile" style={{

                        }}>
                            <MovieTile movie={movie}></MovieTile>
                        </div>
                    </>)
                })}
            </div>
        </main>
    )
}
