import React from 'react';
import { Table } from '../table/Table';
import s from "./Garant.module.css";
import userImg from "./../../assets/img/user.jpg";
import acceptImg from "./../../assets/icons/accept.svg";
import requestImg from "./../../assets/icons/request.svg";
import DTNIcon from "./../../assets/icons/DTN-icon-small.svg";
import Button from "../btns/BlueButton";
import Input from '../Profile/Input/Input';
const Garant = () => {
    return (
        <div className={s.garant}>
            <div className={`${s.block} ${s.top}`}>
                <div className={s.title}>
                    Гарант сервис
                </div>
                <div className={s.text}>Профессиональное поле деятельности нашего холдинга, базирующегося на территории США, — многовекторное инвестирование в самые ликвидные и высокодоходные инструменты криптовалютного, фондового и товарно-сырьевого рынка. Мы помогаем частным инвесторам защитить и многократно приумножить капиталы, обогнать инфляцию и даже в кризис уверенно смотреть в будущее.
                </div>
            </div>
            <div className={s.blocks}>
                <div className={s.block}>
                    <div className={s.title}>Уведомление о запросе на совместную сделку</div>
                    <div className={s.main}>
                        <div className={s.user}>
                            <div className={s.user_img}>
                                <img src={userImg} alt="userImg" />
                            </div>
                            <div className={s.user_info}>
                                <div className={s.user_name}>Username</div>
                                <div className={s.user_id}>ID 785645</div>
                            </div>
                        </div>
                        <div className={s.deal}>
                            <div className={s.deal_img}>
                                <img src={DTNIcon} alt="DTNIcon" />
                            </div>
                            <div className={s.deal_info}>
                                <div className={s.deal_title}>Сумма сделки</div>
                                <div className={s.deal_count}>67.00 TKN</div>
                            </div>
                        </div>
                        <Button img={acceptImg} title="Подтвердить" />
                    </div>
                </div>
                <div className={s.block}>
                    <div className={s.title}>Запрос на сделку</div>
                    <div className={s.main}>
                        <div className={s.input}>
                            <div className={s.input_title}>ID:</div>
                            <input type="text" pattern="\d[0-9]" placeholder="00-00-00" />
                        </div>
                        <div className={s.input}>
                            <div className={s.input_title}>Сумма:</div>
                            <input type="text" placeholder="67.00 TKN" />
                        </div>

                        <Button img={requestImg} title="Запросить" />
                    </div>
                </div>
            </div>
            <div className={s.block}>
                <div className={s.title}>История сделок</div>
                <Table
                    columns={6}
                    rows={10}
                    data={
                        [
                            { "ID сделки": "1", "Дата запуска": "1", "Дата завершения": "1", "Осталось": "1", "Внесенная сумма": "1", "Заработано": "1" },
                            { "ID сделки": "ID 328849", "Дата запуска": "16/02/2020", "Дата завершения": "16/02/2020", "Осталось": "90 дней", "Внесенная сумма": "$ 56 703.003", "Заработано": "$ 56 703.003" },
                            { "ID сделки": "ID 328849", "Дата запуска": "16/02/2020", "Дата завершения": "16/02/2020", "Осталось": "90 дней", "Внесенная сумма": "$ 56 703.003", "Заработано": "$ 56 703.003" },
                            { "ID сделки": "ID 328849", "Дата запуска": "16/02/2020", "Дата завершения": "16/02/2020", "Осталось": "90 дней", "Внесенная сумма": "$ 56 703.003", "Заработано": "$ 56 703.003" }, { "ID сделки": "ID 328849", "Дата запуска": "16/02/2020", "Дата завершения": "16/02/2020", "Осталось": "90 дней", "Внесенная сумма": "$ 56 703.003", "Заработано": "$ 56 703.003" }, { "ID сделки": "ID 328849", "Дата запуска": "16/02/2020", "Дата завершения": "16/02/2020", "Осталось": "90 дней", "Внесенная сумма": "$ 56 703.003", "Заработано": "$ 56 703.003" }, { "ID сделки": "ID 328849", "Дата запуска": "16/02/2020", "Дата завершения": "16/02/2020", "Осталось": "90 дней", "Внесенная сумма": "$ 56 703.003", "Заработано": "$ 56 703.003" }, { "ID сделки": "ID 328849", "Дата запуска": "16/02/2020", "Дата завершения": "16/02/2020", "Осталось": "90 дней", "Внесенная сумма": "$ 56 703.003", "Заработано": "$ 56 703.003" }, { "ID сделки": "ID 328849", "Дата запуска": "16/02/2020", "Дата завершения": "16/02/2020", "Осталось": "90 дней", "Внесенная сумма": "$ 56 703.003", "Заработано": "$ 56 703.003" }, { "ID сделки": "ID 328849", "Дата запуска": "16/02/2020", "Дата завершения": "16/02/2020", "Осталось": "90 дней", "Внесенная сумма": "$ 56 703.003", "Заработано": "$ 56 703.003" },
                        ]}
                    colour={["#FFFFFF", "#FBFBFD"]}
                    withSort={true} />
            </div>
        </div>
    );
};

export default Garant;