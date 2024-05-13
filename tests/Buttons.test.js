import React from 'react';
import { renderWithTheme } from './test-utils';
import { screen, fireEvent } from '@testing-library/react';
import { Button, ButtonIcon } from '../src/components';

test('Button displays the correct label', () => {
  renderWithTheme(
    <Button onClick={() => {}}>Click Me</Button>
  );
  const buttonElement = screen.getByText('Click Me');
  expect(buttonElement).toBeInTheDocument();
});

test('Button triggers the correct onClick event', () => {
  const handleClick = jest.fn();
  renderWithTheme(
    <Button onClick={handleClick}>Click Me</Button>
  );
  const buttonElement = screen.getByText('Click Me');
  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('Button applies the "outlined" class correctly', () => {
  renderWithTheme(
    <Button className="outlined" onClick={() => {}}>Outlined Button</Button>
  );
  const buttonElement = screen.getByText('Outlined Button');
  expect(buttonElement).toHaveClass('outlined');
});

// Test for ButtonIcon displays the correct child elements
test('ButtonIcon triggers the correct onClick event', () => {
  const handleClick = jest.fn();
  renderWithTheme(
    <ButtonIcon onClick={handleClick}>
      <img src="icon.png" alt="Icon Image" />
    </ButtonIcon>
  );

  // Check that the child image is present
  const imgElement = screen.getByAltText('Icon Image');
  expect(imgElement).toBeInTheDocument();

  // Verify that the click event is triggered
  fireEvent.click(imgElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});


