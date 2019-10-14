export const RECEIVE_DAY = 'RECEIVE_DAY';
export const RECEIVE_SWIM = 'RECEIVE_SWIM';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';

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