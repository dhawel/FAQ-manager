import { Request, Response } from "express";

import Question ,{IQuestion} from "../models/question.js";
export const getQuestions = async (req: Request, res: Response) => {
  try {
    const questions = await Question.find();

    res.status(200).json(questions);
  } catch (err) {
    res.status(500).json({ message: err});
  }
};


export const getQuestionById = async (req: Request, res: Response) => {
    try {
      const question = await Question.findById(req.params.id);
      if (!question) {
        res.status(404).json({ message: "Question not found" });
        return;
      }
      res.status(200).json(question);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  };

  export const createQuestion = async (req: Request, res: Response) => {
    try {
      const { question, catagory } = req.body;
      const newQuestion: IQuestion = new Question({ question, catagory });
      await newQuestion.save();
      res.status(200).json(question);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  };




