import React from 'react';
import styled from 'styled-components'

const Divy = styled.div`
width: 150px;
height: 150px;
border: 1px solid;
`

export const Smurf = props => {
    return(
        <Divy key={props.id}>
            <h3>{props.name}</h3>
            <p>{props.age}</p>
            <p>{props.height}</p>
        </Divy>
    )
}