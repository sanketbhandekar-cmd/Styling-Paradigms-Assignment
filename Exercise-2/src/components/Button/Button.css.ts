import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

// Base styles for button
const base = style({
  fontFamily: vars.typography.fontFamily,
  fontWeight: '500',
  border: 'none',
  borderRadius: vars.borderRadius.small,
  cursor: 'pointer',
  transition: '0.2s ease',
  outline: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  ':focus-visible': {
    outline: `2px solid ${vars.color.primary}`,
    outlineOffset: '2px',
  },
  ':disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
});

// Button variants composed with base style
export const buttonVariants = styleVariants({
  primary: [
    base,
    {
      backgroundColor: vars.color.primary,
      color: '#ffffff',
      ':hover': {
        backgroundColor: vars.color.primaryHover,
      },
    },
  ],
  secondary: [
    base,
    {
      backgroundColor: vars.color.secondary,
      color: vars.color.secondaryText,
      ':hover': {
        backgroundColor: vars.color.secondaryHover,
      },
    },
  ],
  danger: [
    base,
    {
      backgroundColor: vars.color.danger,
      color: '#ffffff',
      ':hover': {
        backgroundColor: vars.color.dangerHover,
      },
    },
  ],
});

// Button sizes
export const buttonSizes = styleVariants({
  small: {
    padding: '6px 12px',
    fontSize: vars.typography.fontSizeSm,
  },
  large: {
    padding: '12px 24px',
    fontSize: vars.typography.fontSizeLg,
  },
});
