import React from "react";
import "./goals.css";
import { completeGoal, removeGoal } from "./goalsSlice";
import { useDispatch } from "react-redux";

export function Goal({ goal }) {
  const dispatch = useDispatch();

  const handleRemoveClick = (e) => {
    dispatch(removeGoal(goal.id));
  };

  const handleDoneClick = (e) => {
    dispatch(completeGoal(goal.id));
  };

  return (
    <div className={goal.done ? "disabled-goal" : ''} style={{ position: "relative" }}>
      <div className="content">{goal.content}</div>
      <div className="buttons">
        <button onClick={handleRemoveClick} id="removeButton">
          REMOVE
        </button>
        <button onClick={handleDoneClick} id="doneButton">DONE</button>
      </div>
    </div>
  );
}

export default Goal;
