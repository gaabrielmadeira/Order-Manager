import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { StyledBadge } from './style';

export const CustomizedBadges = () => {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={4}>
        <ShoppingCartIcon style={{ color: 'var(--color-grey-3)' }} />
      </StyledBadge>
    </IconButton>
  );
};
