/* export const urlBase =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-US&page=1&sort_by=popularity.desc"; */

  export const urlBase = 'https://api.themoviedb.org/3/find/avenger?external_source=imdb_id'


export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzQwMDM1YmUwMWM5YTY4NzFkNTAxNDUyYjZjOWJiNSIsInN1YiI6IjY1MWFmNmFiOTY3Y2M3MzQyNWYxMWE5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ESE4Yuk1ySvj5B00PArlK8sLLqJpei8f9sr2osyoKTM",
  },
};

export const genres = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ]

export const imageBase = "https://image.tmdb.org/t/p/w500";

export const apiKey = import.meta.env.VITE_API_KEY