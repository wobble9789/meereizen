import { render, screen } from '@testing-library/react';
import OverOnsPage from '../../app/over-ons/page';

jest.mock('next/link', () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
  MockLink.displayName = 'MockLink';
  return MockLink;
});

describe('OverOnsPage', () => {
  it('renders page heading', () => {
    render(<OverOnsPage />);
    expect(screen.getByText('Over Vliegklaar')).toBeInTheDocument();
  });

  it('renders personal story about Ivo', () => {
    render(<OverOnsPage />);
    expect(screen.getByText(/Vliegklaar is opgericht door Ivo/i)).toBeInTheDocument();
  });

  it('renders mission section', () => {
    render(<OverOnsPage />);
    expect(screen.getByText('Onze missie')).toBeInTheDocument();
  });

  it('explains the company mission', () => {
    render(<OverOnsPage />);
    expect(screen.getAllByText(/Reizen zou plezier moeten zijn/i).length).toBeGreaterThan(0);
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
    expect(screen.getByText('👥')).toBeInTheDocument();
    expect(screen.getByText('🎯')).toBeInTheDocument();
    expect(screen.getByText('🤝')).toBeInTheDocument();
    expect(screen.getByText('✓')).toBeInTheDocument();
    expect(screen.getByText('💬')).toBeInTheDocument();
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
    expect(screen.getAllByText(/Geen automatische systemen/i).length).toBeGreaterThan(0);
  });

  it('explains fixed contact person', () => {
    render(<OverOnsPage />);
    expect(screen.getByText(/vast contactpersoon/i)).toBeInTheDocument();
  });
});
