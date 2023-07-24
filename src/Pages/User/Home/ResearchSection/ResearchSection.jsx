import SectionHeaders from "../../../../components/SectionHeaders";
import useColleges from "../../../../hooks/useColleges";

const ResearchSection = () => {
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
      <SectionHeaders header="research works" />
      <div className="drop-shadow-xl m-4 lg:m-2 xl:m-0">
        {colleges.map((college) => (
          <div key={college._id} className="grid md:grid-cols-2 gap-4">
            {college.research_works.map((research, index) => (
              <div key={index} className="card bg-base-100 drop-shadow-xl my-4">
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
        ))}
      </div>
    </>
  );
};

export default ResearchSection;
