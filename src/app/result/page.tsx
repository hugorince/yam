type ResultType = {
  score: number;
};

const Result = ({ score }: ResultType) => {
  return <h1>{score}</h1>;
};

export default Result;
