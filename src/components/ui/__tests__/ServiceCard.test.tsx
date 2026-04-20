import { render, screen } from '@testing-library/react';
import ServiceCard from '../ServiceCard';

describe('ServiceCard', () => {
  const defaultProps = {
    title: 'Test Service',
    description: 'Test description',
    icon: '🚀',
    link: '/test'
  };

  it('renders service card with title and description', () => {
    render(<ServiceCard {...defaultProps} />);
    expect(screen.getByText('Test Service')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('renders the icon', () => {
    render(<ServiceCard {...defaultProps} />);
    expect(screen.getByText('🚀')).toBeInTheDocument();
  });

  it('contains a link with correct href', () => {
    render(<ServiceCard {...defaultProps} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/test');
  });

  it('has "Meer informatie" text', () => {
    render(<ServiceCard {...defaultProps} />);
    expect(screen.getByText(/meer informatie/i)).toBeInTheDocument();
  });
});
