import React from 'react';

class CartItem extends React.Component {
    render() {
        return (

            <div className = "cart-item"> 
                <div className = "left-block"> 
                    <img src = "" style = {styles.image}/>
                </div>
                <div className = "right-block">
                    <p style = {{fontSize: 25 }}>Product Name</p>
                    <p style = {{color: '#777' }}>Product Price</p>
                    <p style = {{color: '#777' }}>Product Quantity</p>

                    <div className = "cart-item-actions"> 
                        {/* Action - Buttons */}
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}


export default CartItem;