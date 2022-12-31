import React from "react"; 
import ReactDOMClient from 'react-dom/client';
import App from './routes/App';

ReactDOMClient.createRoot(document.getElementById('app')).render(<App />);
