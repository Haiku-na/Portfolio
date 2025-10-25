import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <h1 className="text-9xl font-extrabold text-indigo-600">404</h1>
      <p className="mt-4 text-2xl font-semibold text-gray-800">
        Oups ! Il semble que vous soyez perdu.
      </p>
      <p className="mt-2 text-gray-600">
        La page que vous recherchez n’existe pas ou a été déplacée.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700"
      >
        Retourner à l’accueil
      </Link>
    </div>
  );
}
