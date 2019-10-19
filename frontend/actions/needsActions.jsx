export const RECEIVE_DAY = 'RECEIVE_DAY';
export const RECEIVE_SWIM = 'RECEIVE_SWIM';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const RECEIVE_INTERNATIONAL = 'RECEIVE_INTERNATIONAL';
export const RECEIVE_COLD = 'RECEIVE_COLD';
export const RECEIVE_HOT = 'RECEIVE_HOT';
export const CLEAR_BUSINESS = 'CLEAR_BUSINESS';
export const CLEAR_INTERNATIONAL = 'CLEAR_INTERNATIONAL';
export const CLEAR_SWIM = 'CLEAR_SWIM';
export const CLEAR_HOT = 'CLEAR_HOT';
export const CLEAR_COLD = 'CLEAR_COLD';
import * as APIUtil from '../util/sessionAPIUtil';

const receiveDay = (ele) => {
    return{
    type: RECEIVE_DAY,
    ele: ele.days
    }
};

const receiveSwim = (ele) => {

    return {
    type: RECEIVE_SWIM,
    ele: ele.swim 
    }
};

 const receiveBusiness = (ele) => ({
    type: RECEIVE_BUSINESS,
    ele: ele.business
});

const receiveInternational = (ele) => ({
    type: RECEIVE_INTERNATIONAL,
    ele: ele.international
});

const receiveCold = (ele) => ({
    type: RECEIVE_COLD,
    ele: ele.cold
});
const receiveHot = (ele) => {
    return {
    type: RECEIVE_HOT,
    ele: ele.hot
    }
};

export const clearHot = () => ({
    type: CLEAR_HOT
});
export const clearCold = () => ({
    type: CLEAR_COLD
});
export const clearInternational = () => ({
    type: CLEAR_INTERNATIONAL
});
export const clearBusiness = () => ({
    type: CLEAR_BUSINESS
});
export const clearSwim = () => ({
    type: CLEAR_SWIM
});

export const updateHot = (user) => dispatch => (
    APIUtil.updateUser(user).then(user => (dispatch(receiveHot(user))))
);

export const updateCold = (user) => dispatch => (
    APIUtil.updateUser(user).then(user => (dispatch(receiveCold(user))))
);
export const updateBusiness = (user) => dispatch => (
    APIUtil.updateUser(user).then(user => (dispatch(receiveBusiness(user))))
);
export const updateInternational = (user) => dispatch => (
    APIUtil.updateUser(user).then(user => (dispatch(receiveInternational(user))))
);
export const updateSwim = (user) => dispatch => (
    APIUtil.updateUser(user).then(user => (dispatch(receiveSwim(user))))
);

export const updateDay = (user) => dispatch => (
    APIUtil.updateUser(user).then(user => (dispatch(receiveDay(user))))
);

