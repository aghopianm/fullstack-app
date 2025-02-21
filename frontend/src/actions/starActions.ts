// actions/starActions.ts
export const SET_RATING = 'SET_RATING';

// actions/starActions.ts
export const setRating = (title: string, rating: number) => ({
  type: SET_RATING,
  payload: { title, rating },
});