export const selectLoading = state => state.campers.loading;
export const selectError = state => state.campers.error;

export const selectCampers = ({ campers }) => campers.items;
export const selectCamperDetails = ({ campers }) => campers.camperDetails;
