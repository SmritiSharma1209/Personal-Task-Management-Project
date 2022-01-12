import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input
        onChange={(event) => {
          props.isTyped(event);
        }}
        type="text"
        value={props.value}
      />

      <button
        onClick={() => {
          props.onButtonClick();
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
