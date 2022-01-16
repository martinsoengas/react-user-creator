import React, { useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./UserInput.module.css";

const UserInput = (props) => {
  let modalEmptyError = "Please enter a valid name and age (non-empty values).";
  let modalAgeError = "Please enter a valid age ( > 0 )";

  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setModalContent(modalEmptyError);
      setShowModal(true);
      return;
    } else if (enteredAge.trim() < 0) {
      setModalContent(modalAgeError);
      setShowModal(true);
      return;
    }
    props.onAddUser([enteredName, enteredAge]);
  };

  const disableModal = () => {
    setShowModal(false);
    setModalContent(modalEmptyError);
  };

  const modalTitle = "Invalid input";

  const displayBlock = { display: "block" };
  const buttonText = "Okay";

  return (
    <div>
      <Modal
        style={showModal ? displayBlock : {}}
        modalTitle={modalTitle}
        buttonText={buttonText}
        onClick={disableModal}
      >
        {modalContent}
      </Modal>
      <div>
        <form onSubmit={formSubmitHandler}>
          <div className={`${styles["user-form"]}`}>
            <label>Username</label>
            <input type="text" onChange={nameChangeHandler} />
            <label>Age (Years)</label>
            <input type="number" onChange={ageChangeHandler} />
          </div>
          <button className={styles.button} type="submit">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserInput;
