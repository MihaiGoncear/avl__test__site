import React from 'react';

export function Filter(props) {
    return(
        <div className="filter">
            <p className="filter__title">FILTER: </p>
            <div id='test' className="filter__components" onClick={props.filterOptionToState}>
                <p>ALL</p>
                <p>FARM ANIMALS</p>
                <p>COMPANION ANIMALS</p>
                <p>SANITATION</p>
                <p>TOP</p>
            </div>
        </div>
    )
}