import React from 'react'

// Creating react Component usint functions.
const Navbar = (props) => {
        return(
            <div style = {styles.nav}> 
                <div style = {styles.cartIconContainer}>
                    <img alt = "cart-icon"
                        src = "https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
                        style = {styles.cartIcon}
                    />
                    <span style = {styles.cartCount}>{props.itemCount}</span>
                </div>
            </div>
        );
}

export default Navbar;

const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }
};