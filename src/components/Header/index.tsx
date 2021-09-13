import { Link } from 'react-router-dom';
import { HeaderStyled } from './styles';
import { Container } from '../../styles';
import Logo from '../../assets/logo.svg';
import { useContext } from 'react';
import { CartContext } from '../../CartContext';

export default function Header() {
	const { total } = useContext(CartContext);
  return(
		<HeaderStyled>
			<Container>
				<section>
					<div>
						<Link to="/">
							<img src={Logo} alt="Monster Burg" width="80px"/>
						</Link>
					</div>
					<div>
						Pedido: R$ {total} 
					</div>
				</section>
			</Container>
		</HeaderStyled>
  )
}