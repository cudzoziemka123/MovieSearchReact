 

export default function Details() {
    async function callDetailsAPI (id: string) {
        const options = {
            method: 'GET', headers: {
                accept: 'application/json',
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTk0ODU3NWQ0YjlkZjkzNjM5NTNlZTUxYzdmY2MxNiIsInN1YiI6IjY0NzlkZmEyY2FlZjJkMDBhYTQxZTkwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qQicdNoHuKvkwzNftmM7Chp7fxtdamofQYozrqx3Y-s"
            }
        };

        const findDetails = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }



    return(
        <>"hello"</>
    )
}