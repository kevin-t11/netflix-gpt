import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

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
      // console.log(trailer);

      dispatch(addTrailerVideo(trailer));
    } catch (error) {
      console.error("Error fetching movie trailer:", error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    getMovieVideos();
  }, [movieId]);

  return loading;
};

export default useMovieTrailer;
