import { render, screen } from '@testing-library/react';
import DienstenPage from '../../app/diensten/page';

// Mock Next.js components
jest.mock('next/link', () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
  MockLink.displayName = 'MockLink';
  return MockLink;
});

jest.mock('@/components/ui/Button', () => {
  return function MockButton({ children, ...props }: any) {
    return <button {...props}>{children}</button>;
  };
});

jest.mock('@/components/ui/ServiceCard', () => {
  return function MockServiceCard({ title }: any) {
    return <div>{title}</div>;
  };
});

describe('DienstenPage', () => {
  it('renders page heading', () => {
    render(<DienstenPage />);
    expect(screen.getByText('Onze diensten')).toBeInTheDocument();
  });

  it('renders page description', () => {
    render(<DienstenPage />);
    expect(screen.getByText(/Wij zorgen ervoor dat uw reis/i)).toBeInTheDocument();
  });

  it('renders Complete Reizen section', () => {
    render(<DienstenPage />);
    expect(screen.getByText('Complete Reizen')).toBeInTheDocument();
  });

  it('renders Vervoer & Begeleiding section', () => {
    render(<DienstenPage />);
    expect(screen.getByText('Vervoer & Begeleiding')).toBeInTheDocument();
  });

  it('renders Tickets & Arrangementen section', () => {
    render(<DienstenPage />);
    expect(screen.getByText('Tickets & Arrangementen')).toBeInTheDocument();
  });

  it('renders Persoonlijke Reisgids section', () => {
    render(<DienstenPage />);
    expect(screen.getByText('Persoonlijke Reisgids')).toBeInTheDocument();
    expect(screen.getByText('Premium Service')).toBeInTheDocument();
  });

  it('lists personal guide benefits', () => {
    render(<DienstenPage />);
    expect(screen.getByText(/Alles regelen/i)).toBeInTheDocument();
    expect(screen.getByText(/24\/7 bereikbaar/i)).toBeInTheDocument();
    expect(screen.getByText(/Lokale expertise/i)).toBeInTheDocument();
  });

  it('lists what is included in complete trips', () => {
    render(<DienstenPage />);
    expect(screen.getByText(/Vliegtickets naar uw bestemming/i)).toBeInTheDocument();
    expect(screen.getByText(/Comfortabel hotel met ontbijt/i)).toBeInTheDocument();
  });

  it('lists popular destinations', () => {
    render(<DienstenPage />);
    expect(screen.getByText(/Spaanse Costa/i)).toBeInTheDocument();
    expect(screen.getByText(/Griekse eilanden/i)).toBeInTheDocument();
  });

  it('renders transport service details', () => {
    render(<DienstenPage />);
    expect(screen.getByText('Ophalen bij u thuis')).toBeInTheDocument();
    expect(screen.getByText('Begeleiding op de luchthaven')).toBeInTheDocument();
  });

  it('renders booking service details', () => {
    render(<DienstenPage />);
    expect(screen.getByText('Vliegtickets')).toBeInTheDocument();
    expect(screen.getByText('Hotels')).toBeInTheDocument();
    expect(screen.getByText('Excursies')).toBeInTheDocument();
  });

  it('renders multiple CTA buttons', () => {
    render(<DienstenPage />);
    const buttons = screen.getAllByText(/offerte|informatie|boeken/i);
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('has final CTA section', () => {
    render(<DienstenPage />);
    expect(screen.getByText(/Heeft u vragen over onze diensten/i)).toBeInTheDocument();
  });
});
