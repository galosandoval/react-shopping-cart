import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

//Context
import { ProductContext } from "./contexts/ProductContext";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

	console.log(products)
	console.log(cart);

  const addItem = (item) => {
    // add the given item to the cart
    setCart(...cart.push(item));
  };

  return (
    <ProductContext.Provider value={{products, addItem}}>
      <div className="App">
        <Navigation cart={cart} />

        {/* Routes */}
        <Route exact path="/">
          <Products />
        </Route>

        <Route path="/cart">
          <ShoppingCart cart={cart} />
        </Route>
      </div>
    </ProductContext.Provider>
  );
}

export default App;
