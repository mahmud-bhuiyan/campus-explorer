import { Link } from "react-router-dom";
import SectionHeaders from "../../../../components/SectionHeaders";
import useColleges from "../../../../hooks/useColleges";

const CollegeSection = () => {
  const { colleges, loading, error } = useColleges();
  console.log(colleges);

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
      <SectionHeaders header={"Popular Institute"}></SectionHeaders>
      <div className="grid gap-4 md:grid-cols-3">
        {colleges.slice(0, 3).map((college, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <figure>
              <img src={college.image} alt={college.name} className="w-full" />
            </figure>
            <div className="card-body md:p-3">
              <h2 className="card-title text-2xl font-bold mb-2">
                {college.name}
              </h2>

              <div className="mb-2">
                <h3 className="sm:text-lg">
                  Admission Test Date:{" "}
                  <span className="font-bold">{college.admission.date}</span>
                </h3>
              </div>

              <div className="mb-2">
                <h3 className="text-lg font-bold mb-2">Events</h3>
                {college.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="mb-2">
                    <p className="text-sm font-medium">{event.name}</p>
                    <p className="text-xs text-gray-600">{event.date}</p>
                    <p className="text-sm">{event.description}</p>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2">Research Works</h3>
                {college.research_works.map((research, researchIndex) => (
                  <div key={researchIndex} className="mb-2">
                    <p className="text-sm font-medium">{research.title}</p>
                    <p className="text-xs">
                      Authors: {research.authors.join(", ")}
                    </p>
                    <a
                      href={research.link}
                      className="text-sm text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more
                    </a>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2">Sports Categories</h3>
                <ul className="list-disc list-inside">
                  {college.sports_categories.map((sport, sportIndex) => (
                    <li key={sportIndex} className="text-sm">
                      {sport}
                    </li>
                  ))}
                </ul>
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

export default CollegeSection;
