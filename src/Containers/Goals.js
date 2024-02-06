import React from "react";
import { useSelector } from "react-redux";
import { selectGoals } from "./goalsSlice";
import { Goal } from "./Goal";
import "./goals.css";



export function Goals() {
  const goals = useSelector(selectGoals);
  return (
    <div className="goals">
      <ul>
        {Object.values(goals).map((goal) => (
          <li className="goal" key={goal.id}>
            <Goal goal={goal} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Goals;
