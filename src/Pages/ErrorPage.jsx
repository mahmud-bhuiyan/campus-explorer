import { Link } from "react-router-dom";
import errorBgImage from "../assets/Background/New-404-img.png";

const ErrorPage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-no-repeat text-white text-center"
      style={{
        backgroundImage: `url(${errorBgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <Link
          to="/"
          className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
