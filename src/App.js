import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//Contexts
import { ProductContext, CartContext } from './contexts'

//hooks
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useLocalStorage('cart', []);
	// const [cartLocal, setCartLocal] = useLocalStorage('cart')

	const addItem = item => {
		setCart([...cart, item]);
		// setCartLocal([cart])
	};

	const removeItem = id => {
		let newCart = cart.filter(item => item.id !== id)
		setCart(newCart)
	}

	return (
		<div className="App">

			<CartContext.Provider value={{ cart, removeItem}}>
				<Navigation cart={cart} />

				<Route
					path="/cart"
					component={ShoppingCart}
				/>
			</CartContext.Provider>

			<ProductContext.Provider value={{ products, addItem}}>
				<Route
					exact
					path="/"
					component={Products}
				/>
			</ProductContext.Provider>

		</div>
	);
}

export default App;
