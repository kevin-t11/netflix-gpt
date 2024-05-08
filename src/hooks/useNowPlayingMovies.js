import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); 

  
  const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);

  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    } finally {
      setLoading(false); // Set loading to false after fetch completes (whether success or error)
    }
  };

  useEffect(() => {
    
    //memoization - is a technique to restrict the again and again making a api call to server while changing the page or something
    !nowPlayingMovies && getNowPlayingMovies();
  }, [dispatch]); // Include dispatch in dependency array since it's used in the effect

  return loading; // Return the loading state
};

export default useNowPlayingMovies;
