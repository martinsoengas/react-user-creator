import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import styles from "./Modal.module.css";

const ModalOverlay = (props) => {
  return (
    <div
      className={`${styles.modal} ${props.customClasses}`}
      onClick={props.onClick}
    >
      <div className={styles["modal-box"]}>
        <h2 className={styles["modal-title"]}>{props.modalTitle}</h2>
        <p className={styles["modal-content"]}>{props.message}</p>
        <footer className={styles["modal-button-container"]}>
          <Button buttonContent={props.buttonContent} onClick={props.onClick} />
        </footer>
      </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay
          onClick={props.onClick}
          customClasses={props.customClasses}
          modalTitle={props.modalTitle}
          message={props.message}
          buttonContent={props.buttonContent}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default Modal;
