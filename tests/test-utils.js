import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/theme';

const renderWithTheme = (ui, options) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, options);
};

export * from '@testing-library/react';
export { renderWithTheme };
