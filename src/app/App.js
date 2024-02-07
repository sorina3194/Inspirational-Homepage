import { Provider } from "react-redux";
import { store } from "./store";
import Carousel from "../Containers/Carousel";
import Weather from "../Containers/Weather";
import Quote from "../Containers/Quote";
import Goals from "../Containers/Goals";
import GoalAddForm from "../Containers/GoalAddForm";
import "./app.css";

function App() {
  
  return (
    <Provider store={store}>
      <div className="App">
        <Weather />
        <div className="goalsTable">
          <GoalAddForm />
          <Goals />
        </div>
        <Carousel />
        <Quote />
      </div>
    </Provider>
  );
}

export default App;
