import React from 'react';

class CartItem extends React.Component {
    constructor() {
        super();

        this.state = {
            title: 'Mobile',
            price: 100000,
            qty: 3,
            img: ''
        }

        // this.increaseQuantity =  this.increaseQuantity.bind(this);
    }

    increaseQuantity = () => {
        console.log("Increase Quantity!", this.state);
    }
    
    render() {
        const {title, price, qty, img} = this.state;

        return (
            <div className = "cart-item"> 
                <div className = "left-block"> 
                    <img src = "" style = {styles.image}/>
                </div>
                <div className = "right-block">
                    <p style = {{fontSize: 25 }}>{title}</p>
                    <p style = {{color: '#777' }}>Rs. {price}</p>
                    <p style = {{color: '#777' }}>Qty. {qty}</p>

                    <div className = "cart-item-actions"> 
                        {/* Action - Buttons */}
                        <img
                            className = "action-icons"
                            alt = "increase"
                            src = "https://image.flaticon.com/icons/png/512/1828/1828926.png"
                            // onClick = {this.increaseQuantity.bind(this)}
                            onClick = {this.increaseQuantity}
                        />
                        <img
                            className = "action-icons"
                            alt = "decrease"
                            src = "https://image.flaticon.com/icons/png/512/1828/1828906.png" 
                        />
                        <img
                            className = "action-icons"
                            alt = "delete" 
                            src = "https://image.flaticon.com/icons/png/512/2089/2089743.png"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 140,
        width: 140,
        borderRadius: 4,
        background: '#ccc'
    }
}


export default CartItem;