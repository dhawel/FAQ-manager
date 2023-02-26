import React from "react";
import styles from "./index.module.css";
interface AddQuestionButtonProps {

    clickHandler: () => void;
    type?: "button" | "submit" | "reset";
    isDisabled?: boolean;

    children?: React.ReactNode;
  }
const AddQuestionButton: React.FC<AddQuestionButtonProps>  = ({  clickHandler, type = "button", isDisabled = false, children })=> {


  return (
    <button
    className={`${styles.btn}`}
    onClick={clickHandler}
    type={type}
    disabled={isDisabled}

    >
      {children}
    </button>
  );
};


export default AddQuestionButton;
