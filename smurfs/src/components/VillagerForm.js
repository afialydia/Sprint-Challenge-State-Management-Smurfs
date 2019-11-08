import React from "react";
import postToAPI from "../redux/post-smurf/post.actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSmurf } from "../redux/get-smurf/smurf.selector";
import FormInput from "./FormInput";

class VillagerForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		
				name: "",
				age: "",
                height: "",
        	
		};
	}

	handleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
		this.props.newvillager(this.state)

	
	};

	handleChange = e => {

		const { value, name } = e.target;

		this.setState({  [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2>Welcome New Villager</h2>
				<span>Please give us this info...</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="name"
						type="text"
						handleChange={this.handleChange}
						value={this.state.name}
						label="name"
						required
					/>
					<FormInput
						name="age"
						type="text"
						value={this.state.age}
						handleChange={this.handleChange}
						label="age"
						required
					/>
					<FormInput
						name="height"
						type="text"
						value={this.state.height}
						handleChange={this.handleChange}
						label="height"
						required
					/>
					<div className="buttons">
                        <button type="submit" 
                        // onClick={()=>this.props.newvillager()}
                        >New Villager</button>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	villagers: selectSmurf
});

const mapDispatchToProps = dispatch => ({
	newvillager: villager => dispatch(postToAPI(villager))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(VillagerForm);
