import React from 'react';
import { ProductList } from './Components/ProductList'
import { Filter } from './Components/Filter.js'


export function Main(props){
    return (
        <main>
            <Filter filterOptionToState={props.filterOptionToState} option={props.option}/>
            <ProductList option={props.option}/>
        </main>
    )
}