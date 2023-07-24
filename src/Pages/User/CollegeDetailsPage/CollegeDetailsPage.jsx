import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Reviews from "../Home/Reviews/Reviews";

const CollegeDetailsPage = () => {
  const { id } = useParams();
  const [collegeData, setCollegeData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://campus-explorer-server.vercel.app/colleges/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCollegeData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error occurred while fetching data:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="pt-2">
      <div className="bg-gray-100 min-h-screen pt-16">
        <div className="p-4 md:p-8">
          <div className="grid md:grid-cols-2 items-center">
            <img
              src={collegeData?.image}
              alt={collegeData?.name}
              className="w-96 object-cover rounded-md mb-4 drop-shadow-2xl"
            />

            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">{collegeData?.name}</h1>
              <h2 className="text-lg font-bold">Admission Details</h2>
              <p className="text-gray-600 my-2">
                Admission Test Date:{" "}
                <span className="font-bold">
                  {collegeData?.admission?.date}
                </span>
              </p>
              <p className="text-gray-600">
                Process: {collegeData?.admission?.process}
              </p>
            </div>
          </div>
          <hr className="my-4" />

          <div className="mb-6">
            <h2 className="text-xl font-bold">Students Gallery</h2>
            <div className="grid md:grid-cols-3 gap-4 md:my-4">
              {collegeData?.students_gallery?.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Student ${index + 1}`}
                  className="w-full h-64 object-cover rounded-md drop-shadow-2xl"
                />
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-bold">Events</h2>
            <div className="grid md:grid-cols-2 md:gap-4">
              {collegeData?.events?.map((event, index) => (
                <div
                  key={index}
                  className="card w-auto bg-base-100 drop-shadow-xl my-2"
                >
                  <div className="card-body">
                    <h2 className="card-title">{event.name}</h2>
                    <p className="text-gray-600 mb-2">Date: {event.date}</p>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold">Research Works</h2>
            {collegeData?.research_works?.map((research, index) => (
              <div
                key={index}
                className="card w-auto bg-base-100 drop-shadow-xl my-4"
              >
                <div className="card-body">
                  <h2 className="card-title">{research.title}</h2>
                  <p className="text-gray-600 mb-2">
                    Authors: {research.authors.join(", ")}
                  </p>
                  <a
                    href={research.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Research Link
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-xl font-semibold">Sports Categories</h2>
            <ul className="list-disc list-inside mt-2">
              {collegeData.sports_categories.map((category, index) => (
                <li key={index} className="text-gray-600">
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Reviews></Reviews>
    </div>
  );
};

export default CollegeDetailsPage;
