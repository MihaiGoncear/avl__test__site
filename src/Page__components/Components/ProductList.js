import React from 'react';
import { Products } from './Products__Object'


export function ProductList(props) {
    return (
        <div className='product__list'>
            {
                Object.values(Products).filter(product => {
                    return props.option === product.category
                        || props.option === product.secondaryCategory
                        || props.option === 'all'
                        || (props.option === 'top' && product.secondaryCategory);
                }).map((product) => (

                    <div key={product.name} className='product__item'>
                        <div className="category__images">
                            <img className='primary__category' src={product.categoryImg} alt='primary' />
                            {product.secondaryCategory ? (<img className='secondary__category' src={product.secondaryCategoryImg} alt='secondary' />) : null}
                        </div>
                        <h3>{product.name}</h3>
                        <img className='product__image' src={product.image} alt={product.name} />
                        <p className='description'>{product.description}</p>
                        <div className="cart__byt">
                            <p className='byt'>Byt</p>
                            <p>Add to Cart</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}