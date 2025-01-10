import ResultCard from "./ResultCard";

export default function ResultContant({ results, image }) {
  return (
    <div>
      {results?.map((result, idx) => (
        <ResultCard result={result} key={idx} image={image} />
      ))}
    </div>
  );
}
