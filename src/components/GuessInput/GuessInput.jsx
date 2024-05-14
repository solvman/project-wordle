import { useState } from "react";

function GuessInput({ addGuess, disabled }) {
  const [input, setInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    addGuess(input);
    setInput("");
  }

  function handleInput(event) {
    if (event.target.value.length > 5) {
      return;
    }

    setInput(event.target.value.toUpperCase());
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="[A-Z]{5}"
        value={input}
        onChange={handleInput}
        disabled={disabled}
      />
    </form>
  );
}
export default GuessInput;
