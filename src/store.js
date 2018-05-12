import { createStore, combineReducers } from 'redux';
import ProfileReducer from './reducer';

const rootReducers = combineReducers({
    profile: ProfileReducer
});
const store = createStore(rootReducers);

export default store;