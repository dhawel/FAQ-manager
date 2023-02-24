import { Request, Response } from "express";

import Question  from "../models/question.js";
export const getQuestions = async (req: Request, res: Response) => {
  try {
    const questions = await Question.find();

    res.status(200).json(questions);
  } catch (err:any) {
    res.status(500).json({ message: err.message });
  }
};


