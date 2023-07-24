import { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import useColleges from "../../../../hooks/useColleges";
import { Link } from "react-router-dom";

const SearchFiled = () => {
  const { colleges } = useColleges();
  const [collegesData, setCollegesData] = useState(colleges);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCollege, setSelectedCollege] = useState(null);

  useEffect(() => {
    setCollegesData(colleges);
  }, [colleges]);

  const filteredColleges = collegesData.filter((college) =>
    college.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const openModal = (college) => {
    setSelectedCollege(college);
    window.my_modal_5.showModal();
  };

  useEffect(() => {
    return () => setSearchQuery("");
  }, [selectedCollege]);

  return (
    <div className="flex flex-col items-center justify-center pt-5 space-y-4 relative bg-[#013673]">
      <div className="flex items-center justify-center relative">
        <input
          type="text"
          placeholder="Search College..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-auto md:w-96 px-4 py-1 text-gray-800 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
        />
        <BiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>

      <div className="w-full md:w-96">
        {searchQuery && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
            <div className="relative z-10">
              {filteredColleges.map((college) => (
                <div
                  key={college._id}
                  className="w-auto py-2 px-4 rounded text-center bg-base-100 shadow-xl cursor-pointer mb-2"
                  onClick={() => openModal(college)}
                >
                  <div className="">
                    <h2 className="font-bold">{college.name}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box">
          {selectedCollege && (
            <>
              <h3 className="font-bold text-lg">{selectedCollege.name}</h3>
              <p className="text-gray-600 my-2">
                Admission Test Date:{" "}
                <span className="font-bold">
                  {selectedCollege?.admission?.date}
                </span>
              </p>
              <button className="btn btn-sm">
                <Link
                  to={`/college/${selectedCollege._id}`}
                  className="w-full btn btn-sm btn-primary"
                >
                  More Details
                </Link>
              </button>
            </>
          )}

          <div className="modal-action">
            <button className="btn" onClick={() => window.my_modal_5.close()}>
              Close
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default SearchFiled;
