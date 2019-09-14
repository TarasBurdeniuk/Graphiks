import React from 'react';
import './ScaleItem.css';

const ScaleItem = ({ subName, value, percentValue, widthScale }) => {
    return (
        <div className="ScaleItem">
            <div className="value-block">
                <span className="value">{value}</span>
                <div className="subName">
                    <span className="subName-title">{subName}</span>
                    <span style={{ fontSize: '1rem' }}>{percentValue}%</span>
                </div>
            </div>
            <div style={{ padding: '0 15px' }}>
                <div className="line">
                    <div className="topLine" style={{ width: `${widthScale}` }}></div>
                </div>
            </div>
        </div>
    );
};

export default ScaleItem;
