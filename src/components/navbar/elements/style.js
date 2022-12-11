import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import colorPallete from '../../../styles/colorPallete';

const ButtonLink = styled(Link)`
  width: auto;
  display: flex;
  justify-content: center;
`;

const styleButton = {
  background: colorPallete.gradients.purpleRed,
  width: '200px',
  fontWeight: 'bold',
};

const styleInputs = {
  background: '#fff',
  borderRadius: '4px',
};

export { ButtonLink, styleButton, styleInputs };
