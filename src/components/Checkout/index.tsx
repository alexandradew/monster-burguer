import { Link } from 'react-router-dom';
import { useContext, useState } from "react";
import { CartContext } from "../../CartContext";
import Header from "../Header";
import { CheckoutStyled, CheckoutContainerStyled } from "./styles";
import { useEffect } from 'react';

export default function Checkout(){
	const { products } = useContext(CartContext);
	const [ address, setAddress ] = useState<string>('');
	const [ payment, setPayment ] = useState<string>('');
	const [ isCartEmpty, setIsCartEmpty] = useState(true)

	useEffect(() => {
		let v = products?.length || 0
		if(v > 0){
			setIsCartEmpty(false)
		}else{
			setIsCartEmpty(true)
		}
	}, [products])

	function handleAddress(e: React.ChangeEvent<HTMLInputElement>) {
		console.log(e.target.value);
		setAddress(e.target.value);
	}

	function handlePayment(e: React.ChangeEvent<HTMLInputElement>) {
		console.log(e.target.id);
		setPayment(e.target.id);
	}

	function sendOrder(){
		var url = "https://api.whatsapp.com/send?phone=5541995253547&text=";
		var order = "@@ PEDIDO MONSTER BURGUER @@ \r\n";

		products?.forEach((prod) => {
			order = order + prod.name + " " + prod.totalItem + "x \r\n";
		});

		order = order + "No endereço: " + address + "\r\n";
		order = order + "Forma de pagamento: " + payment + "\r\n";

		url = encodeURI(url + order)
		
		window.open(url, "_blank");
	}

  return(
		<>
		<Header />
		<CheckoutContainerStyled>
			<CheckoutStyled>
				{ !isCartEmpty ? 
				<ul>
				{ products?.map((product, index) => (
					<>
						<li key={index}>
						<div>								
							{product.name} - {product.totalItem}x
						</div>
						<div>
							R$ {product.totalItem * product.price},00
						</div>		
					</li>
					<hr></hr>				
					</>
					))}
					<h3>Quase lá... informe o endereço de entrega:</h3>
					<input type="text" placeholder="Endereço" value={address} onChange={handleAddress}/><br></br>
					<label>
						Cartão <input type="radio" id="cartao" name="payment" onChange={handlePayment}/>
					</label>
					<label>
						Pix <input type="radio" id="pix" name="payment" onChange={handlePayment}/>
					</label>
					<label>
						Dinheiro <input type="radio" id="dinheiro" name="payment" onChange={handlePayment}/>
					</label>
					<br></br>
					<button className="checkoutButton" onClick={sendOrder}>Enviar pedido</button><br></br>
					<Link to="/">Esqueci de algo, voltar ao cardápio</Link>
				</ul>				
				:
				<span><Link to="/">Você não tem nada no pedido, clique para voltar ao cardápio.</Link></span>
				}
			</CheckoutStyled>
		</CheckoutContainerStyled>
		</>
  )
}