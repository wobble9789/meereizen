import { render, screen } from '@testing-library/react';
import HomePage from '../../app/page';

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
  return function MockServiceCard({ title, description, icon }: any) {
    return (
      <div>
        <span>{icon}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  };
});

describe('HomePage', () => {
  it('renders the main heading', () => {
    render(<HomePage />);
    expect(screen.getByText('Reizen zonder gedoe')).toBeInTheDocument();
  });

  it('renders the hero description', () => {
    render(<HomePage />);
    expect(screen.getByText(/Droomt u van een mooie reis/i)).toBeInTheDocument();
  });

  it('renders CTA buttons', () => {
    render(<HomePage />);
    expect(screen.getByText('Bekijk onze diensten')).toBeInTheDocument();
    expect(screen.getByText('Neem contact op')).toBeInTheDocument();
  });

  it('renders services section heading', () => {
    render(<HomePage />);
    expect(screen.getByText('Wat wij voor u doen')).toBeInTheDocument();
  });

  it('renders all four service cards', () => {
    render(<HomePage />);
    expect(screen.getByText('Complete Reizen')).toBeInTheDocument();
    expect(screen.getByText('Vervoer & Begeleiding')).toBeInTheDocument();
    expect(screen.getByText('Tickets & Arrangementen')).toBeInTheDocument();
    expect(screen.getByText('Persoonlijk Contact')).toBeInTheDocument();
  });

  it('renders "Zo werkt het" section', () => {
    render(<HomePage />);
    expect(screen.getByText('Zo werkt het')).toBeInTheDocument();
  });

  it('renders three steps', () => {
    render(<HomePage />);
    expect(screen.getByText('Vertel ons uw wensen')).toBeInTheDocument();
    expect(screen.getByText('Wij regelen alles')).toBeInTheDocument();
    expect(screen.getByText('Geniet van uw reis')).toBeInTheDocument();
  });

  it('renders step numbers', () => {
    render(<HomePage />);
    const numbers = ['1', '2', '3'];
    numbers.forEach(num => {
      expect(screen.getByText(num)).toBeInTheDocument();
    });
  });

  it('renders final CTA section', () => {
    render(<HomePage />);
    expect(screen.getByText('Klaar voor een zorgeloze reis?')).toBeInTheDocument();
    expect(screen.getByText('Gratis gesprek plannen')).toBeInTheDocument();
  });

  it('has proper semantic HTML structure', () => {
    const { container } = render(<HomePage />);
    const main = container.querySelector('main');
    expect(main).toBeInTheDocument();
    
    const sections = container.querySelectorAll('section');
    expect(sections.length).toBeGreaterThan(3);
  });
});
