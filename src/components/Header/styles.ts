import styled from 'styled-components';

export const HeaderStyled = styled.header`
	margin:0;
	padding:0;
	width:100%;
	height: 100px;
	background-color:#FFF;
	color:#1D1D1F;
	font-size:1.5rem;
	position: fixed;
	z-index: 9999;

	section{
		display: flex;
		justify-content: space-between;
		align-items:center;
		height: 50px;
		min-height: 50px;
		height: 100px;

		@media(max-width: 600px) {
			margin:auto;
			padding-left: 15px;
			padding-right: 15px;
			width:100%; 
		}
	}

	a {
		color:#1D1D1F;
	}
`;
