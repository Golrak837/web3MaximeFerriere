import { useState } from "react";
import Button from "components/Button";
import Statistic from "components/Statistic";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setToGood = (newValue) => {
    console.log(newValue);
    setGood(newValue);
  };

  const setToNeutral = (newValue) => {
    setNeutral(newValue);
  };

  const setToBad = (newValue) => {
    setBad(newValue);
  };
  let value = false;
  if (good > 0 || neutral > 0 || bad > 0) value = true;
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setToGood(good + 1)} text="good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="bad" />
      <h1>Statistics</h1>
      {value ? (
        <Statistic good={good} neutral={neutral} bad={bad} />
      ) : (
        <h2>No feedback given</h2>
      )}
    </div>
  );
};

export default App;
