import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as AbCard } from '../stories/AbCard.stories';

describe('AbCard', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <AbCard>
        <h1>Teste</h1>
      </AbCard>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
