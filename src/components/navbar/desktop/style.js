import colorPallete from '../../../styles/colorPallete';
import styled from '@emotion/styled';
import { Grid } from '@mui/material';

const styleBackground = {};

const ContainerOptions = styled(Grid)`
  display: ${({ toShow }) => (toShow ? 'flex' : 'none')};
`;

export { styleBackground, ContainerOptions };
