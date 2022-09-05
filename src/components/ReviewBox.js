import React, { useState } from "react";
import ReactDOM from "react-dom";



const ReviewBox = ({ handleSubmit, handleChange, input }) => {
  const { review } = input;
  console.log();
  return (
    <form onSubmit={handleSubmit}>
      <div>
        Review:
        <input
          review="review"
          type="text"
          value={review}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  );
};

const App = () => {
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState({review: ""});


  const addUsers = input => {
    setUsers([...users, { review: input.review}]);
    setInput({ review: "" });
  };

  const handleChange = event => {
    setInput({
      ...input,
      [event.target.review]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    addUsers(input);
  };


  console.log(users);
  return (
    <>
      <h1>Reviews</h1>
      <h3>Add a new</h3>
      <ReviewBox
        input={input}
        addUsers={addUsers}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </>
  );
};

export default ReviewBox;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
