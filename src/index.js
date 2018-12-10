import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import App from 'app';
import { ScheduleProvider } from 'contexts/schedule';

const component = (
  <ScheduleProvider>
    <App />
  </ScheduleProvider>
);

render(component, document.querySelector('#root'));