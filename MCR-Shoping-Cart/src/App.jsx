import "./index.css";
import { useState } from "react";
export default function App() {
  //
  let [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 10, isAddToCart: false, quantity: 0 },
    { id: 2, name: "Headphones", price: 10, isAddToCart: false, quantity: 0 },
    { id: 3, name: "Keyboard", price: 10, isAddToCart: false, quantity: 0 },
    { id: 4, name: "Mouse", price: 10, isAddToCart: false, quantity: 0 },
  ]);
  let [cartItems, setCartItems] = useState([]);
  // let [isAddToCart, setIsAddToCart] = useState(false);
   console.log("Products-->", products);
  console.log("Cart Items-->", cartItems);

  //Add product to cart
  function handleAddToCart(id) {
    let isProductPresent = cartItems.find((item) => item.id == id);
    //console.log("isProductPresent-->", isProductPresent);
    if (isProductPresent) {
      return;
    }
    let filteredProduct = products.find((p) => p.id == id);
    //console.log("Add to cart vala product", filteredProduct);

    setCartItems((prev) => [
      ...prev,
      {
        ...filteredProduct,
        isAddToCart: true,
        quantity: filteredProduct.quantity + 1,
      },
    ]);
    //
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, isAddToCart: true, quantity: item.quantity + 1 }
          : item,
      ),
    );
  }

  // Delete Product from cart
  function handleDelete(id) {
    let filteredProduct = cartItems.filter((item) => item.id != id);
    setCartItems(filteredProduct);
    setProducts((prev) =>
      prev.map((item) =>
        item.id == id ? { ...item, quantity: item.quantity - 1 } : item,
      ),
    );
  }

 let grandTotal = cartItems.reduce((acc , current)=> { return acc + current.quantity * current.price}, 0)
 console.log("grandTotal-->" ,grandTotal)
  return (
    <div className="App">
      <h1>ShoPing Cart | MCR DAY 10</h1>
      {/* Display Products */}
       <h1>Product Page</h1>
      <div className="products-container">
       
        {products.map((product) => {
          return (
            <div className="product" key={product.id}>
              <span>{product.name}</span>
              <span>{product.price}</span>
              {/* Add to cart */}
              {product.quantity > 0 ? (
                <button onClick={() => handleDelete(product.id)}>
                  Remove from cart
                </button>
              ) : (
                <button onClick={() => handleAddToCart(product.id)}>
                  Add to Cart
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* DISPLAY CART ITEMS */}
      <div className="cart-section">
        <h1>Your Cart Items</h1>
        {cartItems.length == 0 ? (
          <h1 className="red">Cart is Empty</h1>
        ) : (
          <div className="cart-items">
            {cartItems.map((product) => {
              return (
                <div className="cart-item" key={product.id}>
                  <div className="cart-top">
                    <span>{product.name}</span>
                    <span>{product.price}</span>
                  </div>
                  {/* CART BUTTONS */}
                  <div className="cart-btns">
                      <div className="quantity-btns">
                             <button
                      onClick={() =>
                        setCartItems((prev) =>
                          prev.map((item) =>
                            item.id == product.id
                              ? { ...item, quantity: item?.quantity - 1 }
                              : item,
                          ),
                        )
                      }
                    >
                      -
                    </button>
                    {product.quantity > 0 ? product.quantity : 0}
                    <button
                      onClick={() =>
                        setCartItems((prev) =>
                          prev.map((item) =>
                            item.id == product.id
                              ? { ...item, quantity: item?.quantity + 1 }
                              : item,
                          ),
                        )
                      }
                    >
                      +
                    </button>
                      </div>
                    <button onClick={() => handleDelete(product.id)}>
                      Remove
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}
        <div className="grand-total">
          <div className="total">{
            <h3>Grand Total: {grandTotal > 0 ? grandTotal : 0}</h3>
            }</div>
        </div>
      </div>
    </div>
  );
}
