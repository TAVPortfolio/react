import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Comment from './Comment.jsx';

const rootElement = document.querySelector('#root');

const userInfo = {
  name: 'Tom',
  avatarUrl: 'https://avatars3.githubusercontent.com/u10001',
};

ReactDOM.render(
  <Comment
    author={userInfo}
    text="Good job!"
    date={new Date('2001-12-31T11:11:11.819Z')}
  />,
  rootElement
);
