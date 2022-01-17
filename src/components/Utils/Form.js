import React from "react";
import Button from "./Button";
import styles from "./Form.module.css";

const Form = (props) => {
  return (
    <>
      <form onSubmit={props.formSubmit}>
        <div className={styles["user-form"]}>
          <label>{props.formLabel1}</label>
          <input
            type={props.formType1}
            value={props.resetLabel1}
            onChange={props.nameChange}
          />
          <label>{props.formLabel2}</label>
          <input
            type={props.formType2}
            value={props.resetLabel2}
            onChange={props.ageChange}
          />
        </div>
        <Button buttonContent={props.buttonContent} type={props.type} />
      </form>
    </>
  );
};

export default Form;
