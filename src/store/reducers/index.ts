import {combineReducers} from 'redux';
import location from './location';
import global from './global';

const rootReducers = combineReducers({location, global});

export type RootState = ReturnType<typeof rootReducers>;

export default rootReducers;
