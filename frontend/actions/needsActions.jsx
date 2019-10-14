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

export const receiveDay = (ele) => ({
    type: RECEIVE_DAY,
    ele
});
export const receiveSwim = (ele) => ({
    type: RECEIVE_SWIM,
    ele
});

export const receiveBusiness = (ele) => ({
    type: RECEIVE_BUSINESS,
    ele
});

export const receiveInternational = (ele) => ({
    type: RECEIVE_INTERNATIONAL,
    ele
});

export const receiveCold = (ele) => ({
    type: RECEIVE_COLD,
    ele
});
export const receiveHot = (ele) => ({
    type: RECEIVE_HOT,
    ele
});

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
