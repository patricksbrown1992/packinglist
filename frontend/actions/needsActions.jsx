export const RECEIVE_DAY = 'RECEIVE_DAY';
export const RECEIVE_SWIM = 'RECEIVE_SWIM';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const RECEIVE_INTERNATIONAL = 'RECEIVE_INTERNATIONAL';
export const RECEIVE_COLD = 'RECEIVE_COLD';


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


