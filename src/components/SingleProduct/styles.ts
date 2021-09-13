import  styled from 'styled-components';

export const SingleProductStyled = styled.div`
	background-color:#C4BFAE;
	color:#1D1D1F;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	width: 350px;
	border-radius:15px;
	padding:25px;

	font-size: 1.25rem;

	img{
		border-radius: 15px;
	}

	h2{
		margin:15px 0px 15px 0px;
	}

	span{
		font-weight: bold;
		margin-top: 10px;
		font-size: 1.40rem;
	}

	button{
		margin-top:15px;
		border: none;
		border-radius: 10px;
		background-color: #1D1D1F;
		color:#C4BFAE;
		height: 50px;
		font-size:1.5rem;
		cursor: pointer;
	}

	e{
		margin-bottom: 25px;
	}

`;