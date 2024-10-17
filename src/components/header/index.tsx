import {
  StyledCart,
  StyledCounter,
  StyledHeader,
  StyledSearch,
  StyledSearchDiv,
} from './style';
import { IoSearchSharp } from 'react-icons/io5';
import { IoCartOutline } from 'react-icons/io5';
import { TextTwo } from '../../styles/typograph';

export const Header = () => {
  return (
    <StyledHeader>
      <StyledSearchDiv>
        <StyledSearch type="text" placeholder="Procure pelo seu lanche..." />
        <IoSearchSharp style={{ width: '20px', height: '20px' }} />
      </StyledSearchDiv>
      <StyledCart>
        <StyledCounter>
          <TextTwo>0</TextTwo>
        </StyledCounter>
        <IoCartOutline style={{ width: '30px', height: '30px' }} />
      </StyledCart>
    </StyledHeader>
  );
};
