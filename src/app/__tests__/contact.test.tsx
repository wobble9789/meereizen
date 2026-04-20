import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactPage from '../../app/contact/page';

// Mock Next.js components
jest.mock('next/link', () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
  MockLink.displayName = 'MockLink';
  return MockLink;
});

jest.mock('@/components/ui/Button', () => {
  const MockButton = ({ children, ...props }: any) => {
    return <button {...props}>{children}</button>;
  };
  MockButton.displayName = 'MockButton';
  return MockButton;
});

describe('ContactPage', () => {
  it('renders page heading', () => {
    render(<ContactPage />);
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders contact information', () => {
    render(<ContactPage />);
    expect(screen.getByText(/06 - 12 34 56 78/i)).toBeInTheDocument();
    expect(screen.getByText(/info@meereizen.nl/i)).toBeInTheDocument();
  });

  it('renders all form fields', () => {
    render(<ContactPage />);
    expect(screen.getByLabelText(/naam/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/e-mailadres/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/telefoonnummer/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/uw bericht/i)).toBeInTheDocument();
  });

  it('renders submit button', () => {
    render(<ContactPage />);
    expect(screen.getByText('Verstuur bericht')).toBeInTheDocument();
  });

  it('shows required field indicators', () => {
    render(<ContactPage />);
    const requiredText = screen.getByText(/Verplichte velden/i);
    expect(requiredText).toBeInTheDocument();
  });

  it('allows typing in name field', async () => {
    const user = userEvent.setup();
    render(<ContactPage />);
    
    const nameInput = screen.getByLabelText(/naam/i);
    await user.type(nameInput, 'Jan Jansen');
    
    expect(nameInput).toHaveValue('Jan Jansen');
  });

  it('allows typing in email field', async () => {
    const user = userEvent.setup();
    render(<ContactPage />);
    
    const emailInput = screen.getByLabelText(/e-mailadres/i);
    await user.type(emailInput, 'jan@example.com');
    
    expect(emailInput).toHaveValue('jan@example.com');
  });

  it('allows typing in phone field', async () => {
    const user = userEvent.setup();
    render(<ContactPage />);
    
    const phoneInput = screen.getByLabelText(/telefoonnummer/i);
    await user.type(phoneInput, '0612345678');
    
    expect(phoneInput).toHaveValue('0612345678');
  });

  it('allows typing in message field', async () => {
    const user = userEvent.setup();
    render(<ContactPage />);
    
    const messageInput = screen.getByLabelText(/uw bericht/i);
    await user.type(messageInput, 'Test bericht');
    
    expect(messageInput).toHaveValue('Test bericht');
  });

  it('shows success message after form submission', async () => {
    const user = userEvent.setup();
    render(<ContactPage />);
    
    await user.type(screen.getByLabelText(/naam/i), 'Jan Jansen');
    await user.type(screen.getByLabelText(/e-mailadres/i), 'jan@example.com');
    await user.type(screen.getByLabelText(/uw bericht/i), 'Test bericht');
    
    const submitButton = screen.getByText('Verstuur bericht');
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByTestId('success-message')).toBeInTheDocument();
    }, { timeout: 3000 });
  });

  it('clears form after successful submission', async () => {
    const user = userEvent.setup();
    render(<ContactPage />);
    
    const nameInput = screen.getByLabelText(/naam/i) as HTMLInputElement;
    const emailInput = screen.getByLabelText(/e-mailadres/i) as HTMLInputElement;
    const messageInput = screen.getByLabelText(/uw bericht/i) as HTMLTextAreaElement;
    
    await user.type(nameInput, 'Jan Jansen');
    await user.type(emailInput, 'jan@example.com');
    await user.type(messageInput, 'Test bericht');
    
    const submitButton = screen.getByText('Verstuur bericht');
    await user.click(submitButton);
    
    // Wacht tot submit compleet is (success message verschijnt)
    await waitFor(
      () => {
        expect(screen.getByTestId('success-message')).toBeInTheDocument();
      },
      { timeout: 3000 } // Verhoog timeout voor 1s submit delay
    );
    
    // Check dat form gecleared is
    expect(nameInput.value).toBe('');
    expect(emailInput.value).toBe('');
    expect(messageInput.value).toBe('');
  });

  it('renders phone contact card', () => {
    render(<ContactPage />);
    expect(screen.getByText('Telefoon')).toBeInTheDocument();
  });

  it('renders email contact card', () => {
    render(<ContactPage />);
    expect(screen.getByText('E-mail')).toBeInTheDocument();
  });

  it('renders WhatsApp contact card', () => {
    render(<ContactPage />);
    expect(screen.getByText('WhatsApp')).toBeInTheDocument();
  });

  it('renders business hours', () => {
    render(<ContactPage />);
    expect(screen.getByText(/Ma-vr: 9:00 - 18:00/i)).toBeInTheDocument();
  });

  it('renders benefits of calling', () => {
    render(<ContactPage />);
    expect(screen.getByText(/Persoonlijk advies op maat/i)).toBeInTheDocument();
    expect(screen.getByText(/Vrijblijvend gesprek/i)).toBeInTheDocument();
  });
});
