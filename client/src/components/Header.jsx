import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {FaSearch} from 'react-icons/fa';
export default function Header() {
  const { currentUser } = useSelector((state) => state.user); 

  return (
    <div>
      <header className="bg-slate-300">
        <div className="justify-between gap-4 items-center flex max-w-6xl mx-auto p-1.5 sm:p-3">
          <Link to="/">
            <span className="font-bold text-sm sm:text-xl ">Anis Naouali</span>
          </Link>
          <form className="bg-slate-100 p-1.5 rounded-lg flex items-center">
            <input
              className="bg-transparent focus:outline-none w-24 sm:w-64"
              type="text"
              placeholder="Search..."
            />
            <FaSearch className="text-slate-600"/>
          </form>
          <ul className="flex gap-4">
            <Link to="/">
              <li className="  sm:inline hover:underline hidden">Home</li>
            </Link>
            <Link to="/about">
              <li className="  sm:inline hover:underline hidden">About</li>
            </Link>
            <Link to='/profil'>
            {currentUser ? (
             <img
             className='rounded-full h-7 w-7 object-cover'
             src={currentUser.avatar}
             alt='profile'
           />
            ) : (
              <li className=' text-slate-700 hover:underline'> Sign in</li>
            )}
          </Link>
          </ul>
        </div>
      </header>
    </div>
  );
}
