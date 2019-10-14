import { RECEIVE_DAY} from '../../actions/needsActions';
import { merge } from 'lodash';
const needsReducer = (state = {days: 0}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_DAY:
            return merge({}, state, { days: action.ele });
        default:
            return state;
    }
};

export default needsReducer;