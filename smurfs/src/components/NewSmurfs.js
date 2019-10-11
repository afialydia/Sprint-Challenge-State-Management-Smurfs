import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { postSmurfs } from '../actions'
import { Smurf } from './Smurf'
import styled from 'styled-components'
import {render} from "react-dom";
import {withFormik, Form, Field} from "formik";

const Wrap = styled.div`
max-width: 80%;
margin: 0 auto;
display: flex;
flex-direction: column;
height: 30vh;
width: 30vw;
border-radius:12px;
background: rgb(206,212,182,.6);`

const LogIn = styled.div`
display: flex;
flex-direction: column;
padding: 10%;
align-items: center;
margin: auto;
color: rgb(64,64,64);`

 
const NewSmurfs = ({
    values,
    isSubmitting
    
}, props) => (
    <Wrap>
        <Form>
            <LogIn> 

        <Field type="text" name="name" placeholder="Smurf's Name" />
        <Field type="text" name="age" placeholder="Smurf's Age"  />
        <Field type="text" name="height" placeholder="Smurf's Height"  />

        <button disabled={isSubmitting} onClick={()=> {
            props.postSmurfs();
        }}>
            Submit
        </button>
            </LogIn> 
       </Form>
    </Wrap>
)

const FormikNewSmurfs = withFormik({
    mapPropsToValues({name, age, height}){
        return{
            name: name || '',
            age: age || '',
            height: height || ''    
        }
    },
    
    handleSubmit(values, {
        resetForm, 
        setSubmitting,
        // setStatus,
        // props
    }){
        console.log(values)
        
        resetForm()
        
        setSubmitting(false)

    }
})(NewSmurfs)


render(<FormikNewSmurfs />, document.getElementById("root"))

// const SmurfContainer = styled.div`
// display: flex;
// width: 80%;
// margin: 0 auto;`

// const NewSmurfs = props => {

//     useEffect(()=> {
//        props.postSmurfs();
//     },[]);
    
//     // if (props.isFetching){
//     //     return <h2>now loading...</h2>
//     // }
//     return (
//         <div>

//             Hello From Smurf
//             { props.error && <p> {props.smurfState.error}</p>}

//             {console.log('hey look at me',props)}

//             <SmurfContainer>

//             {props.smurfState.map(smurf => (
//                 <Smurf key={smurf.id} name={smurf.name} age={smurf.age} height={smurf.height} />
//             ))}
//             </SmurfContainer>
          
         
          
//         </div>
//       );
// }

const mapStateToProps = state => {
    
    return{
        smurfState: state.characterReducer.smurfState,
        error: state.characterReducer.error,
        isFetching: state.characterReducer.isFetching 
    };
};

export default connect(
    mapStateToProps, { postSmurfs }
)(FormikNewSmurfs)
