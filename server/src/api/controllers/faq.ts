import { Request, Response } from "express";

import Faq ,{IFaq} from "../models/faq.js";
export const getFaqs = async (req: Request, res: Response) => {
  try {

    const faqs = await Faq.find();

    res.status(200).json(faqs);
  } catch (err) {
    res.status(500).json({ message: err});
  }
};


export const getFaqById = async (req: Request, res: Response) => {
    try {
      const faq = await Faq.findById(req.params.id);
      if (!faq) {
        res.status(404).json({ message: "Faq not found" });
        return;
      }
      res.status(200).json(faq);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  };

  export const createFaq = async (req: Request, res: Response) => {
    try {
      const { question, category,status } = req.body;
      const newFaq: IFaq = new Faq({ question, category ,status});
      await newFaq.save();
      res.status(200).json(newFaq);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  };

  export const updateFaq = async (req: Request, res: Response) => {
    try {
      const { question, answer,category ,status } = req.body;
      const updatedFaq = await Faq.findByIdAndUpdate(
        req.params.id,
        { question, answer ,category,status },
        { new: true }
      );
      if (!updatedFaq) {
        res.status(404).json({ message: "Faq not found" });
        return;
      }
      res.status(200).json(updatedFaq);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  };


export const deleteFaqById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const faq = await Faq.findByIdAndDelete(id);
    if (!faq) {
      res.status(404).json({ message: "Faq not found" });
      return;
    }
    res.status(200).json(faq._id);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};


  export const searchFaqs = async (req: Request, res: Response) => {
    try {
      const query = req.params.query;
      const regex = new RegExp(query, "i");
      const faqs = await Faq.find({ question: regex });
      res.status(200).json(faqs);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  };



