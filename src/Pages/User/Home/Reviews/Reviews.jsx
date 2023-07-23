import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <div className="text-center m-16 mx-auto">
      <h3 className="my-8 py-6 font-bold text-3xl">
        USERS <br /> <span className="text-[#6DA9E4]">TESTIMONIALS</span>
      </h3>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        {reviews.map((college) =>
          college.reviews.map((review, reviewIndex) => (
            <SwiperSlide key={reviewIndex}>
              <div className="grid md:grid-cols-12 px-6">
                <div className="col-span-12">
                  <img
                    src={review.userImage}
                    alt={college.name}
                    className="h-36 w-36 rounded-lg mx-auto"
                  />
                  <h4 className="my-4 font-bold">{college.name}</h4>
                  <div className="flex flex-col justify-center items-center my-6 px-4 md:px-24">
                    <p className="flex items-center pb-8">
                      <FaQuoteLeft className="text-4xl" />{" "}
                      <span className="md:px-4">{review.feedback}</span>
                      <FaQuoteRight className="text-4xl" />
                    </p>
                    <div className="flex justify-center">
                      <Rating
                        style={{ maxWidth: 180 }}
                        value={review.rating}
                        readOnly
                      />
                    </div>
                    <h5 className="mt-4 mb-2">- {review.user}</h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
};

export default Reviews;
