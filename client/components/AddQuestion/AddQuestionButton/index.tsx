import React from "react";

interface AddQuestionButtonProps {

    clickHandler: () => void;
    type?: "button" | "submit" | "reset";
    isDisabled?: boolean;

    children?: React.ReactNode;
  }
const AddQuestionButton: React.FC<AddQuestionButtonProps>  = ({  clickHandler, type = "button", isDisabled = false, children })=> {


  return (
    <button

    onClick={clickHandler}
    type={type}
    disabled={isDisabled}

    >
      {children}
    </button>
  );
};


export default AddQuestionButton;
