// GlobalStyles
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

html { 
  background: url('./assets/images/space-and-planets.jpg') no-repeat center center fixed; 
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
  background-size: contain;
  background-repeat: repeat
}

  body {
    font-family: 'open sans', sans-serif;
    font-size: 16px;
    text-align: center;
  }

  h1 {
    color: #ffffff;
  }
`

export default GlobalStyle
