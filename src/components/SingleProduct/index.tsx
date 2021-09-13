import { SingleProductStyled } from './styles';
import { CartContext } from '../../CartContext';
import { useContext } from 'react';

interface SingleProductProps {
	id: number;
	name: string;
	img: string;
	description: string;
	price: number;
	totalItem: number;
}

export default function SingleProduct ({id, name, img, description, price, totalItem}: SingleProductProps) {
	const { handleProducts, products } = useContext(CartContext);

	products?.forEach(element => {
		if(element.id === id){
			totalItem = element.totalItem;
		}
	});

	const product = {
		id,
		name,
		img,
		description,
		price,
		totalItem
	}
	
	return(
		<SingleProductStyled key={id}>
			<img src={img} width="100%" alt={description}/>
			<h2>{name}</h2>
			<p>{description}</p>
			<span>R$ {price}</span> {totalItem} no pedido			
			<button onClick={() => handleProducts(product)}>Adicionar ao pedido</button>
		</SingleProductStyled>
	)
}