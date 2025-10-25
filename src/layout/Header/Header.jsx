import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getPageName = (path) => {
    if (path === "/") return "Accueil";
    if (path === "/contact") return "Contact";
    if (path.startsWith("/portfolio")) return "Portfolio";
    return "404";
  };
  const pageName = getPageName(location.pathname);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <nav className="bg-gray-900 fixed w-full z-20 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a href="/CV.pdf" download className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-green-800" >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-transparent">
                Télécharger le CV
              </span>
            </a>

            <button type="button" onClick={toggleMenu} className="cursor-pointer inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600 transition" aria-controls="navbar-sticky" aria-expanded={isMenuOpen} >
              <span className="sr-only">Ouvrir le menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>

          <div className={`${isMenuOpen ? "" : "hidden"} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-sticky" >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-gray-900 md:bg-gray-900 border-gray-700">
              <li>
                <Link to="/" className="block py-2 px-3 rounded-sm hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-white transition" onClick={() => setIsMenuOpen(false)} >
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/portfolio/qui_je_suis" className="block py-2 px-3 rounded-sm hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-white transition" onClick={() => setIsMenuOpen(false)}>
                  Portfolio
                </Link>
              </li>
              <li>
                <a href="https://cv-numerique-wheat.vercel.app/" target="_blank" rel="noopener noreferrer" className="block py-2 px-3 rounded-sm hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-white transition" onClick={() => setIsMenuOpen(false)}>
                  CV Numérique
                </a>
              </li>
              <li>
                <Link to="/contact" className="block py-2 px-3 rounded-sm hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-white" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="flex justify-center mt-30">
        <h1 className="mb-4 text-3xl font-extrabold text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            {pageName}
          </span>
        </h1>
      </div>
    </header>
  );
}
