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
    expect(screen.getByText('MeeReizen')).toBeInTheDocument();
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
    expect(screen.getByText(/085-0608333/i)).toBeInTheDocument();
  });

  it('renders email contact link', () => {
    render(<Footer />);
    expect(screen.getByText(/info@meereizen.nl/i)).toBeInTheDocument();
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
    const phoneLink = screen.getByText(/📞 085-0608333/i).closest('a');
    expect(phoneLink).toHaveAttribute('href', 'tel:0881234567');
  });

  it('email link has correct href', () => {
    render(<Footer />);
    const emailLink = screen.getByText(/✉️ info@meereizen.nl/i).closest('a');
    expect(emailLink).toHaveAttribute('href', 'mailto:info@meereizen.nl');
  });
});
