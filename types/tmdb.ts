type Movie = {
    adult: boolean;
    id: number;
    poster_path: string;
    release_date: string;
    title: string;
}

type MovieResults = {
    results: Movie[];
}