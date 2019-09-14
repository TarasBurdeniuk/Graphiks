import React from 'react';
import './MainIndicators.css';
import { indicators } from './indicators';
import IndicatorItem from './IndicatorItem/IndicatorItem';
import Loading from '../Loading/Loading';

const MainIndicators = () => {
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
        <div className="MainIndicators">{!indicators.length ? <Loading /> : indicatorsItems}</div>
    );
};

export default MainIndicators;
