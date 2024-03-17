import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import InputAndAnimation from './InputAnimation';
import './styles.css';

// Компонент кнопки
const Button = () => {
  const navigate = useNavigate();
  return <button className='button' onClick={() => navigate('/input-animation')}>Click me 😉</button>;
};

// Основной компонент приложения
const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/input-animation" element={<InputAndAnimation />} />
          <Route path="/" element={<Button />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
