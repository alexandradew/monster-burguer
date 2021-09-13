import styled from 'styled-components';

export const OrderMenuStyled = styled.div`
  width: 100%;
  background-color: #FFF;
  color:#1D1D1F;
  position: fixed;
  bottom:0; 
	z-index:9999 ;
`
export const OrderMenuContainerStyled = styled.div`
	margin:auto;
  height: 60px;
  width: 1200px;
	display: flex;
  justify-content: space-around;
	align-items: center;

	@media(max-width: 1000px) {
		width:700px;
  	}

	@media(max-width: 700px) {
		width:400px; 
	}

		button{
      		height: 40px;
			width: 49%;
			border: none;
			border-radius: 10px;
			background-color: #1D1D1F;
			color:#C4BFAE;
			font-size:1.5rem;
			cursor: pointer;
		}

		.checkoutButton{
			text-align: center;
			height: 40px;
			width: 49%;
			border: none;
			border-radius: 10px;
			background-color: #1D1D1F;
			color:#C4BFAE;
			font-size:1.5rem;
			cursor: pointer;
		}


`