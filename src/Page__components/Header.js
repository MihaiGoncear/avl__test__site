import React from 'react';
import Logo from '../Archive/header__img/avl__logo.jpg'
import LocationIcon from '../Archive/header__img/location__icon.png'
import CartIcon from '../Archive/header__img/cart__icon.png'

export function Header(){
    return(
        <div className="header">

            <div className="header__information">
                <img className="location__icon" src={LocationIcon} alt="location"/>
                <p className='header__text'>OUR LOCATION: <br/> 411 - 19th STREET S.E, CALGARY, ALBERTA</p> 
                <p className='header__text'>ASK A VETERINARIAN ONLINE FOR FREE</p>
                <img className='cart__icon' src={CartIcon} alt="cart"/>
                <p className='language'>EN/FR</p>
            </div>

            <div className="navigation__bar">
                <div className="nav">
                    <a href="/">HOME</a>
                    <a href="/">ABOUT US</a>
                    <a href="/">PRODUCTS</a>
                    <a href="/">NEWS</a>
                    <a href="/">CONTACTS</a>
                    <div className="search__input">
                        <input type="text" placeholder="search"/>
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </div>
                </div>
                <img className='avl__logo' src={Logo} alt="avl-logo"/>
            </div>

        </div>
    )
}