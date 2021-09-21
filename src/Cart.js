import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
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

    render() {
        const {products} = this.state;

        return (
            <div className = "cart">
                {   products.map((product) => {
                        return (
                            <CartItem data = {product}
                            key = {product.id}
                            
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
                        )
                    }) 
                } 
            </div>
        );
    }
}

export default Cart;

/*
If we have an array arr with elements and we have to display all the elements of the array we should just use:
    {arr} im jsx

If we want all the elements of the array with a add of 5 then we use and function map
    {arr.map(elem) {
        return elem + increment;
    }}

Props are basically same as arguments in an function call.
1st way <component name = {} class = {} .. />
2nd way <component data = {product } 
3rd products.map((product) => {
    return (
        <CartItem data = {product}
    )
});
const {} = this.props;

// we can send jsx, function boolean, component etc along with state using prop.
// we always send key along with prop to child component from parent component as it is used internally to uniquenly distinguish between elements of same subset.

// When we delete an Child-Component (Component) we don't delete it, Instead we just rerender our state by filtering it.
*/
