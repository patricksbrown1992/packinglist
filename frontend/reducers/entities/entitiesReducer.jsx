import usersReducer from './usersReducer';
import daysReducer from './daysReducer';
import { combineReducers } from 'redux';
import swimReducer from './swimReducer';
import businessReducer from './businessReducer';

const entitiesReducer = combineReducers({
    user: usersReducer,
    day: daysReducer,
    swim: swimReducer,
    business: businessReducer

});
export default entitiesReducer;
