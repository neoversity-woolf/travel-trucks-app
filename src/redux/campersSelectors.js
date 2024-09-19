export const selectLoading = ({ campers }) => campers.loading;
export const selectError = ({ campers }) => campers.error;
export const selectEndOfCollection = ({ campers }) => campers.isEndOfCollection;

export const selectCampers = ({ campers }) => campers.items;

export const selectCurrentPage = ({ campers }) => campers.currPage;

export const selectCamperDetails = ({ campers }) => campers.camperDetails;
