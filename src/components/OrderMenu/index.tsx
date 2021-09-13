import { useState } from "react";
import { OrderMenuStyled, OrderMenuContainerStyled } from "./styles";
import Order from "../Order/";
import { useContext } from "react";
import { CartContext } from "../../CartContext";
import { useEffect } from "react";

import {
  Link
} from "react-router-dom";

export default function OrderMenu() {
	const [showOrder, setShowOrder] = useState(false);
	const [showOrderMenu, setShowOrderMenu] = useState(false);

	const { total } = useContext(CartContext);

	useEffect(() => {
		handleShowMenu();
	})


	function handleShowMenu(){
		if(total){
			if(total > 0){
				setShowOrderMenu(true);
			}
		}
	}

	function handleShowOrder(){
		setShowOrder(!showOrder);
	}

	return(
		<>		
		{ showOrder && <Order/> }
		{ showOrderMenu &&
		<OrderMenuStyled>			
			<OrderMenuContainerStyled>
				<>
				{ !showOrder ? 
				<button onClick={handleShowOrder}>Mostrar pedido</button> 
				: 
				<button onClick={handleShowOrder}>Fechar pedido</button> }
				<Link className="checkoutButton" to="/finalizar"><button>Finalizar</button></Link>
				</>				
			</OrderMenuContainerStyled>
		</OrderMenuStyled>	
		}
		</>
	)
}