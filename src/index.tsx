import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Добавляем плавный скролл для всей страницы
import './styles/smoothScroll.css';

// Добавляем стили для анимаций
import './styles/animations.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 