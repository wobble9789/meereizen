import { render, screen } from '@testing-library/react';
import OverOnsPage from '../../app/over-ons/page';

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

describe('OverOnsPage', () => {
  it('renders page heading', () => {
    render(<OverOnsPage />);
    expect(screen.getByText('Over MeeReizen')).toBeInTheDocument();
  });

  it('renders mission section', () => {
    render(<OverOnsPage />);
    expect(screen.getByText('Onze missie')).toBeInTheDocument();
  });

  it('explains the company mission', () => {
    render(<OverOnsPage />);
    expect(screen.getByText(/Reizen zou plezier moeten zijn/i)).toBeInTheDocument();
  });

  it('renders why choose us section', () => {
    render(<OverOnsPage />);
    expect(screen.getByText('Waarom voor ons kiezen?')).toBeInTheDocument();
  });

  it('lists personal service benefit', () => {
    render(<OverOnsPage />);
    expect(screen.getByText('Persoonlijke service')).toBeInTheDocument();
  });

  it('lists custom-made trips benefit', () => {
    render(<OverOnsPage />);
    expect(screen.getByText('Op maat gemaakt')).toBeInTheDocument();
  });

  it('lists A to Z guidance benefit', () => {
    render(<OverOnsPage />);
    expect(screen.getByText('Begeleiding van A tot Z')).toBeInTheDocument();
  });

  it('lists taking everything off hands benefit', () => {
    render(<OverOnsPage />);
    expect(screen.getByText('Alles uit handen')).toBeInTheDocument();
  });

  it('lists always reachable benefit', () => {
    render(<OverOnsPage />);
    expect(screen.getByText('Altijd bereikbaar')).toBeInTheDocument();
  });

  it('renders all benefit icons', () => {
    render(<OverOnsPage />);
    const icons = ['👥', '🎯', '🤝', '✓', '💬'];
    icons.forEach(icon => {
      expect(screen.getByText(icon)).toBeInTheDocument();
    });
  });

  it('renders final CTA section', () => {
    render(<OverOnsPage />);
    expect(screen.getByText('Klaar om kennis te maken?')).toBeInTheDocument();
  });

  it('has link to contact page', () => {
    render(<OverOnsPage />);
    const contactLinks = screen.getAllByText(/Contact opnemen/i);
    expect(contactLinks.length).toBeGreaterThan(0);
  });

  it('explains no automatic systems', () => {
    render(<OverOnsPage />);
    expect(screen.getByText(/Geen automatische systemen/i)).toBeInTheDocument();
  });

  it('explains fixed contact person', () => {
    render(<OverOnsPage />);
    expect(screen.getByText(/vast contactpersoon/i)).toBeInTheDocument();
  });
});
