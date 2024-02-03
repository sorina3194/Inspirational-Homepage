import { Provider } from "react-redux";
import { store } from "./store";
import Carousel from "../Containers/Carousel";
import Weather from "../Containers/Weather";
import Quote from "../Containers/Quote";

const styleApp = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};


function App() {
  return (
    <Provider store={store} >
      <div className="App" style={styleApp}>
        <Weather />
        <Carousel />
        <Quote />
      </div>
    </Provider>
  );
}

export default App;
