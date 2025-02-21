// reducers/starReducer.ts
import { SET_RATING } from '../actions/starActions';

interface StarState {
  [key: string]: number; // Key is the card title, value is the rating
}

const initialState: StarState = {};

const starReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RATING:
      return {
        ...state,
        [action.payload.title]: action.payload.rating,
      };
    default:
      return state;
  }
};

export default starReducer;