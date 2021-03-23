import React, { useState } from 'react';
import s from './PopUpWallets.module.css';
import close from '../../../../assets/icons/close.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setInvest, setMoney } from '../../../../redux/ProfileReducer';
import Alerts from '../../Alerts/Alert';

export default function PopUpWallets(props) {
    const [option, setOption] = useState(0);
    const [option2, setOption2] = useState("");
    const [currency, setCurrency] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [open, setOpen] = useState(false);

    const data = useSelector(state => state.profile);
    const dispatch = useDispatch();
    const [alertData, setAlertData] = useState({
        error: false,
        msg: "Операция прошла успешно",
    })

    function handler(e) {
        e.preventDefault(e);
        setOption(e.target.value);
    }
    function handler2(e) {
        e.preventDefault(e);
        setOption2(e.target.value);
    }
    return (
        <div className={s.popUp_wrapper}>
            <Alerts setOpen={setOpen} error={alertData.error} msg={alertData.msg} open={open} />
            <div className={s.popUp_body}>
                <div className={s.popUp_header}>
                    <span>{props.title}</span>
                    <img src={close} alt="" onClick={() => { props.close(false); setIsActive(false); setOpen(false) }} />
                </div>
                <div className={s.popUp_options}>
                    <div className={s.option}>
                        <span>{props.fOption}</span>
                        <input onChange={handler} value={option} type="number" />
                    </div>
                    <div className={s.option}>
                        <span>{props.SOption}</span>
                        {props.currency ?
                            <div className={s.currency_body}>
                                <input value={option / (currency === 0 ? 1 : currency === 1 ? 1.1 : 1000) + (currency === 0 ? " USD" : currency === 1 ? " EUR" : " BTC")} type="text" />
                                <svg onClick={() => setIsActive(!isActive)} width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.00005 1.88661L4.64005 3.52661C4.90005 3.78661 5.32005 3.78661 5.58005 3.52661C5.84005 3.26661 5.84005 2.84661 5.58005 2.58661L3.46672 0.466606C3.20672 0.206606 2.78672 0.206606 2.52672 0.466606L0.413384 2.58661C0.153384 2.84661 0.153384 3.26661 0.413384 3.52661C0.673384 3.78661 1.09338 3.78661 1.35338 3.52661L3.00005 1.88661ZM3.00005 10.1133L1.36005 8.47327C1.10005 8.21327 0.680051 8.21327 0.420051 8.47327C0.160051 8.73327 0.160051 9.15327 0.420051 9.41327L2.53338 11.5333C2.79338 11.7933 3.21338 11.7933 3.47338 11.5333L5.58672 9.41994C5.84672 9.15994 5.84672 8.73994 5.58672 8.47994C5.32672 8.21994 4.90672 8.21994 4.64672 8.47994L3.00005 10.1133Z" fill="#504D85" />
                                </svg>
                                <div className={`${s.currency_body_options} ${isActive && s.active}`}>
                                    <span onClick={() => setCurrency(0)}>USD</span>
                                    <span onClick={() => setCurrency(1)}>EUR</span>
                                    <span onClick={() => setCurrency(2)}>BTC</span>
                                </div>
                            </div> : <input value={option2} onChange={handler2} type="text" placeholder={props.SOptionPlace} />
                        }


                    </div>
                </div>
                <div className={s.popUp_btn}>
                    <div className={s.popUp_btn_body} onClick={() => {
                        if (props.currency) {
                            if (props.nameBtn === "Купить") {
                                if (parseFloat(option) > 0) {
                                    dispatch(setMoney(data.money + parseFloat(option)));
                                    setAlertData({
                                        error: false,
                                        msg: "Операция прошла успешно",
                                    })
                                    setOpen(true);
                                    let timer = setTimeout(() => setOpen(false), 5000);
                                } else {
                                    setAlertData({
                                        error: true,
                                        msg: "Введите сумму пополнения",
                                    })
                                    setOpen(true);
                                    let timer = setTimeout(() => setOpen(false), 5000);
                                }

                            } else if (props.nameBtn === "Продать") {
                                if (parseFloat(option) > 0) {
                                    if (parseFloat(option) < data.money) {
                                        dispatch(setMoney(data.money - parseFloat(option)));
                                        setAlertData({
                                            error: false,
                                            msg: "Операция прошла успешно",
                                        })
                                        setOpen(true);
                                        let timer = setTimeout(() => setOpen(false), 5000);
                                    } else {
                                        setAlertData({
                                            error: true,
                                            msg: "У вас недостаточно средств",
                                        })
                                        setOpen(true);
                                        let timer = setTimeout(() => setOpen(false), 5000);
                                    }

                                } else {
                                    setAlertData({
                                        error: true,
                                        msg: "Введите сумму пополнения",
                                    })
                                    setOpen(true);
                                    let timer = setTimeout(() => setOpen(false), 5000);
                                }

                            }

                            else if (props.nameBtn === "Пополнить") {
                                if (data.money / props.cost >= 1) {
                                    dispatch(setInvest(data.invest + parseFloat(option)))
                                    dispatch(setMoney(data.money - parseFloat(option)));
                                    setAlertData({
                                        error: false,
                                        msg: "Операция прошла успешно",
                                    })
                                    setOpen(true);
                                    let timer = setTimeout(() => setOpen(false), 5000);
                                } else {
                                    setAlertData({
                                        error: true,
                                        msg: "У вас недостаточно средств",
                                    })
                                    setOpen(true);
                                    let timer = setTimeout(() => setOpen(false), 5000);
                                }
                            } else if (props.nameBtn === "Вывести") {
                                if (parseFloat(option) <= data.money) {
                                    dispatch(setMoney(data.money - parseFloat(option)));
                                    setAlertData({
                                        error: false,
                                        msg: "Операция прошла успешно",
                                    })
                                    setOpen(true);
                                    let timer = setTimeout(() => setOpen(false), 5000);
                                } else {
                                    setAlertData({
                                        error: true,
                                        msg: "У вас недостаточно средств",
                                    })
                                    setOpen(true);
                                    let timer = setTimeout(() => setOpen(false), 5000);
                                }
                            }

                        } else {
                            if (parseFloat(option) > 0) {
                                if (parseFloat(option) < data.money) {
                                    dispatch(setMoney(data.money - parseFloat(option)));
                                    if (option2 === "" || option2.slice(0, 2) !== "ID" || option2.length !== 10) {
                                        setAlertData({
                                            error: true,
                                            msg: "Такого ID не существует",
                                        })
                                        setOpen(true);
                                        let timer = setTimeout(() => setOpen(false), 5000);
                                    } else if (data.money < parseFloat(option)) {
                                        setAlertData({
                                            error: true,
                                            msg: "У вас недостаточно средств",
                                        })
                                        setOpen(true);
                                        let timer = setTimeout(() => setOpen(false), 5000);
                                    } else {
                                        dispatch(setMoney(data.money - parseFloat(option)));
                                        setAlertData({
                                            error: false,
                                            msg: "Операция прошла успешно",
                                        })
                                        setOpen(true);
                                        let timer = setTimeout(() => setOpen(false), 5000);
                                    }


                                } else {
                                    setAlertData({
                                        error: true,
                                        msg: "У вас недостаточно средств",
                                    })
                                    setOpen(true);
                                    let timer = setTimeout(() => setOpen(false), 5000);
                                }

                            } else {
                                setAlertData({
                                    error: true,
                                    msg: "Введите сумму пополнения",
                                })
                                setOpen(true);
                                let timer = setTimeout(() => setOpen(false), 5000);
                            }


                        }
                    }}>
                        <span>{props.nameBtn}</span>
                    </div>

                </div>
            </div>
        </div >
    )
}