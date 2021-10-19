import React from "react";
import "./Form.css";

export default function Form({ username, changeHandler, onClickHandler }) {
  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="form-container">
      <form className="form" onSubmit={onSubmit}>
        <label htmlFor="username">Github Username</label>
        <input
          type="text"
          name="username"
          id="username"
          className="username-bar"
          placeholder="Your Github Username"
          value={username}
          onChange={changeHandler}
          required
        />
        <input
          type="submit"
          value="Submit"
          onClick={onClickHandler}
          className="submit-btn"
        />
      </form>
      <div className="sidebar">
        <h1>Hello World</h1>
        <p>
          Enter Your Github Profile Username to find out who isn't following you
          ;)
        </p>
        <hr />
        <p>Made with Sadistic &#9825;</p>
      </div>
    </section>
  );
}
