import React, { useState, Fragment } from "react";
import Modal from "../Utils/Modal";
import Form from "../Utils/Form";
import styles from "./UserInput.module.css";

const UserInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  let modalEmptyError = "Please enter a valid name and age (non-empty values).";
  let modalAgeError = "Please enter a valid age ( > 0 )";
  const modalTitle = "Invalid input";
  const modalDisplay = styles["modal-display"];
  const modalButtonContent = "Close";
  const formLabel1 = "Username";
  const formLabel2 = "Age (Years)";
  const formType1 = "text";
  const formType2 = "number";
  const formButtonContent = "Add User";
  const formButtonType = "submit";

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value.trim());
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value.trim());
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredName.length === 0 || enteredAge.length === 0) {
      setModalContent(modalEmptyError);
      setShowModal(true);
      return;
    }
    if (parseInt(enteredAge) < 1) {
      setModalContent(modalAgeError);
      setShowModal(true);
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    setEnteredName("");
    setEnteredAge("");
  };

  const modalDisable = () => {
    setShowModal(false);
    setModalContent(modalEmptyError);
  };

  return (
    <Fragment>
      <Modal
        customClasses={showModal ? modalDisplay : {}}
        modalTitle={modalTitle}
        buttonContent={modalButtonContent}
        onClick={modalDisable}
        message={modalContent}
      />
      <Form
        formLabel1={formLabel1}
        formType1={formType1}
        formLabel2={formLabel2}
        formType2={formType2}
        buttonContent={formButtonContent}
        type={formButtonType}
        nameChange={nameChangeHandler}
        ageChange={ageChangeHandler}
        formSubmit={formSubmitHandler}
        resetLabel1={enteredName}
        resetLabel2={enteredAge}
      />
    </Fragment>
  );
};

export default UserInput;
