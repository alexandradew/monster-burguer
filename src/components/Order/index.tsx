import { useContext } from 'react';
import { CartContext } from '../../CartContext';
import { OrderStyled, OrderContainerStyled } from './styles';

export default function Order(){
	const { products, total, handleProducts, handleSubtractProduct, handleRemoveProduct } = useContext(CartContext);

  return(
		<OrderContainerStyled>
		<OrderStyled>
			{ total && total > 0 ? 
			<ul>
				{products?.map((product, index) => (
				<>
					<li key={index}>
						<div>	
							<button className="removeButton" onClick={() => handleRemoveProduct(product)}>X</button> 
							{product.name} x{product.totalItem} - R$ {product.price * product.totalItem},00 
						</div>
						<div>
							<button onClick={() => handleSubtractProduct(product)}>-</button>
							<input type="text" value={product.totalItem} readOnly/>
							<button onClick={() => handleProducts(product)}>+</button>
						</div>		
					</li>
					<hr></hr>				
				</>					
      ))}
			</ul>
			: 
			<p>Você ainda não adicionou nada ao pedido.</p>
			}
		</OrderStyled>
	</OrderContainerStyled>
	)
}