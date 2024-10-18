import { CustomizedBadges } from './cart';
import { StyledHeader, StyledSearch, StyledSearchDiv } from './style';
import { IoSearchSharp } from 'react-icons/io5';

export const Header = () => {
  return (
    <StyledHeader>
      <StyledSearchDiv>
        <StyledSearch type="text" placeholder="Procure pelo seu lanche..." />
        <IoSearchSharp style={{ width: '20px', height: '20px' }} />
      </StyledSearchDiv>
      <CustomizedBadges />
    </StyledHeader>
  );
};
