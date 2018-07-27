import { combineReducers } from 'redux';
import slotsReducer from './slots_reducer';

const rootReducer = combineReducers({
  slots: slotsReducer
});

export default rootReducer;
