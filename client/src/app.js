import React from 'react';
import ReactDOM from 'react-dom';
import HogwartsContainer from './containers/HogwartsContainer.jsx'

window.addEventListener('load', function () {
  ReactDOM.render(
    <HogwartsContainer />,
    document.getElementById('app')
  );
});
