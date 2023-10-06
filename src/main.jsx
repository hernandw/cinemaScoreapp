import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextMovieProvider } from './context/ContextMovie.jsx';



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextMovieProvider>
      <App />
    </ContextMovieProvider>
  </React.StrictMode>
);
