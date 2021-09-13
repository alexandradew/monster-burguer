import styled from 'styled-components';

export const OrderStyled = styled.div`
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

	@media(max-width: 600px) {
		font-size: 1.1rem;
	}

	p{
		text-align: center;
	}

	.removeButton{
		margin-right: 15px;
	}

	
	@media(max-width: 1000px) {
		width:900px; 
	}

	@media(max-width: 900px) {
		width: 100%;
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


		input{
			background-color: #FFF;
			width: 50px;
			margin-right: 15px;
			margin-left: 15px;
			border:none;
			font-size:1.5rem;
			text-align: center;

			@media(max-width: 600px) {
				font-size: 1.1rem;
				margin-right: 0px;
				margin-left: 0px;
			}


		}

		button{
			border:none;
			width: 25px;
			padding:0px;
			font-weight: bold;
			font-size:1.5rem;
			cursor: pointer;
			color:#FFF;
			background-color: #1D1D1F;

			@media(max-width: 600px) {
				font-size: 1.1rem;
			}


		}

		background-color: #C4BFAE;
	}

	hr{
		color:#000;
		border:1px solid #1D1D1F;
	}

`

export const OrderContainerStyled = styled.div`
	top: 0px;
	position: fixed;
	width: 100%;
	height:100vh;
	z-index: 999;
	display: flex;
	align-items:center;
	justify-content: center;

`