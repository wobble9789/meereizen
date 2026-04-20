import { cn } from '../utils';

describe('cn utility function', () => {
  it('combines multiple class names', () => {
    const result = cn('class1', 'class2', 'class3');
    expect(result).toContain('class1');
    expect(result).toContain('class2');
    expect(result).toContain('class3');
  });

  it('handles undefined values', () => {
    const result = cn('class1', undefined, 'class2');
    expect(result).toContain('class1');
    expect(result).toContain('class2');
  });

  it('handles null values', () => {
    const result = cn('class1', null, 'class2');
    expect(result).toContain('class1');
    expect(result).toContain('class2');
  });

  it('handles conditional classes', () => {
    const isActive = true;
    const result = cn('base-class', isActive && 'active-class');
    expect(result).toContain('base-class');
    expect(result).toContain('active-class');
  });

  it('removes duplicate classes', () => {
    const result = cn('px-4', 'py-2', 'px-6');
    // Tailwind merge should keep only px-6
    expect(result).toContain('px-6');
  });

  it('handles empty input', () => {
    const result = cn();
    expect(result).toBe('');
  });

  it('handles array of classes', () => {
    const result = cn(['class1', 'class2']);
    expect(result).toContain('class1');
    expect(result).toContain('class2');
  });

  it('merges conflicting Tailwind classes correctly', () => {
    const result = cn('bg-blue-500', 'bg-red-500');
    // Should keep only the last one
    expect(result).toContain('bg-red-500');
    expect(result).not.toContain('bg-blue-500');
  });

  it('handles object notation for conditional classes', () => {
    const result = cn({
      'base-class': true,
      'conditional-class': true,
      'hidden-class': false,
    });
    expect(result).toContain('base-class');
    expect(result).toContain('conditional-class');
    expect(result).not.toContain('hidden-class');
  });
});
