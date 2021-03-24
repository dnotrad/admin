import React from 'react';
import s from './PopUpMore.module.css';
import close from '../../../../assets/icons/close.svg';

export default function PopUpMore(props){
    return(
        <div className={s.body}>
            <div className={s.header}>
                <span className={s.title}>
                    {props.popUpData.title}
                </span> 
                <img src={close} alt="" onClick={()=>props.setOpen2(false)}/>
            </div>
            <div className={s.text}>
            {props.popUpData.text}
            </div>
            <div className={s.btns}>
                <div className={s.invest} onClick={()=>{props.setOpen2(false)
                let timer = setTimeout(()=>props.setOpen(true),1000);
                }}>
                    <span>Инвестеировать</span>
                </div>
                <div className={s.close} onClick={()=>props.setOpen2(false)}>
                    <span>Закрыть</span>
                </div>
            </div>
        </div>
    )
}