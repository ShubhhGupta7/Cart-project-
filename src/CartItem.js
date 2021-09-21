import React from 'react';

class CartItem extends React.Component {
    
    // These functions cannot be used if we don't have have state of the component, then we have to handle those event in the parent component and pass than hadler as props.
    increaseQuantity = () => {
        
        // setState Form1 
        // this.setState({
        //     quantity: this.state.quantity + 1
        // });

        // setState Form2
        this.setState((prevState) => {
            return {
                quantity: prevState.quantity + 1
            }
        });

        console.log(this.state);
    }

    decreaseQuantity = () => {
        if(this.state.quantity === 0) {
            return;
        }

        // setState Form1
        // this.setState({
        //     quantity: this.state.quantity - 1
        // });

        // setState Form2 
        this.setState((prevState) => {
            return {
                quantity: prevState.quantity - 1
            }
        });

        console.log(this.state);
    }

    render() {

        // Javascript Object Destructuring.
        const {title, price, quantity} = this.props.data;
        const {data,
               onIncreaseQuantity,
               onDecreaseQunatity,
               onDeleteProduct} = this.props;
        return(
            <div className = "cart-item">
                <div className = "left-block">
                    <img style = {style.image} />
                </div>

                <div className = "right-block">
                    <span style = {{fontSize: 25}}>
                        {title}
                    </span>
                    <span style = {{color: '#777'}}>
                        Rs. {price}
                    </span>
                    <span style = {{color: '#777'}}>
                        Qty. {quantity}
                    </span>

                    <div className = "cart-item-actions">
                        <img className = "action-icons"
                             src = "https://image.flaticon.com/icons/png/512/1828/1828926.png"
                             alt = "increase quantity"

                            //  onClick = {this.increaseQuantity}
                            onClick = {() => {
                                onIncreaseQuantity(data)}}
                        />
                        <img className = "action-icons"
                             src = "https://image.flaticon.com/icons/png/512/1828/1828906.png"
                             alt = "decrease quantity"

                            //onClick = {this.decreaseQuantity}
                            onClick = {() => {
                                onDecreaseQunatity(data)}}
                        />
                        <img className = "action-icons"
                             src = "https://image.flaticon.com/icons/png/512/1214/1214428.png"
                             alt = "remove item"

                             onClick = {() => {
                                onDeleteProduct(data.id)}}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const style = {
    image: {
        height: 140,
        width: 140,
        background: '#ccc',
        borderRadius: 4
    }
}

export default CartItem;

/* 
We have used an arrow function for 
onClick = {this.incrementQuantity}
function, The reason behind this was:

1. Calling this.incrementQuantity will be called internally by react like 
const func = this.incrementQuantity;
func();

2. Doing such practise we will loose the refernce to this, ultimately resulting in a error.

3. To get rid for such a problem we will use binding.

4. 1st we can write 
    onClick = {this.incrementQuantity.bind(this)} instead of above call.

    2nd can be we can bind this function in constructor itself and call it like above in the main call.

    $Binding in Constructor.
    this.incrementQuantity = this.incrementQuantity.bind(this);

    3rd Way is to use arrow functions instead of normal functions which we will be using through the couse.

    Call will be same as above. But function declaration will be like:
    increamentQuantity = () => {}

    // In react setState in function handlers are asyncronuous whereas setState in ajax call and promises are syncronous.

We have two forms of setState function in an component 
    1. setState({jsObject}) this function takes object and change the state using shallow merging

    This form is used when we have to update state independently without using any previous state.

    2. setState(() => { return {jsObject}}) this function takes an arrow function in which react passes prevState as argument.

    This arrow function return jsObject and it also uses shallow merging.

    This form is used when our current state is dependent on the prev state.

    Shallow merging basically means that only the updated keys of the current state is changed else keys are not updated and touched.

    // It is a good practice when we get state from parent component we use java script object desturcturing.
*/