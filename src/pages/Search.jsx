import { useState } from "react";
import { Oval } from 'react-loader-spinner'; 

const Search = () => {
  const [query, setQuery] = useState("");  
  const [movies, setMovies] = useState([]);  
  const [loading, setLoading] = useState(false);  
  const [noResults, setNoResults] = useState(false);  

  const handleSearch = async () => {
    if (query.trim() === "") {
      setMovies([]);  
      setNoResults(false);
      return;
    }

    setLoading(true);
    setNoResults(false);
    
    try {
      const res = await fetch("/movies.json");
      const data = await res.json();
      
      const filteredMovies = data.movies.filter(
        (movie) => movie.title.toLowerCase().includes(query.toLowerCase())
      );
      
      setMovies(filteredMovies);
      setNoResults(filteredMovies.length === 0); 
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Search for movies or series..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 w-full rounded-lg mr-4 text-black"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Search
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <Oval 
            height={80} 
            width={80} 
            color="#00BFFF" 
            secondaryColor="#00BFFF" 
            ariaLabel="loading"
          />
        </div>
      ) : noResults ? (
        <p className="text-white text-center">No movies or series found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies.map((movie) => (
            <div key={movie.id} className="bg-gray-800 p-4 rounded-lg">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-lg text-white">{movie.title}</h3>
              <p className="text-sm text-gray-300">{movie.details}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
