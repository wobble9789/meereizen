// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

// Suppress React 18 act() warnings voor userEvent
// Deze warnings zijn bekend en gaan niet over echte problemen
global.console = {
  ...console,
  error: (...args) => {
    const message = args[0];
    if (
      typeof message === 'string' &&
      message.includes('Warning: An update to') &&
      message.includes('inside a test was not wrapped in act')
    ) {
      return;
    }
    console.error(...args);
  },
};

