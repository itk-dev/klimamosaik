import { render, screen } from '@testing-library/react';
import App from './App';

test('renders grid item', () => {
  render(<App />);
  const linkElement = screen.getByText(/Lorem ipsum/i);
  expect(linkElement).toBeInTheDocument();
});
