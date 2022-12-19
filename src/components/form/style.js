import colorPallete from '../../styles/colorPallete';

const styleCard = {
  padding: 2,
  width: {
    xs: '100%',
    sm: '50%',
    md: '35%',
  },

  height: {
    xs: '100%',
    sm: 'auto',
  },

  borderRadius: {
    xs: '0px',
    sm: '4px',
  },
};

const styleValidations = {
  color: colorPallete.error,
  fontSize: '12px',
};

export { styleCard, styleValidations };
