// import React from 'react';
// import ReactDOM from 'react-dom';
import {timesTwo} from './function';

test('Multiplies by two', () => {
  expect(timesTwo(4)).toEqual(8);
});