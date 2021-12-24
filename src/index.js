import React from 'react';
import ReactDOM from 'react-dom';
import FilterEvenOdd from './components/FilterEvenOdd/FilterEvenOdd'


ReactDOM.render(
  <React.StrictMode>
    <FilterEvenOdd />
  </React.StrictMode>,
  document.getElementById('root')
);
/*import { render, screen } from '@testing-library/react';
import App from './App';
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
App.test.js
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
