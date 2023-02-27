import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Modal from "@mui/material/Modal";
import AddQuestionButton from "./AddQuestionButton";
import MenuItem from "@mui/material/MenuItem";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { useDispatch, useSelector } from "react-redux";


import TextField from "@mui/material/TextField";
// import { postQuestion } from "../../redux/slices/faqSlice";
import { createNewFaq } from "@/redux/slices/faqSlicenew";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddQuestion = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let [Question, setQuestion] = useState("");
  let [Category, setCategory] = useState("General");

  const dispatch= useDispatch();
  // const { questions, loading } = useSelector((state) => state.question);

  const Catagories = [
    {
      value: "About Company",
      label: "About Company",
    },
    {
      value: "Account",
      label: "Account",
    },
    {
      value: "General",
      label: "General",
    },
    {
      value: "Product",
      label: "Product",
    },
  ];
  const SubmitBtn = async () => {

    const newQuestion = {
      question: Question,
      category: Category,
      status: "Pending",
    };
    try {
      await dispatch(createNewFaq(newQuestion) );
      setOpen(false)
    } catch (err) {
      console.error("Error adding question:", err);
    }
  };

  return (
    <>
      <AddQuestionButton clickHandler={handleOpen}>
        <AddCircleIcon color="primary" aria-label="add new question" /> Add New
        Question
      </AddQuestionButton>
      {/* <Button variant="contained" startIcon={<AddCircleIcon />}>
        Add New Question
      </Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="add new question box"
        aria-describedby="add new faq question"
      >
        <Box sx={style}>
          <TextField
            fullWidth
            label="Question"
            id="fullWidth"
            className="input"
            type="text"
            required
            value={Question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <br />
          <br />
          <TextField
            id="fullWidth"
            select
            label="Category"
            defaultValue="General"
            helperText="Please select the category"
            onChange={(e) => setCategory(e.target.value)}
          >
            {Catagories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <br />
          <br />
          <Button onClick={SubmitBtn} variant="contained" color="secondary">
            Add Question
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default AddQuestion;
