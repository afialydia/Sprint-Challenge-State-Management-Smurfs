import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectSmurf } from "../redux/get-smurf/smurf.selector";
import Smurf from "./Smurf";

import './components.css'

const SmurfVillage = ({ villagers }) => {
	console.log("howdyfromVillage", villagers);
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

export default connect(mapStateToProps)(SmurfVillage);
