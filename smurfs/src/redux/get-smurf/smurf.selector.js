import { createSelector } from "reselect";

const getAPI = state => state.smurf;

export const selectSmurf = createSelector(
	[getAPI],
	smurfs => smurfs.villagers
);