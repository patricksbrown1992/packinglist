import { RECEIVE_BUSINESS} from '../../actions/needsActions';
import { merge } from 'lodash';
const businessReducer = (state = false, action) => {
    Object.freeze(state);
    // debugger
    switch (action.type) {
        case RECEIVE_BUSINESS:
            return action.ele;
        default:
            return state;
    }
};

export default businessReducer;