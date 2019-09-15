import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './MainIndicators.css';
import IndicatorItem from './IndicatorItem/IndicatorItem';
import Loading from '../Loading/Loading';
import { getIncome, getOrders, getUserActivity, getVisits } from '../../actions/mainIndicators';

const MainIndicators = ({
    getIncome,
    getOrders,
    getVisits,
    getUserActivity,
    income,
    orders,
    userActivity,
    visits,
}) => {
    useEffect(() => {
        getIncome();
        getOrders();
        getUserActivity();
        getVisits();
    }, [getIncome, getUserActivity, getVisits, getOrders]);

    return (
        <div className="MainIndicators">
            {income === null ? (
                <Loading />
            ) : (
                <IndicatorItem
                    value={income.value}
                    subName="Total income"
                    percentValue={income.percentValue}
                    indicator="Today"
                    name="Income"
                    color="blue"
                />
            )}
            {orders === null ? (
                <Loading />
            ) : (
                <IndicatorItem
                    value={orders.value}
                    subName="New orders"
                    percentValue={orders.percentValue}
                    indicator="Annual"
                    name="Orders"
                    color="brown"
                />
            )}
            {visits === null ? (
                <Loading />
            ) : (
                <IndicatorItem
                    value={orders.value}
                    subName="New visits"
                    percentValue={orders.percentValue}
                    indicator="Today"
                    name="Visits"
                    color="green"
                />
            )}
            {userActivity === null ? (
                <Loading />
            ) : (
                <IndicatorItem
                    value={userActivity.value}
                    subName="In first month"
                    percentValue={userActivity.percentValue}
                    indicator="Low value"
                    name="User activity"
                    color="red"
                />
            )}
        </div>
    );
};

const mapStateToProps = state => ({
    income: state.mainIndicators.income,
    orders: state.mainIndicators.orders,
    visits: state.mainIndicators.visits,
    userActivity: state.mainIndicators.userActivity,
});

const mapDispatchToProps = {
    getIncome,
    getOrders,
    getVisits,
    getUserActivity,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MainIndicators);
