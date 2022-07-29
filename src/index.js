import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Store from './redux/reduxStore';
import { BrowserRouter } from "react-router-dom";
import store from './redux/reduxStore';
import storeContext from './storeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));


let rerender = (state) => {

  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <storeContext.Provider value={store}>
          <App store={store}/>
        </storeContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
  reportWebVitals();
}

rerender(Store.getState())
Store.subscribe(() => {
  let state = Store.getState();
  rerender(state)
})


