import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';


//O processo de converter informações em imagem/visual, chama-se renderização

//                                                                   /-> o .render() manda renderizar a tela no navegador
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
