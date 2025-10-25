import { useEffect } from "react";
import "../index.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar_portfolio() {
    return (
        <nav className="justify-items-center m-10">
            <ul className="flex items-stretch">
                <li>
                    <Link to="/portfolio/qui_je_suis" className="flex inline-flex items-center justify-center p-0.5 mx-5 overflow-hidden text-l font-medium rounded-xl group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-cyan-800">
                        <span className="w-43 relative text-center px-6 py-3 transition-all ease-in duration-75 bg-gray-900 rounded-xl group-hover:bg-transparent">
                            Qui je suis
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/portfolio/projets" className="flex inline-flex items-center justify-center p-0.5 mx-5 overflow-hidden text-l font-medium rounded-xl group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-cyan-800">
                        <span className="w-43 relative text-center px-6 py-3 transition-all ease-in duration-75 bg-gray-900 rounded-xl group-hover:bg-transparent">
                            Projets
                        </span>
                    </Link>
                </li>
                <li>

                    <Link to="/portfolio/formations" className="flex inline-flex items-center justify-center p-0.5 mx-5 overflow-hidden text-l font-medium rounded-xl group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-cyan-800">
                        <span className="w-43 relative text-center px-6 py-3 transition-all ease-in duration-75 bg-gray-900 rounded-xl group-hover:bg-transparent">
                            Formations
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/portfolio/experience_pro" className="flex inline-flex items-center justify-center p-0.5 mx-5 overflow-hidden text-l font-medium rounded-xl group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-cyan-800">
                        <span className="w-43 relative text-center px-6 py-3 transition-all ease-in duration-75 bg-gray-900 rounded-xl group-hover:bg-transparent">
                            Expériences Pro
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
