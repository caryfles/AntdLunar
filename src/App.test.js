// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AntdLunar title', () => {
    render(<App />);
    const titleElement = screen.getByText(/AntdLunar/i);
    expect(titleElement).toBeInTheDocument();
});
