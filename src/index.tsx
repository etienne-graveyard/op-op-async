import 'normalize.css';
import { injectGlobal } from 'emotion';
import { render } from 'react-dom';
import React from 'react';
import { TreeApp } from './opp-view';

// import './opp';

injectGlobal`
html, body {
  font-family: sans-serif;
}
`;

render(<TreeApp />, document.getElementById('root'));