import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/Header';
import Products from './components/Products';
import OrderMenu from './components/OrderMenu';
import Checkout from './components/Checkout';

import { GlobalStyle } from './styles'

import { CartContextProvider }  from './CartContext';

function Home(){
  return(
    <>      
      <Header/>
      <Products/>
      <OrderMenu/>
    </>
  )
}

function App() {
  return (
    <CartContextProvider>  
      <GlobalStyle/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/finalizar" component={Checkout}/>

          <Home/>


        </Switch>
      </Router>
    </CartContextProvider>
  );
}

export default App;
