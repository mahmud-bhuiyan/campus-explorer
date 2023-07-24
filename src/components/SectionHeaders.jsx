const SectionHeaders = ({ header, text }) => {
  return (
    <div>
      <h3 className="my-8 Py-6 font-bold text-2xl uppercase">
        {header.split(" ").map((word, wordIndex) =>
          wordIndex === header.split(" ").length - 1 ? (
            <span key={wordIndex} className="text-orange-500">
              {word}
            </span>
          ) : (
            <span key={wordIndex}>{word} </span>
          )
        )}
      </h3>
      <p>{text}</p>
    </div>
  );
};

export default SectionHeaders;
