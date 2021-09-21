import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
    const {products} = props.data;

    const {
        onIncreaseQuantity,
        onDecreaseQunatity,
        onDeleteProduct
    } = props;

    return (
        <div className = "cart">
            {   products.map((product) => {
                    return (
                        <CartItem data = {product}
                            key = {product.id}
                            
                            onIncreaseQuantity = {
                                onIncreaseQuantity
                            }
                            onDecreaseQunatity = {
                                onDecreaseQunatity
                            }
                            onDeleteProduct = {
                                onDeleteProduct
                            }
                        />
                    )
                }) 
            } 
        </div>
    );
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
