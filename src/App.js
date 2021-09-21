import React from 'react';
import Cart from './Cart';
import NavBar from './NavBar';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
        products: [
            {
                title: 'Mobile',
                price: 999,
                quantity: 1,
                image: '', 
                id: 1
            },
            {
                title: 'Watch',
                price: 99,
                quantity: 10,
                image: '',
                id: 2
            },
            {
                title: 'Laptop',
                price: 100000,
                quantity: 3,
                image: '', 
                id: 3
            }
        ]
      }
}

// Child Component State handler and pass it to Child Component using props.
// handleIncrementQuantity
incrementQuantityHandler = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);
    products[index].quantity += 1;

    this.setState({
        products: products
        // As key and value have same value we can use the shorthand that means just write products instead of products: products
    });
}

// handleDecrementQuantity
decrementQuantityHandler = (product) => {
    if(product.quantity == 0) {
        return;
    }

    const {products} = this.state;
    const index = products.indexOf(product);
    products[index].quantity -= 1;

    this.setState({
        products
    });
}

// handleDeleteProduct
deleteProductHandler = (id) => {
    const {products} = this.state;

    const items = products.filter((item) => item.id !== id); 
    // [{}] this filter our products array where id is not equal to the id of deleted product.

    this.setState({
        products: items
    });
}

getCount = () => {
  var count = 0;
  const {products} = this.state;

  products.forEach((product) => {
    count += product.quantity;
  })
 
  return count;
}

getTotal = () => {
  var total = 0;
  const {products} = this.state;

  products.forEach((product) => {
    total += product.quantity * product.price;
  })
 
  return total;
}

render() {
  return (
    <div className = "App">
      <NavBar itemCount = {
        this.getCount()
      }
    />
      <Cart 
        data = {this.state}
        onIncreaseQuantity = {
          this.incrementQuantityHandler
        }
        onDecreaseQunatity = {
            this.decrementQuantityHandler
        }
        onDeleteProduct = {
            this.deleteProductHandler
        }
    />
      <div style = {{color: 'black',
                    fontWeight: 'bold',
                    margin: 30
                    }}>TOTAL: {this.getTotal()}</div>
      </div>
    );
  }
}
  
export default App;
