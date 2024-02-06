import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { v4 as uuidv4 } from "uuid";
import { addGoal } from "./goalsSlice";

import "./goals.css";

export default function NewGoalForm() {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addGoal({ id: uuidv4(), content }));
    setContent("");
  };

  return (
    <section className="formSection">
      <form id="goalsForm" onSubmit={handleSubmit}>
        <h1>What's on your mind today?</h1>
        <input
          id="input"
          type="text"
          value={content}
          onChange={(e) => setContent(e.currentTarget.value)}
        />
        <button className="addGoalButton" type="submit">
          Add Goal
        </button>
      </form>
    </section>
  );
}
