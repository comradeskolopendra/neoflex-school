import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/app'
import "./main.css";
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './redux/index';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store} >
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
)
