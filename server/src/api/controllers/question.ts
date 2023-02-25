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
      res.status(200).json(newQuestion);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  };

  export const updateQuestion = async (req: Request, res: Response) => {
    try {
      const { question, answer,catagory ,status } = req.body;
      const updatedQuestion = await Question.findByIdAndUpdate(
        req.params.id,
        { question, answer ,catagory,status },
        { new: true }
      );
      if (!updatedQuestion) {
        res.status(404).json({ message: "Question not found" });
        return;
      }
      res.status(200).json(updatedQuestion);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  };


export const deleteQuestionById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const question = await Question.findByIdAndDelete(id);
    if (!question) {
      res.status(404).json({ message: "Question not found" });
      return;
    }
    res.status(200).json({message:"Question deleted successfully"});
  } catch (err) {
    res.status(500).json({ message: err });
  }
};


  export const searchQuestions = async (req: Request, res: Response) => {
    try {
      const query = req.params.query;
      const regex = new RegExp(query, "i");
      const questions = await Question.find({ question: regex });
      res.status(200).json(questions);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  };



