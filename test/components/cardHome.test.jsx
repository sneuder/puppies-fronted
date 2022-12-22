import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import CardHome from '../../src/components/cardHome';

describe('CardHome component', () => {
  it('should render CardHome component', () => {
    render(<CardHome />, { wrapper: MemoryRouter });
  });

  it('should have a button', () => {
    render(<CardHome />, { wrapper: MemoryRouter });
    const element = screen.getByText('Check more Dogs!');
    expect(element).toBeInTheDocument();
  });
});
