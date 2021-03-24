import React from 'react';
import s from './PopUpPartners.module.css';
import close from '../../../../assets/icons/close.svg';
import user from '../../../../assets/img/user.jpg';

export default function PopUpPartners(props) {
    return (
        <div className={s.wrapper}>
            <div className={s.body}>
                <div className={s.header}>
                    <span>информация</span>
                    <img src={close} alt="X" onClick={()=>props.setOpen(false)}/>
                </div >
                <div className={s.info}>
                    <div className={s.header_body}>
                        <img src={user} alt="" />
                        <div className={s.header_title}>
                            <span className={s.title}>Username</span>
                            <span className={s.subtitle}>Id 328495</span>
                        </div>
                    </div>
                    <div className={s.header_info}>
                            <span className={s.title}>Зарегистрирован</span>
                            <span className={s.subtitle}>01.01.2021</span>
                    </div>
                </div>
                <div className={s.main}>
                    {[{name: "Ранг/Линия:", value: "9/3"},{name: "Количество партнеров:", value: 130},{name: "Инвестировано:", value: 50000},{name: "Оборот структуры:", value: 1300000},{name: "Заработано", value: 230000}].map((item, key)=>
                    <div className={s.main_body}>
                        <div className={s.main_body_left}>
                            <span>{item.name}</span>
                        </div>
                        <div className={s.main_body_right}>
                            <span>{item.value}</span>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}