import { render, screen } from '@testing-library/react';
import HomePage from '../../app/page';

jest.mock('next/link', () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
  MockLink.displayName = 'MockLink';
  return MockLink;
});

describe('HomePage', () => {
  it('renders the main heading', () => {
    render(<HomePage />);
    expect(screen.getByText('Uw droomreis. Wij regelen alles.')).toBeInTheDocument();
  });

  it('renders the hero description', () => {
    render(<HomePage />);
    expect(screen.getByText(/Van uw voordeur tot uw hotelkamer/i)).toBeInTheDocument();
  });

  it('renders CTA buttons', () => {
    render(<HomePage />);
    expect(screen.getByText('Bel ons: 06-18769492')).toBeInTheDocument();
    expect(screen.getByText('Bekijk hoe het werkt')).toBeInTheDocument();
  });

  it('renders trust bar', () => {
    render(<HomePage />);
    expect(screen.getByText(/Persoonlijke begeleiding/)).toBeInTheDocument();
    expect(screen.getByText(/Al 5 jaar ervaring/)).toBeInTheDocument();
  });

  it('renders voor wie section', () => {
    render(<HomePage />);
    expect(screen.getByText('Voor wie is Vliegklaar?')).toBeInTheDocument();
  });

  it('renders hoe werkt het section', () => {
    render(<HomePage />);
    expect(screen.getByText('Hoe werkt het?')).toBeInTheDocument();
  });

  it('renders three steps', () => {
    render(<HomePage />);
    expect(screen.getByText('U belt of mailt ons')).toBeInTheDocument();
    expect(screen.getByText('Wij regelen alles')).toBeInTheDocument();
    expect(screen.getByText('U geniet')).toBeInTheDocument();
  });

  it('renders testimonials', () => {
    render(<HomePage />);
    expect(screen.getByText(/Mijn dochter maakte zich altijd zorgen/i)).toBeInTheDocument();
    expect(screen.getByText(/We hadden al jaren geen vakantie/i)).toBeInTheDocument();
    expect(screen.getByText(/De begeleider was zo aardig/i)).toBeInTheDocument();
  });

  it('renders all four service cards', () => {
    render(<HomePage />);
    expect(screen.getByText('Complete Reizen')).toBeInTheDocument();
    expect(screen.getByText('Vervoer & Begeleiding')).toBeInTheDocument();
    expect(screen.getByText('Tickets & Arrangementen')).toBeInTheDocument();
    expect(screen.getByText('Persoonlijke Gids')).toBeInTheDocument();
  });

  it('renders final CTA section', () => {
    render(<HomePage />);
    expect(screen.getByText('Klaar voor uw volgende avontuur?')).toBeInTheDocument();
    expect(screen.getByText('Of stuur een bericht')).toBeInTheDocument();
  });

  it('has proper semantic HTML structure', () => {
    const { container } = render(<HomePage />);
    const main = container.querySelector('main');
    expect(main).toBeInTheDocument();
    const sections = container.querySelectorAll('section');
    expect(sections.length).toBeGreaterThan(3);
  });
});
