import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Header() {
  const { currentUser } = useSelector((state) => state.user);  console.log(currentUser);

  return (
    <div>
      <header className="bg-slate-300">
        <div className="justify-between gap-4 items-center flex max-w-6xl mx-auto p-1.5 sm:p-3">
          <Link to="/">
            <span className="font-bold text-sm sm:text-xl ">Anis Naouali</span>
          </Link>
          <ul className="flex gap-4">
            <Link to="/">
              <li className="  sm:inline hover:underline">Home</li>
            </Link>
            <Link to="/about">
              <li className="  sm:inline hover:underline">About</li>
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
