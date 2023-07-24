import { Link } from "react-router-dom";
import useColleges from "../../../hooks/useColleges";
import SectionHeaders from "../../../components/SectionHeaders";

const CollegesPage = () => {
  const { colleges, loading, error } = useColleges();

  if (loading) {
    return (
      <div>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  if (error) {
    return <div>Error occurred while fetching data.</div>;
  }
  return (
    <>
      <div className="pt-10">
        <SectionHeaders header={"All Institutes"}></SectionHeaders>
      </div>
      <div className="grid gap-4 md:grid-cols-3 mb-6">
        {colleges.map((college, index) => (
          <div key={index} className="card bg-base-100 drop-shadow-xl">
            <figure>
              <img
                src={college.image}
                alt={college.name}
                className="w-full h-52"
              />
            </figure>
            <div className="card-body md:p-3">
              <h2 className="card-title text-xl font-bold">{college.name}</h2>

              <div>
                <h3 className="sm:text-md">
                  Admission Test Date:{" "}
                  <span className="font-bold">{college.admission.date}</span>
                </h3>
              </div>

              <div>
                <h3 className="text-md font-bold mb-2">Events</h3>
                {college.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="mb-2">
                    <p className="text-sm font-medium">{event.name}</p>
                    <p className="text-xs text-gray-600">{event.date}</p>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-md font-bold mb-2">Research Works</h3>
                {college.research_works.map((research, researchIndex) => (
                  <div key={researchIndex} className="mb-2">
                    <p className="text-sm font-medium">{research.title}</p>
                    <p className="text-xs">
                      Authors: {research.authors.join(", ")}{" "}
                      <a
                        href={research.link}
                        className="text-sm text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read more
                      </a>
                    </p>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-md font-bold mb-2">Sports Categories</h3>
                <p className="text-sm">
                  {college.sports_categories.join(", ")}
                </p>
              </div>

              <div className="mt-2">
                <Link
                  to={`/college/${college._id}`}
                  className="w-full btn btn-sm btn-primary"
                >
                  More Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CollegesPage;
