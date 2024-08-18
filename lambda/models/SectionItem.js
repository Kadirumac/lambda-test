import mongoose from "mongoose";

// Define the SectionItem Schema
const SectionItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  linkText: { type: String },
  linkHref: { type: String },
  sectionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Section",
    required: true,
  }, // Link to the Section
});

const SectionItem = mongoose.model("SectionItem", SectionItemSchema);
export default SectionItem;
