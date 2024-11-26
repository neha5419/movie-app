import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h3 className="text-xl font-semibold mt-2">{movie.title}</h3>
      <p className="text-sm text-gray-400">{movie.year}</p>
      <Link
        to={`/details/${movie.id}`}
        className="mt-2 inline-block text-blue-400 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
};

export default MovieCard;
