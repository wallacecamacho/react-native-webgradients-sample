import React from '../../../../../../../home/desenv/.cache/typescript/2.9/node_modules/@types/react';
import App from './App';

import renderer from '../../../../../../../home/desenv/.cache/typescript/2.9/node_modules/@types/react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});
