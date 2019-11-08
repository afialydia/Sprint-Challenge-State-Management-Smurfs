import React from 'react';
import './components.css'




 const Smurf = props => {
    return(
        <div className="house" key={props.id}>
        
            <h3>{props.name}</h3>
            <p>Age: {props.age}</p>
            <p>Height: {props.height}</p>
        </div>
    )
}
export default Smurf