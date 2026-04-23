import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

// Mock Next.js Link
jest.mock('next/link', () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
  MockLink.displayName = 'MockLink';
  return MockLink;
});

describe('Footer', () => {
  it('renders company name', () => {
    render(<Footer />);
    expect(screen.getByText('Vliegklaar')).toBeInTheDocument();
  });

  it('renders company description', () => {
    render(<Footer />);
    expect(screen.getByText(/Zorgeloos reizen voor ouderen/i)).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(<Footer />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
  });

  it('renders phone contact link', () => {
    render(<Footer />);
    expect(screen.getByText(/06-18769492/i)).toBeInTheDocument();
  });

  it('renders email contact link', () => {
    render(<Footer />);
    expect(screen.getByText(/info@vliegklaar.nl/i)).toBeInTheDocument();
  });

  it('renders business hours', () => {
    render(<Footer />);
    expect(screen.getByText(/Maandag - Vrijdag: 9:00 - 17:00/i)).toBeInTheDocument();
  });

  it('displays current year in copyright', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`${currentYear}`))).toBeInTheDocument();
  });

  it('has dark background', () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector('footer');
    expect(footer).toHaveClass('bg-gray-900');
  });

  it('has white text', () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector('footer');
    expect(footer).toHaveClass('text-white');
  });

  it('renders privacy link', () => {
    render(<Footer />);
    expect(screen.getByText('Privacy')).toBeInTheDocument();
  });

  it('renders terms link', () => {
    render(<Footer />);
    expect(screen.getByText('Voorwaarden')).toBeInTheDocument();
  });

  it('phone link has correct href', () => {
    render(<Footer />);
    const phoneLink = screen.getByText(/📞 06-18769492/i).closest('a');
    expect(phoneLink).toHaveAttribute('href', 'tel:0618769492');
  });

  it('email link has correct href', () => {
    render(<Footer />);
    const emailLink = screen.getByText(/✉️ info@vliegklaar.nl/i).closest('a');
    expect(emailLink).toHaveAttribute('href', 'mailto:info@vliegklaar.nl');
  });
});
