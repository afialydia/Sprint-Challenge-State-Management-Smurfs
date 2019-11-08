import React from 'react';
import styled from 'styled-components'
import './components.css'


const Divy = styled.div`
  width: 85%;
    height: auto;
    margin: 0 auto;
    box-shadow: 0px 2px 4px;
    color:rgb(188,70,40);
    background:#EDE6DE ;
    padding:.01px;
`

 const Smurf = props => {
    return(
        <div className="house" key={props.id}>
            <h3>{props.name}</h3>
            <p>{props.age}</p>
            <p>{props.height}</p>
        </div>
    )
}
export default Smurf