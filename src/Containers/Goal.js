import React from "react";
import "./goals.css";


export function Goal({ goal }) {
  return (
    <div className="goal">
      <button >REMOVE</button>
      <button>DONE</button>
      <div>{goal.content}</div>
    </div>
  );
}

export default Goal;
