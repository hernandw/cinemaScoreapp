export const urlBase =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-US&page=1&sort_by=popularity.desc";
4;

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzQwMDM1YmUwMWM5YTY4NzFkNTAxNDUyYjZjOWJiNSIsInN1YiI6IjY1MWFmNmFiOTY3Y2M3MzQyNWYxMWE5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ESE4Yuk1ySvj5B00PArlK8sLLqJpei8f9sr2osyoKTM",
  },
};

export const imageBase = "https://image.tmdb.org/t/p/w500";