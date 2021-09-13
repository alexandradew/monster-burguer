import  styled from 'styled-components';

export const ProductsStyled = styled.div`
	background-color: #C4BFAE;
`;

export const ContainerProducts = styled.div`
	height: 100%;
	display:flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	margin:auto;
  	width:1200px;
	padding-top: 130px;
	padding-bottom: 80px;

	@media(max-width: 1000px) {
		width:700px;
  	}

	@media(max-width: 700px) {
		width:400px; 
	}
`;