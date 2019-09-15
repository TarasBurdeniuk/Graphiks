import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './MainIndicators.css';
import { indicators } from './indicators';
import IndicatorItem from './IndicatorItem/IndicatorItem';
import Loading from '../Loading/Loading';
import { getIncome } from '../../actions/mainIndicators';

const MainIndicators = ({ getIncome, income }) => {
    useEffect(() => {
        getIncome();
    }, [getIncome]);

    const indicatorsItems = indicators.map(item => (
        <IndicatorItem
            key={`${item.name}${item.value}`}
            name={item.name}
            indicator={item.indicator}
            value={item.value}
            color={item.color}
            subName={item.subName}
            percentValue={item.percentValue}
        />
    ));
    return (
        <div className="MainIndicators">
            {income === null ? (
                <Loading />
            ) : (
                <IndicatorItem
                    value={income.value}
                    subName={income.subName}
                    percentValue={income.percentValue}
                    indicator={income.indicator}
                    name={income.name}
                    color={income.color}
                />
            )}
        </div>
    );
};

const mapStateToProps = state => ({
    income: state.mainIndicators.income,
});

const mapDispatchToProps = {
    getIncome,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MainIndicators);
