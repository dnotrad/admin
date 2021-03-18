import React from 'react';
import s from "./Partners.module.css";
import bg from "./../../assets/img/partners-bg.png";
import Table from "./Tabel/Tabel";
const Partners = () => {
    const [isInfo, setIsInfo] = React.useState(false);
    return (
        <div className={s.partners}>
            <div className={s.header}>
                <div className={s.nav}>
                    <div className={`${s.nav_link} ${isInfo ? "" : s.active}`} onClick={() => setIsInfo(false)}>My career</div>
                    <div className={`${s.nav_link} ${isInfo ? s.active : ""}`} onClick={() => setIsInfo(true)}>Information</div>
                </div>
                {isInfo &&
                <div className={s.img}>
                    <img src={bg} alt="partners-bg" />
                </div>}
                <div className={s.header_main}>
                    <div className={s.text}>
                        Для наших партнеров предусмотрена партнерская программа с возможностью получения токенов за приглашение новых пользователей, вознаграждения за закрытие партнерских рангов и фиксированный процентный ежемесячный платеж зависящий от ранга и общего структурного оборота. <br />
                        Всего представлено 17 рангов для закрытия которых необходим определенный компанией личный депозит и общий оборот партнерской структуры. Каждый ранг начиная с первого открывает новые реферальные линии, новый бонус за закрытие партнерского ранга и повышенный фиксированный процентный ежемесячный платеж.
                        Ниже представлена таблица с более подробной информацией
                </div>
                </div>
            </div>
            {isInfo &&<div className={s.tables}>
            <Table />
            </div>}
        </div>
    );
};
export default Partners;