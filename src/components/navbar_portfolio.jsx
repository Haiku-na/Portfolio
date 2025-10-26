import "../index.css";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar_portfolio() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };
    return (
        <nav className="flex flex-col items-center md:relative fixed">
            <button type="button" onClick={toggleMenu} className="fixed top-30 z-100 left-10 cursor-pointer inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600 transition" aria-controls="navbar-sticky" aria-expanded={isMenuOpen} >
                <span className="sr-only">Ouvrir le menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div className={`${isMenuOpen ? "" : "hidden"} items-center justify-between w-full md:flex md:w-auto md:order-1`}  id="navbar-sticky">
                <div className="flex items-center md:flex-row flex-col md:bg-transparent bg-gray-900 p-3 rounded-xl  gap-1 md:gap-4">
                    <Link to="/portfolio/qui_je_suis"  onClick={() => setIsMenuOpen(false)} className="flex inline-flex items-center justify-center p-0.5 overflow-hidden text-l font-medium rounded-xl bg-transparent md:group md:bg-gradient-to-br md:from-cyan-500 md:to-blue-500 md:group-hover:from-cyan-500 md:group-hover:to-blue-500 md:hover:text-white md:text-white md:focus:ring-4 md:focus:outline-none md:focus:ring-cyan-800">
                        <span className="text-center md:px-6 px-3 hover:bg-gray-800 py-3 bg-gray-700 md:hover:transparent md:transition-all md:ease-in md:duration-75 md:bg-gray-900 rounded-xl md:group-hover:bg-transparent">
                            Qui je suis
                        </span>
                    </Link>
                    <Link to="/portfolio/projets"  onClick={() => setIsMenuOpen(false)} className="flex inline-flex items-center justify-center p-0.5 overflow-hidden text-l font-medium rounded-xl bg-transparent md:group md:bg-gradient-to-br md:from-cyan-500 md:to-blue-500 md:group-hover:from-cyan-500 md:group-hover:to-blue-500 md:hover:text-white md:text-white md:focus:ring-4 md:focus:outline-none md:focus:ring-cyan-800">
                        <span className="text-center md:px-6 px-3 hover:bg-gray-800 py-3 bg-gray-700 md:transition-all md:ease-in md:duration-75 md:bg-gray-900 rounded-xl md:group-hover:bg-transparent">
                            Projets
                        </span>
                    </Link>
                    <Link to="/portfolio/experience_pro"  onClick={() => setIsMenuOpen(false)} className="flex inline-flex items-center justify-center p-0.5 overflow-hidden text-l font-medium rounded-xl bg-transparent md:group md:bg-gradient-to-br md:from-cyan-500 md:to-blue-500 md:group-hover:from-cyan-500 md:group-hover:to-blue-500 md:hover:text-white md:text-white md:focus:ring-4 md:focus:outline-none md:focus:ring-cyan-800">
                        <span className="text-center md:px-6 px-3 hover:bg-gray-800 py-3 bg-gray-700 md:transition-all md:ease-in md:duration-75 md:bg-gray-900 rounded-xl md:group-hover:bg-transparent">
                            Expériences Pro
                        </span>
                    </Link>

                    <Link to="/portfolio/formations"  onClick={() => setIsMenuOpen(false)} className="flex inline-flex items-center justify-center p-0.5 overflow-hidden text-l font-medium rounded-xl bg-transparent md:group md:bg-gradient-to-br md:from-cyan-500 md:to-blue-500 md:group-hover:from-cyan-500 md:group-hover:to-blue-500 md:hover:text-white md:text-white md:focus:ring-4 md:focus:outline-none md:focus:ring-cyan-800">
                        <span className="text-center md:px-6 px-3 hover:bg-gray-800 py-3 bg-gray-700 md:transition-all md:ease-in md:duration-75 md:bg-gray-900 rounded-xl md:group-hover:bg-transparent">
                            Formations
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
