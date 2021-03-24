import React, { useState } from 'react';
import s from './PopUpInvestments.module.css';
import close from '../../../../assets/icons/close.svg';
import Alerts from '../../Alerts/Alert';

export default function PopUpUnvestments(props) {
    const [isActive, setIsActive] = useState(false);
    const [currency, setCurrency] = useState(0);
    const [option, setOption] = useState(0);
    const [open, setOpen] = useState(false);
    const [alertData, setAlertData] = useState({
        error: false,
        msg: "Операция прошла успешно",
    })


    function handler(e) {
        e.preventDefault();
        setOption(e.target.value);
    }

    return (
        <div className={s.wrapper}>
            <Alerts mobile={document.documentElement.clientWidth <= 540 ? true : false} close={props.close} setOpen={setOpen} error={alertData.error} msg={alertData.msg} open={open} />
            <div className={s.body}>
                <div className={s.header}>
                    <div className={s.title}>
                        <span className={s.title_main}>{props.popUpData.tariff}</span>
                        <span className={s.sub_main}>{props.popUpData.diversity}</span>
                    </div>
                    <div className={s.close} onClick={() => props.setOpen(false)}>
                        <img src={close} alt="X" />
                    </div>
                </div>
                <div className={s.check}>
                    <div className={s.garant}>
                        <span className={s.garant_subtitle}>Гарант</span>
                        <span className={s.garant_info}>
                            <span className={s.id}>{props.popUpData.id}</span>
                            =
                            <span className={s.invest}>{props.popUpData.invest}</span>
                            <span className={s.time}>{props.popUpData.time}</span>
                        </span>
                    </div>
                    <div className={s.balance}>
                        <span className={s.subtitle}>Ваш баланс</span>
                        <span className={s.info}>{props.popUpData.money} DTN</span>
                    </div>
                    <div className={s.can_invest}>
                        <span className={s.subtitle}>Доступно</span>
                        <span className={s.info}>{props.popUpData.invest < props.popUpData.money ? props.popUpData.money - props.popUpData.invest : 0} DTN</span>
                    </div>
                </div>
                <div className={s.input_value}>
                    <span className={s.input_value_title}>Введите сумму: </span>
                    <div className={s.currency_body}>
                        <input onChange={handler} value={(option / (currency === 0 ? 1 : currency === 1 ? 1.1 : 1000))} type="text" />
                        <svg onClick={() => setIsActive(!isActive)} width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.00005 1.88661L4.64005 3.52661C4.90005 3.78661 5.32005 3.78661 5.58005 3.52661C5.84005 3.26661 5.84005 2.84661 5.58005 2.58661L3.46672 0.466606C3.20672 0.206606 2.78672 0.206606 2.52672 0.466606L0.413384 2.58661C0.153384 2.84661 0.153384 3.26661 0.413384 3.52661C0.673384 3.78661 1.09338 3.78661 1.35338 3.52661L3.00005 1.88661ZM3.00005 10.1133L1.36005 8.47327C1.10005 8.21327 0.680051 8.21327 0.420051 8.47327C0.160051 8.73327 0.160051 9.15327 0.420051 9.41327L2.53338 11.5333C2.79338 11.7933 3.21338 11.7933 3.47338 11.5333L5.58672 9.41994C5.84672 9.15994 5.84672 8.73994 5.58672 8.47994C5.32672 8.21994 4.90672 8.21994 4.64672 8.47994L3.00005 10.1133Z" fill="#504D85" />
                        </svg>
                        <div className={`${s.currency_body_options} ${isActive && s.active}`}>
                            <span onClick={() => setCurrency(0)}>USD</span>
                            <span onClick={() => setCurrency(1)}>EUR</span>
                            <span onClick={() => setCurrency(2)}>BTC</span>
                        </div>
                    </div>
                </div>
                <div className={s.btn}>
                    <div className={s.btn_body} onClick={
                        () => {
                            if (option > 0) {
                                setAlertData({
                                    error: false,
                                    msg: "Операция прошла успешно",
                                });
                                setOpen(true);
                                let timer = setTimeout(() => setOpen(false), 5000);
                            } else {
                                setAlertData({
                                    error: true,
                                    msg: "Введите число пополнения",
                                });
                                setOpen(true);
                                let timer = setTimeout(() => setOpen(false), 5000)
                            }
                        }
                    }>
                        <span>Инвестировать</span>
                    </div>
                </div>
            </div>
        </div>
    )
}