import usersReducer from './usersReducer';
import daysReducer from './daysReducer';
import { combineReducers } from 'redux';
import swimReducer from './swimReducer';
import businessReducer from './businessReducer';
import internationalReducer from './internationalReducer';
import cold from './coldReducer';
import money from './moneyReducer';

const entitiesReducer = combineReducers({
    user: usersReducer,
    day: daysReducer,
    swim: swimReducer,
    business: businessReducer,
    international: internationalReducer,
    cold: cold,
    money: money
    

});
export default entitiesReducer;
