import React, { StrictMode } from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createRoot} from 'react-dom/client';

// eslint-disable-next-line react/no-deprecated

//Bloqueo esta parte del codigo ya que me larga error al subrilo por consola
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    </StrictMode>
)


