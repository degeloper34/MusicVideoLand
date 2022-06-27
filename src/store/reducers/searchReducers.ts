import {SET_SELECTED_GENRE_ID} from "../actions/actionTypes";

const initialState = {
  selectedGenreId: -1,
};

function musicVideoReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_SELECTED_GENRE_ID:
      return {...state, selectedGenreId: action.payload};

    default:
      return state;
  }
}
export default musicVideoReducer;
