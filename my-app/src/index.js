import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./store";
import {MapContextProvider} from "./context/map";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <MapContextProvider>
            <App />
          </MapContextProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
