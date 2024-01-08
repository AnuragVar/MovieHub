import { useState, useEffect } from "react";
const KEY = "b9b4d926";
export default function useMovies(query) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(
    function () {
      async function fetchMovie() {
        try {
          setIsLoading(true);
          setIsError("");
          const res = await fetch(
            `http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${query}`
          );
          if (!res.ok) throw new Error("Something wrong happens");

          const data = await res.json();
          if (data.Response === "False" && data.Error === "Movie not found!") {
            throw new Error("Movie Not Found");
          }
          setMovies(data.Search);
          setIsLoading(0);
        } catch (err) {
          console.log(err.message);
          setIsError(err.message);
        } finally {
          setIsLoading(0);
        }
      }
      if (query.length < 3) {
        setIsError("");
        setMovies([]);
        return;
      }
      fetchMovie();
      // console.log(data);
    },
    [query]
  );
  return { isLoading, isError, movies };
}

//step 1 make a different file for your hook , with the name starting from use

//step 2 pull all the hooks that are needed in it inside the function

//step 3 if you need any prop in your hook, you can take it as an argument

//step 4 for useStates,useEffects in the main function, return them from the custom hook
