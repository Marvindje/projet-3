import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "../assets/the-review-high-resolution-logo-color-on-transparent-background.png";

function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img className="h-20 w-auto" src={logo} alt="Workflow" />
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">
            <Link to="/">
              <h1 className="font-semibold text-xl">The Review</h1>
            </Link>
          </div>
          <div className="flex sm:block sm:ml-6">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Search..."
                className="px-3 py-2 rounded-md text-sm font-medium"
              />
              <Link
                to="/"
                className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Accueil
              </Link>
              <div className="relative group flex mr-4">
                <a
                  href="#"
                  className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Profil
                </a>
                <div className="absolute left-0 w-48 mt-2 py-2 bg-white rounded-lg shadow-xl hidden group-hover:block z-10">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-400 hover:text-white">Mon Profil</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-400 hover:text-white">Mes Posts</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-400 hover:text-white">Créer un Post</a>
                </div>
              </div>
              <div className="relative group flex">
                <a
                  href="#"
                  className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Catégories
                </a>
                <div className="absolute left-0 w-48 mt-2 py-2 bg-white rounded-lg shadow-xl hidden group-hover:block z-10">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-400 hover:text-white">Développement Web</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-400 hover:text-white">Intelligence Artificielle</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-400 hover:text-white">Hardware</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-400 hover:text-white">Logiciels</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-400 hover:text-white">CyberSécurité</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-400 hover:text-white">Carrières Technos</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
