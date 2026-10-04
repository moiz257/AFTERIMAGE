import { render, screen } from '@testing-library/react';
import App from './App';

test('renders afterimage heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/afterimage/i);
  expect(headingElement).toBeInTheDocument();
});
