import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'

describe('App', () => {
  it('should render while authenticating', () => {
      render(<App />);
      expect(screen.getByText('New text')).toBeInTheDocument();
  });
});