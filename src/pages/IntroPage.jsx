const IntroPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
      <h1 className="text-5xl font-bold mb-4 text-center">Welcome to CHATIFY</h1>
      <p className="text-lg text-center text-base-content/70 mb-8">
        Connect with your friends, family, and colleagues easily.
      </p>
      {/* You can add call-to-action buttons or other content below */}
      <div className="flex gap-4">
        <a href="/login" className="btn btn-primary">
          Log In
        </a>
        <a href="/signup" className="btn btn-secondary">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default IntroPage;
