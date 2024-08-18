import Section from "../models/Section.js";

// Create a new section
export const createSection = async (req, res) => {
  try {
    const { title, id } = req.body;
    console.log("hh", req.body);
    const section = new Section({ title, id });
    await section.save();
    res.status(201).json(section);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all sections
export const getSections = async (req, res) => {
  try {
    const sections = await Section.find();
    res.status(200).json(sections);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
