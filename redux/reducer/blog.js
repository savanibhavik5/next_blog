import { GETBLOG } from "../action/blog";

const initialState = {
  blog: [],
};

export const blogReducer = (state = [], action) => {
  if (action.type === GETBLOG) {
    return (state = action.data);
  }
  return state;

  // switch (action.type) {
  //   case GETBLOG:
  //     return {

  //     }
  // }
};
