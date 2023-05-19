import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList';

const rootElement = document.querySelector('#root');

const users = [
  { id: 'id-0', name: 'Tom', age: 21 },
  { id: 'id-1', name: 'Maria', age: 52 },
  { id: 'id-2', name: 'Alex', age: 16 },
  { id: 'id-3', name: 'Blanca', age: 27 },
  { id: 'id-4', name: 'Margaret', age: 23 },
  { id: 'id-5', name: 'Pyeter', age: 40 },
];

ReactDOM.render(<UsersList users={users} />, rootElement);
