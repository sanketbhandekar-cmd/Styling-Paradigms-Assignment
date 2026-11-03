import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

// Reusable card styling
export const card = style({
  backgroundColor: vars.color.cardBg,
  borderRadius: vars.borderRadius.large,
  boxShadow: vars.shadow.card,
  border: `1px solid ${vars.color.border}`,
  padding: vars.spacing.large,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.small,

  // Responsive padding for smaller screens
  '@media': {
    'screen and (max-width: 600px)': {
      padding: vars.spacing.medium,
    },
  },
});
