import { GET_INCOME, GET_ORDERS, GET_VISITS, GET_USER_ACTIVITY } from './types';

export const getIncome = () => dispatch => {
    const maxValue = 99999999;
    // instead this hard code can be request to API
    setInterval(() => {
        const income = {
            value: Math.floor(Math.random() * Math.floor(maxValue)),
            percentValue: Math.floor(Math.random() * Math.floor(100)),
        };

        dispatch({
            type: GET_INCOME,
            payload: income,
        });
    }, 1000);
};

export const getOrders = () => dispatch => {
    const maxValue = 999999;
    setInterval(() => {
        const orders = {
            value: Math.floor(Math.random() * Math.floor(maxValue)),
            percentValue: Math.floor(Math.random() * Math.floor(100)),
        };

        dispatch({
            type: GET_ORDERS,
            payload: orders,
        });
    }, 1500);
};

export const getVisits = () => dispatch => {
    const maxValue = 99999;
    setInterval(() => {
        const visits = {
            value: Math.floor(Math.random() * Math.floor(maxValue)),
            percentValue: Math.floor(Math.random() * Math.floor(100)),
        };

        dispatch({
            type: GET_VISITS,
            payload: visits,
        });
    }, 1800);
};

export const getUserActivity = () => dispatch => {
    const maxValue = 999999;
    setInterval(() => {
        const userActivity = {
            value: Math.floor(Math.random() * Math.floor(maxValue)),
            percentValue: Math.floor(Math.random() * Math.floor(100)),
        };

        dispatch({
            type: GET_USER_ACTIVITY,
            payload: userActivity,
        });
    }, 2200);
};
