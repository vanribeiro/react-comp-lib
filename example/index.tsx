import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Main } from './src/secoes/Main';

const App = () => {
  return (
    <Main />
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
