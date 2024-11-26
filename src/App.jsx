import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Details from "./pages/Details";

const App = () => {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-white">
        {/* Navigation Bar */}
        <nav className="bg-gray-800 p-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-400">
            MovieApp
          </Link>
          <div>
            <Link
              to="/"
              className="mx-2 text-gray-200 hover:text-white transition"
            >
              Home
            </Link>
            <Link
              to="/search"
              className="mx-2 text-gray-200 hover:text-white transition"
            >
              Search
            </Link>
          </div>
        </nav>

        {/* App Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
