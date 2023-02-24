import { Request, Response } from "express";


export const getQuestions = async (req: Request, res: Response) => {
  try {

    res.status(200).json("question route !!!");
  } catch (err) {
   
  }
};


