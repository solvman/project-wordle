import { range } from "../../utils";
import Guess from "../Guess/Guess";

function GuessResults({ guessList }) {
  return (
    <div className="guess-results">
      {range(6).map((_, index) => {
        const guess = guessList[index]?.guess;
        const result = guessList[index]?.result;

        return <Guess key={index} guess={guess} result={result} />;
      })}
    </div>
  );
}
export default GuessResults;
