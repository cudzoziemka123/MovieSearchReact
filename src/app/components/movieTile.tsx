
export default function MovieTile({ movie, callback: callback}: { movie: Movie, callback: (id: string) => void}) {
    function openDetails(event: any) {
        callback(movie.id);

    }

    return (<>
        <div style={{
            display: 'flex',
            flexFlow: 'row wrap',
            margin: "3%",
            padding: "2%",
            width: "280px",
            height: "500px",
            border: "1px solid gray",
            backgroundColor: "#0001",
            borderRadius: "10px"
        }} onClick={openDetails}>
            {movie.poster_path ?
                (
                    <img src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + movie.poster_path} style={{ height: "400px" }} />
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" style={{ padding: "2%", alignSelf: "center" }} height="200px" width="100%" viewBox="0 0 512 512"><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z" /></svg>
                )}
            <div style={{
                alignSelf: "flex-end",
                width: "100%",

            }}>
                <div style={{
                    margin: "2%",
                    fontWeight: "450",

                }}>
                    {movie.title}
                </div>
                <div style={{
                    margin: "2%",
                    fontWeight: "300",

                }}>
                    {movie.release_date ?
                        (
                            <>{ movie.release_date.slice(0, 4) }</>
                        ) :
                        (
                            "Unknown year"
                        )
                    }

                </div>
            </div>
        </div>
    </>
    )
}
