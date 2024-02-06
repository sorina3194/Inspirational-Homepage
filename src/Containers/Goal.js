import React from "react";
import "./goals.css";
import { removeGoal } from "./goalsSlice";
import { useDispatch } from "react-redux";


export function Goal({ goal }) {
  const dispatch = useDispatch();

  const handleRemoveClick = (e) => {
    dispatch(removeGoal(goal.id));
  }

  return (
    <div style={{position : "relative"}}>
      <div className='content'>{goal.content}</div>
      <div className="buttons">
        <button onClick={handleRemoveClick} id="removeButton">REMOVE</button>
        <button id="doneButton">DONE</button>
      </div>
    </div>
  );
}

export default Goal;
