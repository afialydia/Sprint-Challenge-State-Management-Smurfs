import React from 'react';

export const Smurf = props => {
    return(
        <div key={props.id}>
            <h3>{props.name}</h3>
        </div>
    )
}