import React from 'react';
import s from './SemiCircleProgress.module.css';

function toXY(centerX, centerY, radius, angleInDegrees) {
    let angleInRadians = (angleInDegrees - 180) * Math.PI / 180;

    return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
    };
}

function DrawSemiCircle(x, y, radius, startAngle, endAngle) {

    let start = toXY(x, y, radius, endAngle);
    let end = toXY(x, y, radius, startAngle);

    let largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    let d = [
        "M", start.x, start.y,
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");
    
    return d;
}

export default function SemiCircleProgress(props) {
    return (
        <div className={s.wrapper}>
            <svg viewBox={`0 0 ${props.radius*2} ${props.radius+10}`} width={props.radius*2}
            height={props.radius}>
                {props.children}
                <path id="arc1" fill="none" d={DrawSemiCircle(props.centerX, props.centerY, props.radius, props.startAngle, 180)} stroke={props.colourBack} stroke-width={props.width} stroke-linecap={props.shape} />
                <path id="arc2" fill="none" d={DrawSemiCircle(props.centerX, props.centerY, props.radius, props.startAngle, props.endAngle)} stroke={props.colourProgress} stroke-width={props.width} stroke-linecap={props.shape} />
            </svg>
        </div>
    )
}

SemiCircleProgress.defaultProps = {
    centerX: 75,
    centerY: 75,
    radius: 50,
    startAngle: 0,
    endAngle: 90,
    colourBack: "#f8f8f8",
    colourProgress: "#F5A623",
    width: 10,
    shape: "round" // butt | round | square
}