import React from 'react';

import Calendar from 'Calendar.tsx';

import { render, screen } from 'test-utils';

describe('Private', () => {
  it('should render properly', () => {
    render(<Calendar />);

    expect(screen.getByTestId('Private')).toMatchSnapshot();
  });
});
