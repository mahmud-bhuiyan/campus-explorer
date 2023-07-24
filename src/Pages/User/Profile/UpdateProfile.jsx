import { useState, useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
  const { user, updateUser } = useContext(AuthContext);

  const [name, setName] = useState(user.displayName);
  const [email, setEmail] = useState(user.email);
  const [university, setUniversity] = useState(user.university || "");
  const [address, setAddress] = useState(user.address || "");
  const navigate = useNavigate();

  const handleSave = () => {
    navigate("/");
    const updatedUser = {
      ...user,
      displayName: name,
      email,
      university,
      address,
    };
    updateUser(updatedUser);
  };

  return (
    <div className="pt-20 mb-4">
      <Helmet>
        <title>Update Profile | Campus Explorer</title>
      </Helmet>
      <div className="flex flex-col items-center p-4">
        <h1 className="text-2xl font-bold">Update Profile</h1>
        <img
          src={user.photoURL}
          alt="Profile"
          className="w-32 h-32 rounded-full mb-4"
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="mb-2 p-2 rounded border border-gray-300"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="mb-2 p-2 rounded border border-gray-300"
        />
        <input
          type="text"
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
          placeholder="University"
          className="mb-2 p-2 rounded border border-gray-300"
        />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
          className="mb-2 p-2 rounded border border-gray-300"
        />
        <button
          className="px-4 py-2 mt-4 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default UpdateProfile;
