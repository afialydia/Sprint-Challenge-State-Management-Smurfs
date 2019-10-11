import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { getSmurfs } from '../actions'
import { Smurf } from './Smurf'

const Smurfs = props => {

    useEffect(()=> {
        props.getSmurfs();
    },[]);
    
    if (props.isFetching){
        return <h2>now loading...</h2>
    }
    return (
        <div>

            Hello From Smurfs {props}
            {console.log('hey look at me',props)}
            {/* {props.map(smurf => (
                <Smurf key={smurf.id} name={smurf.name} />
            ))} */}
          {/* { {props.smurfState.error} && <p>{props.smurfState.error}</p>} */}
         
          */}
        </div>
      );
}

const mapStateToProps = state => {
    
    return{
        smurfState: state.characterReducer.smurfState,
        // isFetching: state.characterReducer.isFetching,
        // error: state.characterReducer.error
    };
};

export default connect(
    mapStateToProps, { getSmurfs }
)(Smurfs)