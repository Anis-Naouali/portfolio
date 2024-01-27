import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <div>
      <header className="bg-slate-300">
        <div className="justify-between gap-4 items-center flex max-w-6xl mx-auto p-1.5 sm:p-3">
          <Link to="/">
            <span className="font-bold text-sm sm:text-xl ">Anis Naouali</span>
          </Link>
          <form
            onSubmit={handleSubmit}
            className="bg-slate-100 p-1.5 rounded-lg flex items-center"
          >
            <input
              className="bg-transparent focus:outline-none w-24 sm:w-64"
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button>
              <FaSearch className="text-slate-600" />
            </button>
          </form>
          <ul className="flex gap-4">
            <Link to="/">
              <li className="  sm:inline hover:underline hidden">Home</li>
            </Link>
            <Link to="/about">
              <li className="  sm:inline hover:underline hidden">About</li>
            </Link>
            <Link to="/profil">
              {currentUser ? (
                <img
                  className="rounded-full h-7 w-7 object-cover"
                  src={currentUser.avatar}
                  alt="profile"
                />
              ) : (
                <li className=" text-slate-700 hover:underline"> Sign in</li>
              )}
            </Link>
          </ul>
        </div>
      </header>
    </div>
  );
}
