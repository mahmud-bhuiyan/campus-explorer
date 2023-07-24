import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="pt-20 mb-4">
      <Helmet>
        <title>Profile | Campus Explorer</title>
      </Helmet>
      <div className="flex flex-col items-center p-4">
        <img
          src={user.photoURL}
          alt="Profile"
          className="w-32 h-32 rounded-full mb-4"
        />
        <h1 className="text-2xl font-bold">Name: {user.displayName}</h1>
        <p className="text-gray-600">Email {user.email}</p>
        <p className="text-gray-600">University: </p>
        <p className="text-gray-600">Address: </p>

        <button className="px-4 py-2 mt-4 bg-green-500 text-white rounded hover:bg-green-600">
          <Link to={`/college/${user.email}`}>More Details</Link>
        </button>
      </div>
    </div>
  );
};

export default Profile;
