import React, { useState } from "react";
import Button from './Button'
import request from 'request'

function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  request
  .get('https://my-json-server.typicode.com/typicode/demo/posts')
  .on('response', function(response) {
    console.log(response.toJSON())
  })
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
