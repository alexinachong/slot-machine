import { merge } from 'lodash';
// import actions

const slotsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {

    default:
      return state;
  }
};

export default slotsReducer;
