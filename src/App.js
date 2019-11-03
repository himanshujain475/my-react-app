import React, { useState, useEffect } from "react";
import Button from "./Button";
import request from "request";

function App() {
  // Declare a new state variable, which we'll call "count"
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    request(
      "https://my-json-server.typicode.com/typicode/demo/posts",
      (error, response, body) => {
        setPosts(body)
      }
    );
  });

  return (
    <div>
      <p> {posts} </p>
      {/* <Button txt="Click me" setCount={setPosts} /> */}
    </div>
  );
}

export default App;
