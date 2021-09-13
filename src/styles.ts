import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
		font-family: 'Roboto', sans-serif;
  }`;

export const Container = styled.div`
	margin:auto;
  width:1200px;


 @media(max-width: 1000px) {
	width:700px; 
}

 @media(max-width: 900px) {
	width:400px; 
}
`;

