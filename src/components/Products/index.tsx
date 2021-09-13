import { ProductsStyled, ContainerProducts } from './styles';
import SingleProduct from '../SingleProduct';
import ProductImage from '../../assets/pexels-valeria-boltneva-1639557.jpg';

export default function Products () {
	return(
		<ProductsStyled>
			<ContainerProducts>
				<SingleProduct 
				id={1} 
				name={'X-Burguer'}
				img={ProductImage}
				description={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'}
				price={15.00}
				totalItem={0}
				/>
				<SingleProduct 
				id={2} 
				img={ProductImage}
				name={'X-Salada'}
				description={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'}
				price={20.00}
				totalItem={0}
				/>
				<SingleProduct 
				id={3} 
				img={ProductImage}
				name={'X-Tudo'}
				description={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'}
				price={25.00}
				totalItem={0}
				/>
				<SingleProduct 
				id={4} 
				name={'X-Brigadeiro'}
				img={ProductImage}
				description={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'}
				price={28.00}
				totalItem={0}
				/>
				<SingleProduct 
				id={5} 
				img={ProductImage}
				name={'X-Pastel'}
				description={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'}
				price={22.00}
				totalItem={0}
				/>
				<SingleProduct 
				id={6} 
				img={ProductImage}
				name={'X-Cenoura'}
				description={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'}
				price={13.00}
				totalItem={0}
				/>
		</ContainerProducts>
	</ProductsStyled>
	)
}