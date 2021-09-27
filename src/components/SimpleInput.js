//React
import React, { useRef, useSate } from "react";

const SimpleInput = (props) => {
  const inputFormInput = useRef();

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    const dataToSubmit = inputFormInput.current.value;
    console.log(dataToSubmit);
  };
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input ref={inputFormInput} type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
