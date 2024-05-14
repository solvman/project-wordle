import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { checkGuess } from "../../game-helpers";
import { GAME_STATUS, NUM_OF_GUESSES_ALLOWED } from "../../constants";

// // Pick a random word on every pageload.
// const answer = sample(WORDS);
// // To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [answer, setAnswer] = useState(() => sample(WORDS));
  const [guessList, setGuessList] = useState([]);
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.ONGOING);

  console.info({ answer });

  function addGuess(guess) {
    const result = checkGuess(guess, answer);

    setGuessList((prevGuessList) => {
      return [...prevGuessList, { id: crypto.randomUUID(), guess, result }];
    });

    if (guess === answer) {
      setGameStatus(GAME_STATUS.WON);
    } else if (guessList.length >= NUM_OF_GUESSES_ALLOWED - 1) {
      setGameStatus(GAME_STATUS.LOST);
    }
  }

  function handleRestart() {
    setAnswer(sample(WORDS));
    setGuessList([]);
    setGameStatus(GAME_STATUS.ONGOING);
  }

  return (
    <>
      <GuessResults guessList={guessList} />
      <GuessInput
        addGuess={addGuess}
        disabled={gameStatus !== GAME_STATUS.ONGOING}
      />
      {gameStatus === GAME_STATUS.WON && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{guessList.length} guesses.</strong>
          </p>
          <button onClick={handleRestart}>Restart</button>
        </div>
      )}
      {gameStatus === GAME_STATUS.LOST && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
          <button onClick={handleRestart}>Restart</button>
        </div>
      )}
    </>
  );
}

export default Game;
