import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextMovieProvider } from './context/ContextMovie.jsx';
import { BrowserRouter } from 'react-router-dom';



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextMovieProvider>
        <App />
      </ContextMovieProvider>
    </BrowserRouter>
  </React.StrictMode>
);

