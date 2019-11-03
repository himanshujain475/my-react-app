import React, { useState } from "react";

function Button(props) {
  const { setCount, count } = props
  return (
    <div>
      <button
        onClick={() => {
            setCount(count + 1)
        }}
      >
        {props.txt}
      </button>
    </div>
  );
}

export default Button;
