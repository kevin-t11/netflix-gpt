import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); 

  
  const topRatedMovies = useSelector(store => store.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addTopRatedMovies(json.results));
    } catch (error) {
      console.error("Error fetching top rated movies:", error);
    } finally {
      setLoading(false); // Set loading to false after fetch completes (whether success or error)
    }
  };

  useEffect(() => {
    
    //memoization - is a technique to restrict the again and again making a api call to server while changing the page or something
    !topRatedMovies && getTopRatedMovies();
  }, [dispatch]); // Include dispatch in dependency array since it's used in the effect

  return loading; // Return the loading state
};

export default useTopRatedMovies;
