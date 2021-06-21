import { render, screen } from '@testing-library/react';
import App from './App';
//test 4
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i) ;
  expect(linkElement).toBeInTheDocument();
});
