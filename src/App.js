import NavBar from './NavBar';
import React from "react";
import Cart from "./Cart";
import firebase from "firebase/app";
import firestore from "firebase";

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
        products: [],
		loading: true
    }

	this.db = firebase.firestore();
}

// This is how we can query firebase for products fileration.

query() {
	this.db
	.collection('products')
	// This is where we query and group then with multiple where as we do in sql example:
	// .where(field, relation, value)
	.where('price', '>=', 999)
	.where('title', '==', 'Mug')
	// to sort the data we use orderBy
	.orderBy('price')
	// .orderBy('price', 'asc')
	// .orderBy('price', 'desc')
	.get()
	.then({
		// Code
	})
}

// Reading from Firebase.

// Reading the data from the firebase or db when our component it mounting for first time.
// It will use http call and get the data from firebase.
// get function basically returns promise which we resolve here.
componentDidMount() {
	// firebase
	// .firestore()
	// .collection('products')
	// .get()
	// .then((snapshot) => {
	// 	console.log(snapshot);

	// 	snapshot.docs.map((doc) => {
	// 		console.log(doc.data());
	// 	})

	// 	const products = snapshot.docs.map((doc) => {
	// 		const data = doc.data();
	// 		data['id'] = doc.id;
	// 		return data;
	// 	});

	// 	this.setState({
	// 		products: products,
	// 		loading: false
	// 	})
	// });

	// Above code will only get the value from the db when the component was very first rendered.
	// If we want to sync all the devices should update there data or we can say snapshot as our db is updated then we attach listener to our firebase call.
	// For doing so we change get by getSnapshot.

	firebase
	.firestore()
	.collection('products')
	.onSnapshot((snapshot) => {
		console.log(snapshot);

		snapshot.docs.map((doc) => {
			console.log(doc.data());
		})

		const products = snapshot.docs.map((doc) => {
			const data = doc.data();
			data['id'] = doc.id;
			return data;
		});

		this.setState({
			products: products,
			loading: false
		})
	});
}

// Child Component State handler and pass it to Child Component using props.
// handleIncrementQuantity
incrementQuantityHandler = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);
    // products[index].quantity += 1;

    // this.setState({
    //     products: products
    //     // As key and value have same value we can use the shorthand that means just write products instead of products: products
    // });

	// updating to Firebase.

	const docRef = this.db
					.collection('products')
					.doc(products[index].id);
	docRef
		.update({
			quantity: products[index].quantity + 1
		}).then(() => {
			console.log('Successfully updated the quantity!');
		}).catch((error) => {
			console.log('Error in updating the quantity!', error);
		})

}

// handleDecrementQuantity
decrementQuantityHandler = (product) => {
    if(product.quantity == 0) {
        return;
    }

    const {products} = this.state;
    const index = products.indexOf(product);
    // products[index].quantity -= 1;

    // this.setState({
    //     products
    // });

	const docRef = this.db
					.collection('products')
					.doc(products[index].id);
	docRef
		.update({
			quantity: products[index].quantity - 1
		}).then(() => {
			console.log('Successfully updated quantity in db');
		}).catch((error) => {
			console.log('Error in updating the quantity', error);
		})
}

// handleDeleteProduct
deleteProductHandler = (id) => {
    const {products} = this.state;

    // const items = products.filter((item) => item.id !== id); 
    // // [{}] this filter our products array where id is not equal to the id of deleted product.

    // this.setState({
    //     products: items
    // });

	const docRef = this.db
					.collection('products')
					.doc(id);
	
	docRef
		.delete()
		.then(() => {
			console.log('Successfully Deleted product from the cart!');
		})
		.catch((error) => {
			console.log('Error in deleting product from the cart', error);
		})

	// To delete a field from an document we basically call the update method shown below:
	// docRef.update({
	// 	capital: firebase.firestore.FieldValue.delete()
	// })
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

// Adding to Firebase.

addProduct = () => {
	this.db
	.collection('products')
	.add({
		image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQ052?wid=4000&hei=1800&fmt=jpeg&qlt=95&.v=1495129815011',
		quantity: 2,
		title: 'Keyboard',
		price: 37000
	})
	.then((docRef) => {
		console.log(docRef, " Product has been added!");
	}).catch((error) => {
		console.log(error, " Error in adding product to db!");
	})
}

render() {
	const {products, loading} = this.state;

    return (
		<div className = "App">
		<NavBar itemCount = {
			this.getCount()
		}
		/>

		<button 
			onClick = {this.addProduct}
			style = {{padding: '1rem', margin: '1rem '}}
		>
				Add logitech keyboard</button>

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

		{(loading && <h1>loading products...</h1>)}

		<div style = {{color: 'black',
			fontWeight: 'bold',
			margin: 30
			}}>TOTAL: {this.getTotal()}</div>
		</div>
		);
	}
}
  
export default App;

/*
We use class to create react component when we have to set state and handler functions,
and we use functions to create react component where we have to pass props only.

State have a single flow that is parent child so if we have to use state of any component to it's sibling component than we move to the state of current component to there common parent so that both can assess the state.

Prefer to visualize react component in form of a tree to have clearity of component states and the hererichy of the components in our app. 
*/ 
