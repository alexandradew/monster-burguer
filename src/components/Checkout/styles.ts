import styled from "styled-components";

export const CheckoutStyled = styled.div`
	background-color: #C4BFAE;
	padding-top:20px;
	padding-bottom:20px;
	display: flex;
	flex-direction: column;
	color:#1D1D1F;
	font-size:1.25rem;
	opacity: 0.9;
	width: 1200px;
	height:100vh;
	font-weight: bold;
	justify-content: space-around;

	p{
		text-align: center;
	}

	@media(max-width: 1000px) {
		width:700px;
  	}

	@media(max-width: 700px) {
		width:400px; 
	}

	ul {		
		@media(max-width: 1000px) {
			padding-left: 15px;
			padding-right: 15px;
		}

		@media(max-width: 900px) {
			margin:auto;
			width:500px; 
		}

		@media(max-width: 600px) {
			margin:auto;
			padding-left: 15px;
			padding-right: 15px;
			width:100%; 
		}
	}

	li{
		display: flex;
		justify-content: space-between;
		line-height: 40px;

		background-color: #C4BFAE;
	}

	hr{
		color:#000;
		border:1px solid #1D1D1F;
	}

	h3{
		margin-top: 15px;
	}

	input[type=text]{
		width: 100%;
		border:none;
		height: 40px;
		border-radius: 5px;
		margin-top:10px;
		margin-bottom: 10px;
		padding-left:10px;
		font-size:1.25rem;
	}

	input[type=radio]{
		margin-right: 10px;
		cursor:pointer;
	}

	.checkoutButton{
			text-align: center;
			height: 40px;
			width: 100%;
			border: none;
			border-radius: 10px;
			background-color: #1D1D1F;
			color:#C4BFAE;
			font-size:1.5rem;
			cursor: pointer;
			margin-top: 15px;
			margin-bottom: 15px;
		}

	a{
		color:#1D1D1F;
		text-decoration: none;
	}
`

export const CheckoutContainerStyled = styled.div`
	background-color:#C4BFAE;
	width: 100%;
	min-height:100vh;
	z-index: 999;
	display: flex;
	align-items:center;
	justify-content: center;

	span{
		text-align: center;
	}

`