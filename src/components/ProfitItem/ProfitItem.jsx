import React from 'react';
import s from "./ProfitItem.module.css";
const ProfitItem = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.img}>
                <img src={props.img} alt=""/>
            </div>
            <div className={s.info}>
                <div className={s.title}>
                    {props.title}
                </div>
                <div className={s.content}>
                    {props.content}
                </div>
            </div>
        </div>
    );
};

export default ProfitItem;