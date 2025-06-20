import backImage from '@/shared/assets/images/35ed857f7d1226b96fdb5ff8214a6782.jpg'
import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`

  body {
    font-family: 'Poppins', sans-serif;
    color: white;
    margin: 0;
    overflow-x: hidden;
    box-sizing: border-box;
    background-image: url(${backImage});
    background-repeat: no-repeat;
    background-size: cover;

  }

  #root {
    overflow-y: auto;
    overflow-x: hidden;
  }

  ul,
  li {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  img {
    pointer-events: none;
    user-select: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
