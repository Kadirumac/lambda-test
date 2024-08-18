import React, { useState } from "react";
import axios from "axios";

const CreateSection = () => {
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/api/sections", {
        title,
        id,
      });
      setMessage(`Section created: ${response.data.title}`);
      setVariant("success");
      setTitle("");
      setId("");
    } catch (error) {
      setMessage(`Error: ${error.response?.data?.message || error.message}`);
      setVariant("danger");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Create a New Section</h2>
      {message && <div className={`alert alert-${variant}`}>{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="id" className="form-label">
            Section ID
          </label>
          <input
            type="text"
            className="form-control"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Section Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Section
        </button>
      </form>
    </div>
  );
};

export default CreateSection;
