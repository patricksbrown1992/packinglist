import { RECEIVE_DAY} from '../../actions/needsActions';
import { merge } from 'lodash';
const daysReducer = (state =  0, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_DAY:
            return action.ele;
        default:
            return state;
    }
};

export default daysReducer;