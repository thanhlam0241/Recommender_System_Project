import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  import.meta.env.VITE_APP_TMDB_TOKEN ||
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTIwMTgzNWQ0ZmNhMTdmYjBjYjBiY2Q5MzcyYTcyMiIsInN1YiI6IjY1ZTg5NWE4MmIxYjQ0MDE2NDY5MGM5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BsQFUTIg7jVfuZAuS5SDRt5ufkgHQOVdtSztZ6yNeXo";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: { Authorization: "bearer " + TMDB_TOKEN },
});

export default instance;
