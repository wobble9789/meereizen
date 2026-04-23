import { render, screen } from '@testing-library/react';
import Header from '../Header';

// Mock Next.js Link
jest.mock('next/link', () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
  MockLink.displayName = 'MockLink';
  return MockLink;
});

describe('Header', () => {
  it('renders the site name', () => {
    render(<Header />);
    expect(screen.getByText('Vliegklaar')).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(<Header />);
    const homeLinks = screen.getAllByText('Home');
    expect(homeLinks.length).toBeGreaterThan(0);
    
    expect(screen.getAllByText('Onze Diensten').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Over Ons').length).toBeGreaterThan(0);
  });

  it('renders contact button with phone number', () => {
    render(<Header />);
    const contactButtons = screen.getAllByText(/Bel ons: 06-18769492/i);
    expect(contactButtons.length).toBeGreaterThan(0);
  });

  it('has sticky positioning', () => {
    const { container } = render(<Header />);
    const header = container.querySelector('header');
    expect(header).toHaveClass('sticky');
  });

  it('has high z-index for staying on top', () => {
    const { container } = render(<Header />);
    const header = container.querySelector('header');
    expect(header).toHaveClass('z-50');
  });

  it('renders mobile menu button', () => {
    render(<Header />);
    const menuButton = screen.getByLabelText('Menu');
    expect(menuButton).toBeInTheDocument();
  });
});
