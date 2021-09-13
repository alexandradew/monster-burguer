import {createContext, ReactNode, useState } from 'react';

interface Product {
	id: number;
	name: string;
	img: string;
	description: string;
	price: number;
	totalItem: number;
}

interface Cart {
	products?: Product[],
	total?: number,
	handleProducts: (product: Product) => void;
	handleSubtractProduct: (product: Product) => void;
	handleRemoveProduct: (product: Product) => void;
}

interface CartProvider {
	children: ReactNode;
}

export const CartContext = createContext<Cart>({} as Cart);

export function CartContextProvider({ children }: CartProvider){
	const [products, setProducts] = useState<Product[]>([] as Product[]);
	const [total, setTotal] = useState<number>(0);

	function handleProducts (product: Product) {
		let newProducts = products;
		let prodCheck = products.find(prodCheck => prodCheck.id === product.id);

		if(prodCheck !== undefined){
			newProducts.forEach(el => {
				if(el.id === product.id){
					el.totalItem = product.totalItem + 1;
				}
			}) 

			setProducts([ ...newProducts ]);
			handleTotal(product.price);
		}else{
			console.log("else");
			setProducts([ ...products, {
				id: product.id, 
				name: product.name, 
				img: product.img, 
				description: product.description, 
				price: product.price, 
				totalItem: 1
			}]);
			handleTotal(product.price);
		}
	}

	function handleSubtractProduct(product: Product){

		let newProducts = products;
		let prodCheck = products.find(prodCheck => prodCheck.id === product.id);

		if(prodCheck !== undefined){
			newProducts.forEach(el => {
				if(el.id === product.id){
					if(product.totalItem > 1){
						el.totalItem = product.totalItem - 1;
						handleSubtractTotal(product.price);
					}
				}
			}) 

			setProducts([ ...newProducts ]);

		}

	}

	function handleRemoveProduct(product: Product){

		let newProducts = products;
		let prodCheck = products.find(prodCheck => prodCheck.id === product.id);

		if(prodCheck !== undefined){
			newProducts.forEach((el, index) => {
				if(el.id === product.id){
					newProducts.splice(index, 1);	
					setTotal(total - (el.price * el.totalItem));
				}
			})

			setProducts([ ...newProducts ]);
		}

	}

	function handleTotal(plus: number){
		setTotal(total + plus);
	}
	
	function handleSubtractTotal(minus: number){
		setTotal(total - minus);
	}

  return(
    <CartContext.Provider value={{ products, total, handleProducts, handleSubtractProduct, handleRemoveProduct }}>
     {children}
    </CartContext.Provider>
  )
}