import React from 'react';
import s from './CircleProgress.module.css';

export function CircularProgress(props) {
    const sqSize = props.sqSize;
    const radius = (props.sqSize - props.strokeWidth) / 2;
    const viewBox = `0 0 ${sqSize} ${sqSize}`;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - dashArray * props.percentage / 100;
    return (
        <svg className={s.wrapper}
            width={props.sqSize}
            height={props.sqSize}
            viewBox={viewBox}>
            <svg x="10%"
                y="10%">
            {props.children}
            </svg>
            <circle
                fill="none"
                stroke={`${props.colourBack}`}
                cx={props.sqSize / 2}
                cy={props.sqSize / 2}
                r={radius}
                strokeWidth={`${props.strokeWidth}px`} />
            <circle
                fill="none"
                stroke={`${props.colourProgress}`}
                stroke-linecap="round"
                stroke-linejoin="round"
                cx={props.sqSize / 2}
                cy={props.sqSize / 2}
                r={radius}
                strokeWidth={`${props.strokeWidth}px`}
                transform={`rotate(-90 ${props.sqSize / 2} ${props.sqSize / 2})`}
                style={{
                    strokeDasharray: dashArray,
                    strokeDashoffset: dashOffset
                }} />
            {props.showText &&
                <text
                    x="50%"
                    y="50%"
                    dy=".3em"
                    textAnchor="middle">
                    {`${props.percentage}%`}
                </text>
            }
        </svg >
    )
}

CircularProgress.defaultProps = {
    sqSize: 200,
    percentage: 25,
    strokeWidth: 10,
    colourProgress: "red",
    colourBack: "#ddd",
    showText: false
}