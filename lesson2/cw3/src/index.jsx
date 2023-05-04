import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const rootElement = document.querySelector('#root');

const renderSeconds = (time) => {
  const secondsElement = new Date(time).getSeconds();
  const backgroundColor = secondsElement % 2 === 0 ? '#fff' : '#000';
  const textColor = secondsElement % 2 !== 0 ? '#fff' : '#000';

  const styles = {
    color: textColor,
    backgroundColor,
  };

  const element = (
    <div className="seconds" style={styles}>
      Now is {secondsElement}
    </div>
  );
  ReactDOM.render(element, rootElement);
};
renderSeconds(new Date());

setInterval(() => {
  renderSeconds(new Date()), 1000;
});
