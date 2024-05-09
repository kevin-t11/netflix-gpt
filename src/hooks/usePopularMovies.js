import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);


  const popularMovies = useSelector(store => store.movies.popularMovies);

  const getPopularMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addPopularMovies(json.results));
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    } finally {
      setLoading(false); // Set loading to false after fetch completes (whether success or error)
    }
  };

  useEffect(() => {
    //memoization - is a technique to restrict the again and again making a api call to server while changing the page or something
    !popularMovies && getPopularMovies();
  }, [dispatch]);

  return loading; // Return the loading state
};

export default usePopularMovies;
