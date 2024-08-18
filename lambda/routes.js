import express from "express";
import {
  createSection,
  getSections,
} from "./controllers/sectionsController.js";

import { createItem } from "./controllers/sectionItemsController.js";

const router = express.Router();

// POST request to create a section
router.post("/sections", createSection);

// GET request to fetch all sections
router.get("/sections", getSections);

// POST request to create an item
router.post("/items", createItem);

export default router;
