import { Link } from "react-router-dom";

const IntroPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
      <h1 className="text-5xl font-bold mb-4 text-center">Welcome to CHATIFY</h1>
      <p className="text-lg text-center text-base-content/70 mb-8">
        Connect with your friends, family, and colleagues easily.
      </p>
      <div className="flex gap-4">
        <Link to='/login' className="btn btn-primary">Log In</Link>
        <Link to='/signup' className="btn btn-secondary">sign up</Link>
      </div>
    </div>
  );
};

export default IntroPage;
