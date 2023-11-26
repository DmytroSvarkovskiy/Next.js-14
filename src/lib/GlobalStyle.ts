import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`

  html {
    scroll-behavior: smooth;
}

  ul,h1,h2,h3,h4,h5,h6,li,p {
    list-style:none;
    margin:0;
    padding:0};

  img {
    display:block;
    width:100%;
};

 a {
   text-decoration: none;
   color: inherit
 };

.visually-hidden {
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
};

body {
  font-family: 'Fixel Display', sans-serif;
    display:flex;
    /* justify-content:center; */
    background-color:#F5F8FA;
    color:#1E1C2C;
 
};
  *,
 ::before,
 ::after {
   box-sizing: border-box;
 }
 `;
