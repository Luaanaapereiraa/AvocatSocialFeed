import React from 'react';
import { render, screen } from '@testing-library/react';
import { toBeInTheDocument, toHaveTextContent } from '@testing-library/jest-dom';
import App from './App';

test('renders header', () => {
  render(<App />);
  const headerElements = screen.getAllByRole('banner');
  headerElements.forEach((headerElement) => {
    expect(headerElement).toBeInTheDocument();
  });
});

test('renders posts', () => {
  render(<App />);
  const postElements = screen.getAllByRole('article');
  expect(postElements).toHaveLength(2);
});

test('renders post content', () => {
  render(<App />);
  const postContentElements = screen.getAllByRole('article');
  expect(postContentElements[0]).toHaveTextContent('Fala galera! :)');
  expect(postContentElements[1]).toHaveTextContent('Oi, pessoal! :)');
});
