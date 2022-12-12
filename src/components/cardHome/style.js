import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import colorPallete from '../../styles/colorPallete';

const styleCard = {
  maxWidth: '440px',

  width: {
    xs: '90%',
    sm: '50%',
    md: '35%',
  },

  height: {
    xs: '70%',
    sm: 'auto',
  },

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const styleCardContent = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '40px',
  paddingBottom: '60px',
  paddingTop: '26px',
};

const styleFooter = {
  backgroundColor: colorPallete.dark,
  p: 2,
};

const styleButton = {
  background: colorPallete.gradients.purpleRed,
  width: '90%',
  height: 80,
};

const ButtonLink = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export { styleCard, styleCardContent, styleFooter, styleButton, ButtonLink };
