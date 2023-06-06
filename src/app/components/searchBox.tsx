
export default function SearchBox({ queryText, changeQueryText, callAPI }: { queryText: string, changeQueryText: (event: any) => void, callAPI: () => void }) {
    return (
        <>

            <center>
                <div style={{ margin: "5%" }}>
                    <form onSubmit={(e)=>{e.preventDefault(); callAPI()}}>
                        <input type="text"
                            id="searchInput"
                            placeholder="Search Movies, Shows..."
                            name="searchInput"
                            defaultValue={queryText}
                            onChange={changeQueryText}
                            style={{
                                height: "5px",
                                width: "40%",
                                margin: "2% 0",
                                padding: "1.5%",
                                border: "1px solid",
                                borderBottomLeftRadius: "5px",
                                borderTopLeftRadius: "5px"

                            }}
                        ></input>
                        <button type="button" onClick={callAPI}
                            style={{
                                backgroundColor: "black",
                                color: "white",
                                width: "10%",
                                margin: "2% 0",
                                padding: "0.6%",
                                borderBottomRightRadius: "5px",
                                borderTopRightRadius: "5px"
                            }} >Search</button>
                    </form>
                </div>
            </center>

        </>
    )

}