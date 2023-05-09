import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import GoodButton from './GoodButton';

const rootElement = document.querySelector('#root');
let message = 'Good job!';

ReactDOM.render(<GoodButton />, rootElement);
