import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App.jsx';
import Header from './Header/Header.jsx';
import Presentation from './Presentation/Presentation.jsx';
import Assessments from './Assessments/Assessments.jsx';
import Summary from './Summary/Summary.jsx';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Header />
    <Presentation />
    <Assessments />
    <Summary />
  </React.StrictMode>,
  document.getElementById('app')
);
