import useColleges from "../../../../hooks/useColleges";
import SectionHeaders from "../../../../components/SectionHeaders";

const ImageGallerySection = () => {
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

  const allImages = colleges.reduce(
    (acc, college) => [...acc, ...college.students_gallery],
    []
  );

  return (
    <div className="bg-[#F5F5F5] mt-10 pb-10 rounded-xl">
      <SectionHeaders header="Image Gallery" />
      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-4">
        {allImages.slice(0, 8).map((imageUrl, index) => (
          <div key={index} className="p-4">
            <img
              src={imageUrl}
              alt={`Gallery Image ${index + 1}`}
              className="w-full sm:h-48 rounded-md drop-shadow-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallerySection;
