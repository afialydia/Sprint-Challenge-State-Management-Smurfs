import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectSmurf } from "../redux/get-smurf/smurf.selector";
import Smurf from "./Smurf";

const SmurfVillage = ({ villagers }) => {
	console.log("howdyfromVillage", villagers);
	return (
		<div>
			howdyfromVillage meet our villagers:
			{villagers.map(villager => (
				<Smurf
					key={villager.id}
					name={villager.name}
					age={villager.age}
					height={villager.height}
				/>
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	villagers: selectSmurf
});

export default connect(mapStateToProps)(SmurfVillage);
