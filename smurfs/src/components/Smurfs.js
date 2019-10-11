import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { getSmurfs } from '../actions'
import { Smurf } from './Smurf'
import styled from 'styled-components'

const SmurfContainer = styled.div`
display: flex;
width: 80%;
margin: 0 auto;`

const Smurfs = props => {

    useEffect(()=> {
       props.getSmurfs();
    },[]);
    
    // if (props.isFetching){
    //     return <h2>now loading...</h2>
    // }
    return (
        <div>

            Hello From Smurf
            { props.error && <p> {props.smurfState.error}</p>}

            {console.log('hey look at me',props)}

            <SmurfContainer>

            {props.smurfState.map(smurf => (
                <Smurf key={smurf.id} name={smurf.name} age={smurf.age} height={smurf.height} />
            ))}
            </SmurfContainer>
          
         
          
        </div>
      );
}

const mapStateToProps = state => {
    
    return{
        smurfState: state.characterReducer.smurfState,
        error: state.characterReducer.error,
        isFetching: state.characterReducer.isFetching 
    };
};

export default connect(
    mapStateToProps, { getSmurfs }
)(Smurfs)

// export default Smurfs