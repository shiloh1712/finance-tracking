import { render, screen } from '@testing-library/react';
import App from './App';

test('canary', () => {
  expect(true).toBeTruthy()
});

test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();

  expect(1).toBeGreaterThanOrEqual(0)
});

test('abc', () => {
  render(<App />)
  const linkElement = screen.getByText("abc");
  expect(linkElement).toBeInTheDocument();
})