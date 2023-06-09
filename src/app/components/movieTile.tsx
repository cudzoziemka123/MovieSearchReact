
export default function MovieTile({ movie }: { movie: Movie }) {

    return (<>
        <div style={{
            margin: "3%",
            padding: "2%",
            width: "280px",
            border: "1px solid gray",
            backgroundColor: "#0001",
            borderRadius: "10px"
        }}>
            <img src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + movie.poster_path} style={{ width: "fit-content" }} />
            <div style={{
                margin: "2%",
                fontWeight: "450"
            }}>
                {movie.title}
            </div>
            <div style={{
                margin: "2%",
                fontWeight: "300"
            }}>
                {movie.release_date.slice(0, 4)}
            </div>
        </div>
    </>
    )
}
