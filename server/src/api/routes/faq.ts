import express from "express";
import { createFaq, getFaqById, getFaqs,deleteFaqById, searchFaqs, updateFaq } from "../controllers/faq.js";

const router = express.Router();

router.get("/", getFaqs);
router.get("/:id", getFaqById);
router.post("/", createFaq);
router.put("/:id", updateFaq);
router.delete("/:id", deleteFaqById);
router.get("/search/:query", searchFaqs);

export default router;
