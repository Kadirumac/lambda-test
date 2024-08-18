import mongoose from "mongoose";

// Define the Section Schema
const SectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  id: { type: String, required: true, unique: true },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: "SectionItem" }], // Reference to SectionItem schema
});

const Section = mongoose.model("Section", SectionSchema);
export default Section;
