// reducers/starReducer.ts
import { SET_RATING } from '../actions/starActions';

// Define the shape of the state
interface StarState {
  [key: string]: number; // Key is the card title, value is the rating
}

// Define the shape of the action
interface SetRatingAction {
  type: typeof SET_RATING;
  payload: {
    title: string;
    rating: number;
  };
}

// Define the allowed action types
type StarActionTypes = SetRatingAction;

// Initial state
const initialState: StarState = {};

// Reducer function using traditional function declaration
function starReducer(state: StarState = initialState, action: StarActionTypes): StarState {
  switch (action.type) {
    case SET_RATING:
      return {
        ...state,
        [action.payload.title]: action.payload.rating,
      };
    default:
      return state;
  }
}

export default starReducer;