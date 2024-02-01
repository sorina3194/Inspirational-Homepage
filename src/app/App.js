import { Provider } from 'react-redux';
import Carousel from '../Containers/Carousel';
import Weather from '../Containers/Weather'
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Weather />
        <Carousel />
      </div>
    </Provider>
  );
}

export default App;
