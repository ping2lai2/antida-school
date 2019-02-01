import React from 'react';
import { render } from 'react-dom';
import Loading from './components/Loading';
import Loadable from 'react-loadable';

import './static/styles/reset.scss';

const LoadableApp = Loadable({
  loader: () => import('./components/App/App.js'),
  loading: Loading,
});

const root = document.createElement('div');
root.id = 'root';

document.body.appendChild(root);

render(<LoadableApp />, root);
