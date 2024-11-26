import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Oval } from 'react-loader-spinner'; // Import the spinner

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch("/movies.json")
      .then((res) => res.json())
      .then((data) => {
        const foundMovie = data.movies.find((item) => item.id === parseInt(id));
        setMovie(foundMovie);
      });
  }, [id]);

  if (!movie) return (
    <div className="flex justify-center items-center min-h-screen">
      <Oval 
        height={80} 
        width={80} 
        color="#00BFFF" 
        secondaryColor="#00BFFF" 
        ariaLabel="loading" 
      />
    </div>
  ); // Spinner while loading

  return (
    <div className="p-4 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white mb-4">{movie.title}</h1>
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full max-w-4xl h-auto rounded-lg shadow-lg mb-6"
      />
      <p className="text-lg text-gray-300 leading-relaxed text-center max-w-2xl">
        {movie.details}
      </p>
    </div>
  );
};

export default Details;
