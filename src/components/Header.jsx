import Button from './UI/Button';
import logoImg from '../assets/logo.jpg';
import CartContext from '../store/CartContext';
import { useContext } from 'react';
import UserProgressContext from '../store/USerProgressContext';

export default function Header(){

    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems,item)=>{
        return totalNumberOfItems + item.quantity;
    },0);

    function handleShowCart(){
        userProgressCtx.showCart();
    }

    return(
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="Restaurant Logo"/>
                <h1>FastRestaurant</h1>
            </div>
            <nav>
                <Button onClick={handleShowCart} textOnly>Cart ({totalCartItems})</Button>
            </nav>
        </header>
    )
}