import ResultCard from "./ResultCard";

export default function ResultContant({ results, image }) {
  if (!results) {
    return (
      <div className="text-gray-500 text-center flex justify-center items-center py-20">
        {" "}
        there is no results
      </div>
    );
  }

  return (
    <div>
      {results?.map((result, idx) => (
        <ResultCard result={result} key={idx} image={image} />
      ))}
    </div>
  );
}
