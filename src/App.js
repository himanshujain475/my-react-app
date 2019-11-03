import React, { useState } from "react";
import Button from './Button'

function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>
        You clicked {count} times
      </p>
      <Button txt="Click me" setCount={setCount} count={count} />
    </div>
  );
}

export default App;
