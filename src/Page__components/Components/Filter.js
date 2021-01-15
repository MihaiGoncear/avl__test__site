import React from 'react';
import { FilterComponents } from './FilterComponents'

export function Filter(props) {
    return(
        <div className="filter">
            <p className="filter__title">FILTER: </p>
            <div className="filter__components" onClick={props.filterOptionToState}>
                {FilterComponents.map((filter) => <p key={filter.name} className={ filter.name.toLocaleLowerCase() === props.option ? 'active' : '' }>{filter.name}</p>)}
            </div>
        </div>
    )
}