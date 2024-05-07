import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); // Introduce loading state

  const getMovieVideos = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" + movieId +
        "/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
  
      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0];
  
      dispatch(addTrailerVideo(trailer));
    } catch (error) {
      console.error("Error fetching movie trailer:", error);
    } finally {
      setLoading(false); // Set loading to false after fetch completes (whether success or error)
    }
  };

  useEffect(() => {
    getMovieVideos();
  }, [movieId]); // Include movieId in the dependency array of useEffect

  return loading; // Return loading state
};

export default useMovieTrailer;
