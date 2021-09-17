import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    render() {
        var items = [1, 2, 3, 4, 5];

        return (
            <div className = "cart">
                {items.map((item) => {
                    return item + 5;
                })}
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
*/
