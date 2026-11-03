import { style } from '@vanilla-extract/css';
import { vars } from './styles/theme.css';

export const appContainer = style({
  fontFamily: vars.typography.fontFamily,
  backgroundColor: vars.color.background,
  color: vars.color.text,
  minHeight: '100vh',
  padding: vars.spacing.large,
  boxSizing: 'border-box',
});

export const section = style({
  marginBottom: vars.spacing.large,
});

export const sectionTitle = style({
  fontSize: vars.typography.fontSizeLg,
  marginBottom: vars.spacing.small,
});

export const row = style({
  display: 'flex',
  gap: vars.spacing.small,
  alignItems: 'center',
  flexWrap: 'wrap',
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: vars.spacing.medium,
  marginTop: vars.spacing.small,

  // Responsive grid: 1 column on mobile, 3 columns on larger screens
  '@media': {
    'screen and (min-width: 600px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
});
