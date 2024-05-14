import { range } from "../../utils";

function Guess({ guess, result }) {
  return (
    <p className="guess">
      {range(5).map((_, index) => {
        const letter = guess === undefined ? "" : guess[index];
        const outcome = result === undefined ? "" : result[index];

        return (
          <span key={index} className={`cell ${outcome?.status}`}>
            {letter}
          </span>
        );
      })}
    </p>
  );
}
export default Guess;
