import {createGlobalStyle} from 'styled-components'
 
const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: center;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;
 
export default GlobalStyle