import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-5xl font-bold text-primary">404</h1>
      <p className="text-lg text-gray-500 mt-2">Oops! The page you are looking for does not exist.</p>
      <img src="/image.png" alt="Not Found" className="max-w-sm mt-6 rounded-lg shadow-lg" />
      <Link
        to="/home"
        className="btn btn-primary mt-6 px-6 py-2 text-lg rounded-lg transition-all duration-300 hover:scale-105"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
