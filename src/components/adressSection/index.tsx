import { StyledOpenCloseButton } from '../../styles/button';
import { TextTwo } from '../../styles/typograph';
import { StyledAdreesSection, StyledAdressDiv } from './style';
import { MdLocationOn } from 'react-icons/md';

export const AdressSection = () => {
  return (
    <StyledAdreesSection>
      <StyledOpenCloseButton buttonStyle="open" textButtonStyle="openClose">
        OPEN
      </StyledOpenCloseButton>
      <StyledAdressDiv>
        <MdLocationOn color="var(--color-white)" />
        <TextTwo>Rua Gramado, 2476 - Cassino ABC VIII</TextTwo>
      </StyledAdressDiv>
    </StyledAdreesSection>
  );
};
