import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const upcomingMovies = useSelector(store => store.movies.upcomingMovies);

  const getUpcomingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addUpcomingMovies(json.results));
    } catch (error) {
      console.error("Error fetching upcoming movies:", error);
    } finally {
      setLoading(false); // Set loading to false after fetch completes (whether success or error)
    }
  };

  useEffect(() => {

    //memoization - is a technique to restrict the again and again making a api call to server while changing the page or something
    !upcomingMovies && getUpcomingMovies();
  }, [dispatch]);

  return loading; // Return the loading state
};

export default useUpcomingMovies;
