import { render, screen } from '@testing-library/react';
import App from './App';


test('renders the Student component', () => {
  render(<App />);
  const studentComponent = screen.getByText(/Add Student/i); // Replace with your desired text or element
  expect(studentComponent).toBeInTheDocument();
});
