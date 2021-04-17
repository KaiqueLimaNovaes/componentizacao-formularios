import {ThemeProvider} from 'styled-components';

import './App.css';
import GlobalStyle from './styles/global.tsx';
import theme from './styles/theme.tsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>Componentização de formulários</h1>
    </ThemeProvider>
  );
}

export default App;
