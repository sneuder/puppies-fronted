import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import colorPallete from '../../../styles/colorPallete';

const ButtonLink = styled(Link)`
  width: auto;
  display: flex;
  justify-content: center;
`;

const styleMenuMobile = {
  color: '#fff',
  fontSize: '36px',
};

const styleButton = {
  background: colorPallete.gradients.purpleRed,
  width: '200px',
  height: '40px',
  fontWeight: 'bold',
};

const styleInputs = {
  width: '100%',
};

const styleSearchButton = {
  width: '100%',
  height: '40px',
};

const Form = styled.form`
  width: 100%;
`;

export {
  ButtonLink,
  styleButton,
  styleInputs,
  styleMenuMobile,
  styleSearchButton,
  Form,
};
