import { RECEIVE_MONEY } from '../../actions/needsActions';
import { merge } from 'lodash';
const moneyReducer = (state = { money: false }, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_MONEY:
            return merge({}, state, { money: action.ele });
        default:
            return state;
    }
};

export default moneyReducer;