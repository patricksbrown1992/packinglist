import usersReducer from './usersReducer';
import daysReducer from './daysReducer';
import { combineReducers } from 'redux';
import swimReducer from './swimReducer';
import businessReducer from './businessReducer';
import internationalReducer from './internationalReducer';
import cold from './coldReducer';

const entitiesReducer = combineReducers({
    user: usersReducer,
    day: daysReducer,
    swim: swimReducer,
    business: businessReducer,
    international: internationalReducer,
    cold: cold,
    

});
export default entitiesReducer;
