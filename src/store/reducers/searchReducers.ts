import {SET_SELECTED_GENRE_ID} from "../actions/actionTypes";

const initialState: {
  selectedGenreId: number;
} = {
  selectedGenreId: -1,
};

function searchReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_SELECTED_GENRE_ID:
      return {...state, selectedGenreId: action.payload};

    default:
      return state;
  }
}
export default searchReducer;
