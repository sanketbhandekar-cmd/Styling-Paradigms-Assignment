import { createTheme } from '@vanilla-extract/css';

// Shared design tokens / theme values
export const [themeClass, vars] = createTheme({
  color: {
    primary: '#2563eb',
    primaryHover: '#1d4ed8',
    secondary: '#e2e8f0',
    secondaryHover: '#cbd5e1',
    secondaryText: '#1e293b',
    danger: '#dc2626',
    dangerHover: '#b91c1c',
    text: '#0f172a',
    textMuted: '#64748b',
    background: '#f8fafc',
    cardBg: '#ffffff',
    border: '#e2e8f0',
    successBg: '#dcfce7',
    successText: '#15803d',
    warningBg: '#fef3c7',
    warningText: '#b45309',
    errorBg: '#fee2e2',
    errorText: '#b91c1c',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },
  typography: {
    fontFamily: 'Segoe UI, Roboto, Helvetica, Arial, sans-serif',
    fontSizeSm: '14px',
    fontSizeBase: '16px',
    fontSizeLg: '18px',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
    full: '9999px',
  },
  shadow: {
    card: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  },
});
