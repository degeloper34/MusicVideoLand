import {SET_SELECTED_GENRE_ID} from "../actions/actionTypes";

const initialState: {
  selectedGenreId: number;
} = {
  selectedGenreId: -1,
};

interface ActionSetSelectedGenreId {
  type: "SET_SELECTED_GENRE_ID";
  payload: number;
}

type Actions = ActionSetSelectedGenreId;

function musicVideoReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case SET_SELECTED_GENRE_ID:
      return {...state, selectedGenreId: action.payload};

    default:
      return state;
  }
}
export default musicVideoReducer;
