import React from 'react'

class NavBar extends React.Component {
    render() {
        return(
            <div className = {styles.nav}> 
                <div className = {styles.cartIconContainer}>
                    <img alt = "cart-icon"
                        src = "https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
                        className = {styles.cartIcon}
                    />
                    <span className = {styles.cartCount}>3</span>
                </div>
            </div>
        );
    }
}

export default NavBar;

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