import React, { useState } from "react";
import styles from "./UserInput.module.css";

const UserInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isValid, setIsValid] = useState(true);

  const nameChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    props.onAddUser([enteredName, enteredAge]);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["user-form"]} ${!isValid ? styles.invalid : ""}`}
      >
        <label>Username</label>
        <input type="text" onChange={nameChangeHandler} />
        <label>Age (Years)</label>
        <input type="number" onChange={ageChangeHandler} />
      </div>
      <button className={styles.button} type="submit">
        Add User
      </button>
    </form>
  );
};

export default UserInput;
