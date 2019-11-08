import { createSelector } from "reselect";

const getAPI = state => state.smurf.users;

export const selectSmurf = createSelector(
	[getAPI],
	smurfs => smurfs
);