import toggleReducer from './toggle';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  toggle: toggleReducer,
});

export default rootReducer;
