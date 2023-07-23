import { FcIdea } from "react-icons/fc";

const PromotionCard = () => {
  return (
    <div className="bg-[#F36B3B] lg:flex justify-between items-center gap-10 px-10 py-4 text-white">
      <FcIdea className="text-5xl"></FcIdea>
      <div className="lg:text-center py-4 lg:py-0">
        <h3 className="text-3xl">Ready to get started?</h3>
        <p>
          Through college courses, students can acquire valuable skills,
          critical thinking abilities,
          <br /> and practical expertise, preparing them for a successful career
          and lifelong personal development.
        </p>
      </div>
      <a
        href="#_"
        className="inline-flex items-center justify-center h-10 w-64 px-6 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
      >
        Book Courses
      </a>
    </div>
  );
};

export default PromotionCard;
