import express from "express";
import { createQuestion, getQuestionById, getQuestions,deleteQuestionById, searchQuestions, updateQuestion } from "../controllers/question.js";

const router = express.Router();

router.get("/", getQuestions);
router.get("/:id", getQuestionById);
router.post("/", createQuestion);
router.put("/:id", updateQuestion);
router.delete("/:id", deleteQuestionById);
router.get("/search/:query", searchQuestions);

export default router;
