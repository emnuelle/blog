import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Buffer } from 'buffer';
import './index.css';


declare global {
  interface Window {
    Buffer: typeof Buffer;
  }
}

window.Buffer = Buffer;


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
