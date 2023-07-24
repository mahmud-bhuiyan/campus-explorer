import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroSection = () => {
  const carouselData = [
    {
      imageUrl: "/src/assets/Hero/2.jpg",
      text: "WELCOME TO UNIVERSITY",
      subtext:
        "Explore a World of Knowledge and Experience Quality Education for a Brighter Future",
    },
    {
      imageUrl: "/src/assets/Hero/1.jpg",
      text: "EDUCATION MASTER",
      subtext:
        "Unlock Your Potential and Lead the Way towards Empowering Future Generations",
    },
    {
      imageUrl: "/src/assets/Hero/3.jpg",
      text: "ADMISSION OPEN 2023",
      subtext:
        "Open the Doors to Exciting Opportunities and Enroll in Our Diverse Range of Programs",
    },
  ];

  return (
    <div className="relative">
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        interval={2000}
        showStatus={false}
        showThumbs={false}
      >
        {carouselData.map((item, index) => (
          <div key={index}>
            <img src={item.imageUrl} alt={`Image ${index + 1}`} />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white ">
              <div className="sm:text-2xl font-bold p-4">
                {item.text.split(" ").map((word, wordIndex) =>
                  wordIndex === item.text.split(" ").length - 1 ? (
                    <span key={wordIndex} className="text-orange-500">
                      {word}
                    </span>
                  ) : (
                    <span key={wordIndex}>{word} </span>
                  )
                )}
              </div>
              <div className="text-lg p-4 hidden sm:flex">{item.subtext}</div>
              <div className="buttons flex space-x-4">
                <a
                  href="#_"
                  className="relative items-center justify-start inline-block px-2 sm:px-5 sm:py-3 overflow-hidden font-medium transition-all bg-orange-500 rounded hover:bg-white group"
                >
                  <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded"></span>
                  <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-orange-500">
                    All courses
                  </span>
                </a>
                <a
                  href="#_"
                  className="flex items-center justify-center px-2 sm:px-4 sm:py-2 text-base font-medium leading-6 text-orange-500 whitespace-no-wrap bg-white border-2 border-transparent rounded shadow-sm hover:bg-transparent hover:text-white hover:border-white focus:outline-none"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSection;
