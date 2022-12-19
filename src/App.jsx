import { GlobalStyles } from '@mui/material';
import styleGlobal from './styles/globalStyles';

import PublicRoutes from './routes/public.routes';
const inputGlobalStyles = <GlobalStyles styles={styleGlobal} />;

const App = () => {
  return (
    <>
      {inputGlobalStyles}
      <PublicRoutes />
    </>
  );
};

export default App;
