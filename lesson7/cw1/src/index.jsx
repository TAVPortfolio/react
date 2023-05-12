import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import NumbersList from './NumbersList';

const rootElement = document.querySelector('#root');

const num = [1, 2, 3, 4, 5, 6];

ReactDOM.render(<NumbersList num={num} />, rootElement);
