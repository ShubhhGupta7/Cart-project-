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

    render() {
        const {products} = this.state;

        return (
            <div className = "cart">
                {   products.map((product) => {
                        return (
                            <CartItem data = {product}
                            key = {product.id} />
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
*/
