import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <header className="bg-slate-300">
        <div className="justify-between gap-4 items-center flex max-w-6xl mx-auto p-1.5 sm:p-3">
          <Link to="/">
            <span className="font-bold text-sm sm:text-xl ">
              Anis Naouali
            </span>
          </Link>
          <ul className="flex gap-4">
            <Link to="/">
              <li className="  sm:inline hover:underline">Home</li>
            </Link>
            <Link to="/about">
              <li className="  sm:inline hover:underline">About</li>
            </Link>
            <Link to="/signin">
              <li className=" sm:inline hover:underline">Sign In</li>
            </Link>
          </ul>
        </div>
      </header>
    </div>
  );
}
