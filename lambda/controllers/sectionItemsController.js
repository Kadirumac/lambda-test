import Section from "../models/Section.js";
import SectionItem from "../models/SectionItem.js";

// Add a new SectionItem to a Section and update the Section's items array
export const createItem = async (req, res) => {
  try {
    const { sectionId, title, description, linkText, linkHref } = req.body;

    // Validate the input
    if (!sectionId || !title || !description) {
      return res
        .status(400)
        .json({ message: "sectionId, title, and description are required." });
    }

    // Find the section to ensure it exists
    const section = await Section.findById(sectionId);
    if (!section) {
      return res.status(404).json({ message: "Section not found." });
    }

    // Create and save the new SectionItem
    const sectionItem = new SectionItem({
      title,
      description,
      linkText,
      linkHref,
      sectionId,
    });

    await sectionItem.save();

    // Update the Section's items array
    section.items.push(sectionItem._id);
    await section.save();

    // Respond with the created SectionItem
    res.status(201).json(sectionItem);
  } catch (error) {
    console.error("Error adding section item:", error.message);
    res.status(500).json({ message: "Server error: " + error.message });
  }
};
