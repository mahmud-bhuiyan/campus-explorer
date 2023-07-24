import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="pt-20">
      <div className="flex flex-col items-center p-4">
        <img
          src={user.photoURL}
          alt="Profile"
          className="w-32 h-32 rounded-full mb-4"
        />
        <h1 className="text-2xl font-bold">{user.displayName}</h1>
        <p className="text-gray-600">{user.email}</p>
        <p className="text-gray-600">
          Account Created:{" "}
          {new Date(parseInt(user.metadata.createdAt)).toLocaleString()}
        </p>
        {/* Add more user information you want to display */}
      </div>
    </div>
  );
};

export default Profile;
