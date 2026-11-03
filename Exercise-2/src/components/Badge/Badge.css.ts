import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

// Base style for badge
const base = style({
  fontFamily: vars.typography.fontFamily,
  fontSize: vars.typography.fontSizeSm,
  borderRadius: vars.borderRadius.full,
  padding: '4px 10px',
  display: 'inline-block',
  fontWeight: '500',
});

// Semantic badge variants composed with base style
export const badgeVariants = styleVariants({
  success: [
    base,
    {
      backgroundColor: vars.color.successBg,
      color: vars.color.successText,
    },
  ],
  warning: [
    base,
    {
      backgroundColor: vars.color.warningBg,
      color: vars.color.warningText,
    },
  ],
  error: [
    base,
    {
      backgroundColor: vars.color.errorBg,
      color: vars.color.errorText,
    },
  ],
});
