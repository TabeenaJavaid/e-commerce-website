import React,{ useState} from 'react';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import  jacket1 from './Components/Images/jacket1.jpg'
import  jacket2 from './Components/Images/jacket2.jpg'
import jacket3  from './Components/Images/jacket3.jpg'
import  jacket4 from './Components/Images/jacket4.jpg'
import Shirt1 from './Components/Images/Shirt1.jpg'
import Shirt2 from './Components/Images/Shirt2.jpg'
import Shirt3 from './Components/Images/Shirt3.jpg'
import Jeans1 from './Components/Images/Jeans1.jpg'
import Jeans2 from './Components/Images/Jeans2.jpg'
import Jeans3 from './Components/Images/Jeans3.jpg'
import Jeans4 from './Components/Images/Jeans4.jpg'
import Jeans5 from './Components/Images/Jeans5.jpg'
import FormalPant1 from './Components/Images/FormalPant1.jpg'
import FormalPant2 from './Components/Images/FormalPant2.jpg'
import FormalPant3 from './Components/Images/FormalPant3.jpg'
import FormalPant4 from './Components/Images/FormalPant4.jpg'
import FormalPant5 from './Components/Images/FormalPant5.jpg'
import FormalPant6 from './Components/Images/FormalPant6.jpg'
import Tshirt1 from './Components/Images/Tshirt1.jpg'
import Tshirt2 from './Components/Images/Tshirt2.jpg'
import Tshirt3 from './Components/Images/Tshirt3.jpg'
import Tshirt4 from './Components/Images/Tshirt4.jpg'
import Tshirt5 from './Components/Images/Tshirt5.jpg'
import Tshirt6 from './Components/Images/Tshirt6.jpg'
import Tv1 from './Components/Images/Tv1.jpg'
import Phone1 from './Components/Images/Phone1.jpg'
import Phone2 from './Components/Images/Phone2.jpg'
import Earphone1 from './Components/Images/Earphone1.jpg'
import Laptop1 from './Components/Images/Laptop1.jpg'
import Laptop2 from './Components/Images/Laptop2.jpg'
import Shoes1 from './Components/Images/Shoes1.jpg'
import Shoes2 from './Components/Images/Shoes2.jpg'
import Shoes3 from './Components/Images/Shoes3.jpg'
import Shoes4 from './Components/Images/Shoes4.jpg'
import Shoes5 from './Components/Images/Shoes5.jpg'
import Shoes6 from './Components/Images/Shoes6.jpg'
import Shoes7 from './Components/Images/Shoes7.jpg'
import Shoes8 from './Components/Images/Shoes8.jpg'
import Bag1 from './Components/Images/Bag1.jpg'
import Bag2 from './Components/Images/Bag2.jpg'
import Bag3 from './Components/Images/Bag3.jpg'
import Bag4 from './Components/Images/Bag4.jpg'
import Bag5 from './Components/Images/Bag5.jpg'
import Bag6 from './Components/Images/Bag6.jpg'
import CartProduct from './Components/CartProduct';
import Wishlist from './Components/Wishlist';
import ItemDetails from './Components/ItemDetails';



function App() {
   const[input,setInput] = useState('')
const[products] = useState([
  {
    id:Math.random()*10000,
    name: 'Puma',
    description:'Colourblocked Puffer jacket',
    price: '3499',
    src: jacket1,
    item: 'jackets'
  },{
    id:Math.random()*10000,
    name: 'Marc Loire',
    description:'Sneakers for men',
    price: '990',
    src: Shoes1,
    item: 'shoes'
  },{
    id:Math.random()*10000,
    name: 'HRX',
    description:'Pure cotton casual T-shirt',
    price: '1439',
    src: Tshirt1,
    item: 't-shirts'

  },{
    id:Math.random()*10000,
    name: 'Samsung Galaxy M12',
    description:' Black, 6GB RAM, 128GB storage',
    price: '20999',
    src: Phone1,
    item: 'phones'
  },{
    id:Math.random()*10000,
    name: 'Levis',
    description:'Women slim fit jeans',
    price: '2439',
    src: Jeans1,
    item: 'jeans'
  },{
    id:Math.random()*10000,
    name: 'HRX',
    description:'Curl Edge cotton T-shirt',
    price: '1039',
    src: Tshirt2,
    item: 't-shirts'
  },{
    id:Math.random()*10000,
    name: 'Shezone',
    description:'Comfortable shoes for women',
    price: '2990',
    src: Shoes2,
    item:'shoes'
  },{
    id:Math.random()*10000,
    name: 'Redmi 9 Activ',
    description:' Metallic Purple,4GB RAM, 64GB storage',
    price: '9999',
    src: Phone2,
    item: 'phones'
  },{
    id:Math.random()*10000,
    name: 'Andamen-PLP',
    description:'Pure cotton casual shirt',
    price: '1239',
    src: Shirt1,
    item:'shirts'
  },{
    id:Math.random()*10000,
    name: ' ADIDAS',
    description:'Pure cotton T-shirt',
    price: '707',
    src: Tshirt3,
    item:'t-shirts'
  },{
    id:Math.random()*10000,
    name: 'Marc Loire',
    description:'Sneakers for men',
    price: '3990',
    src: Shoes3,
    item:'shoes'
  },{
    id:Math.random()*10000,
    name: 'LG HBS-FN7',
    description:'Wireless Bluetooth Earphone',
    price: '8999',
    src: Earphone1,
    item:'earphones'
    },{
    id:Math.random()*10000,
    name: 'Roadster',
    description:'Men straight stretchable jeans',
    price: '4500',
    src: Jeans2,
    item:'jeans'
  },{
    id:Math.random()*10000,
    name: 'Allen Solly',
    description:'Solid structured handbag',
    price: '1890',
    src: Bag1,
    item:'bags'
  },{
    id:Math.random()*10000,
    name: 'HP 14s Ryzen ',
    description:' Micro Edge Display',
    price: '49999',
    src: Laptop1,
    item:'laptops'
  },{
    id:Math.random()*10000,
    name: 'Vishudh',
    description:'Sneaker for men',
    price: '1090',
    src: Shoes4,
    item:'shoes'
  },{
    id:Math.random()*10000,
    name: 'Louis Philippe',
    description:'Typography cotton T-shirt',
    price: '1439',
    src: Tshirt4,
    item:'t-shirts'
  },{
    id:Math.random()*10000,
    name: 'One Plus 80cm',
    description:' Y series smart android TV',
    price: '15999',
    src: Tv1,
    item:'tvs'
  },{
    id:Math.random()*10000,
    name: 'DressBerry',
    description:'Formal shoes for men',
    price: '570',
    src: Shoes5,
    item:'shoes'
  },
  {
    id:Math.random()*10000,
    name: 'Roadster',
    description:'Men Navy Blue & Red puffer jacket',
    price: '1224',
    src: jacket3,
    item: 'jackets'
  },{
    id:Math.random()*10000,
    name: 'Caprese',
    description:'Solid structured handbag',
    price: '1390',
    src: Bag2,
    item:'bags'
  },{
    id:Math.random()*10000,
    name: 'Anouk',
    description:'Women sandals',
    price: '1240',
    src: Shoes6,
    item:'shoes'
  },{
    id:Math.random()*10000,
    name: 'Nautica',
    description:'Pure cotton casual T-shirt',
    price: '674',
    src: Tshirt5,
    item:'t-shirts'
  },{
    id:Math.random()*10000,
    name: 'Louis Phillipe',
    description:'Men slim fit formal trousers',
    price: '3800',
    src: FormalPant1,
    item:'formal pants'
  },{
    id:Math.random()*10000,
    name: 'Marc Loire',
    description:'Women ballerinas',
    price: '899',
    src: Shoes7,
    item:' shoes'
  },{
    id:Math.random()*10000,
    name: 'WROGN',
    description:'Slim fit casual shirt',
    price: '590',
    src: Shirt2,
    item:'shirts'
  }, {
    id:Math.random()*10000,
    name: 'Highlander',
    description:'Men skinny fit jeans',
    price: '999',
    src: Jeans3,
    item:'jeans'
  },{
    id:Math.random()*10000,
    name: 'Moda Rapido',
    description:'White cotton casual T-shirt',
    price: '314',
    src: Tshirt6,
    item:'t-shirts'
  },{
    id:Math.random()*10000,
    name: 'Anouk',
    description:'Women high-heel sandal',
    price: '1430',
    src: Shoes8,
    item:'shoes'
  },{
    id:Math.random()*10000,
    name: 'Corsica',
    description:'Solid structured handbag',
    price: '1079',
    src: Bag3,
    item:'bags'
  },{
    id:Math.random()*10000,
    name: 'Van Heusen',
    description:'Women slim fit formal trousers',
    price: '2100',
    src: FormalPant6,
    item:'formal pants'
  },{
    id:Math.random()*10000,
    name: 'H & M',
    description:'Pink regular fit reddy jacket.',
    price: '2299',
    src:jacket2,
    item: 'jackets'
  },{
    id:Math.random()*10000,
    name: 'Dell 15',
    description:' Athlon Silver 3050U',
    price: '29490',
    src: Laptop2,
    item:'laptops'
  },{
    id:Math.random()*10000,
    name: 'Hidesign',
    description:'Textured leather handbag',
    price: '7090',
    src: Bag4,
    item:'bags'
  },{
    id:Math.random()*10000,
    name: 'Mast & Harbour',
    description:'Men slim fit low-rise trousers',
    price: '1800',
    src: FormalPant2,
    item:'formal pants'
  },{
    id:Math.random()*10000,
    name: 'Bene Kleed',
    description:'Printed casual shirt',
    price: '703',
    src: Shirt3,
    item:'shirts'
  },{
    id:Math.random()*10000,
    name: 'Louis Phillipe',
    description:'Women slim fit formal trousers',
    price: '990',
    src: FormalPant5,
    item:'formal pants'
  },{
    id:Math.random()*10000,
    name: 'MANGO',
    description:'Solid structured handbag',
    price: '2990',
    src: Bag5,
    item:'bags'
  },{
    id:Math.random()*10000,
    name: 'Tommy Hilfiger',
    description:'Women stretchable jeans',
    price: '1400',
    src: Jeans4,
    item:'jeans'
  },
  {
    id:Math.random()*10000,
    name: 'Tokyo Talkies',
    description:'Women multicoloured jacket',
    price: '1700',
    src:jacket4,
    item: 'jackets'
  },{
    id:Math.random()*10000,
    name: 'Park Avenue',
    description:'Women slim fit formal trousers',
    price: '1840',
    src: FormalPant4,
    item:'formal pants'
  },{
    id:Math.random()*10000,
    name: 'Mast & Harbour',
    description:'Women slim fit jeans',
    price: '1750',
    src: Jeans5,
    item:'jeans'
  },{
    id:Math.random()*10000,
    name: 'Baggit',
    description:'Solid structured handbag',
    price: '990',
    src: Bag6,
    item:'bags'
  },{
    id:Math.random()*10000,
    name: 'Raymond',
    description:'Men slim fit formal trousers',
    price: '5600',
    src: FormalPant3,
    item:'formal pants'
  }
])

const [searchedProducts,setSearchedProducts] =useState(products)
const [cartProducts,setCartProducts] = useState([])
const [wishlist,setWishlist] = useState([])
const [item,setItem] =useState([])

var sum = 0;
const sumItems = () => {
  cartProducts.forEach( item => {
    sum += parseInt(item.price)
  } )
  return sum
}
sumItems()
  return (
    <>
   <Navbar cartProducts={cartProducts} wishlist={wishlist}/>
   <Routes>
   <Route path='/' element={<ProductList item={item} setItem={setItem}  wishlist={wishlist} setWishlist={setWishlist} cartProducts={cartProducts} setCartProducts={setCartProducts} products={products} input={input} setInput={setInput} searchedProducts={searchedProducts} setSearchedProducts={setSearchedProducts}/>}/>
   <Route path='wishlist' element={<Wishlist cartProducts={cartProducts} setCartProducts={setCartProducts} wishlist={wishlist} setWishlist={setWishlist}/>} />
   <Route path='cart' element={<CartProduct  sum={sum} setCartProducts={setCartProducts} cartProducts={cartProducts} />} />
   <Route path='item' element={<ItemDetails  item={item} setItem={setItem}/>} />
   </Routes>
   </>
  );
}

export default App;
