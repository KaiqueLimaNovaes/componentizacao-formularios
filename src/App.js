import {ThemeProvider} from 'styled-components';

import GlobalStyle from './styles/global.tsx';
import theme from './styles/theme.tsx';
import Forms from './pages/Forms'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Forms />
    </ThemeProvider>
  );
}

export default App;
