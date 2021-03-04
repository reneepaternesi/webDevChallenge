import React from 'react';
import {
  HashRouter,
  Route
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Planet from './components/planet'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
     <HashRouter>
        <div>
          <Route exact path="/" render={()=><App />}/>
          <Route path="/planet" render={()=><Planet />}/>
        </div>
    </HashRouter >
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals();
