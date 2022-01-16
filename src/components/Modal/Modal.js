import React from "react";
import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={styles.modal} style={props.style}>
      <div className={styles["modal-box"]}>
        <h1 className={styles["modal-title"]}>{props.modalTitle}</h1>
        <p className={styles["modal-content"]}>{props.children}</p>
        <div className={styles["modal-button-container"]}>
          <button className={styles["modal-button"]} onClick={props.onClick}>
            {props.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
