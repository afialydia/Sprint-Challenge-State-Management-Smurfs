import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import getAPI from "../redux/get-smurf/smurf.actions";

import { selectSmurf } from "../redux/get-smurf/smurf.selector";
import Smurf from "./Smurf";

import './components.css'

const SmurfVillage = ({ villagers, welcome }) => {
	console.log("howdyfromVillage", villagers);
// console.log(welcome)
	// useEffect(() => {
	// 	welcome('working');
	//  },[welcome]);
	 

	return (
		<div>
			<h3>Meet our Villagers:</h3>
			<div className="village">{villagers.map(villager => (
				<Smurf
					key={villager.id}
					name={villager.name}
					age={villager.age}
					height={villager.height}
				/>
			))}
		</div></div>
	);
};

const mapStateToProps = createStructuredSelector({
	villagers: selectSmurf
});

const mapDispatchToProps = dispatch => ({
	welcome: () => dispatch(getAPI())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SmurfVillage);


