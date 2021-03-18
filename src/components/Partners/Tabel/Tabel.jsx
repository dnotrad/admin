import React from 'react';
import s from "./Tabel.module.css"

const rowProps = {
    deposit: "50$",
    left_branch: "0$",
    right_branch: "0$",
    first_line: "5.00%",
    second_line: "",
    third_line: "",
    fourth_line: "",
    fifth_line: "",
    dd_structure: "0.00%",
    bonus: "",
}

const Row = (props) => {
    return (
        <div className={`${s[`row_${props.row}`]}`}>
            <div className={`${s.row_cell} ${s.first}`}>
                <s className={s.row_rang}></s>
                <span>Ранг {props.row}</span>
            </div>
            <div className={s.row_cell}>{props.rowProps.deposit}</div>
            <div className={s.row_cell}>{props.rowProps.left_branch}</div>
            <div className={s.row_cell}>{props.rowProps.right_branch}</div>
            <div className={s.row_cell}>{props.rowProps.first_line}</div>
            <div className={s.row_cell}>{props.rowProps.second_line}</div>
            <div className={s.row_cell}>{props.rowProps.third_line}</div>
            <div className={s.row_cell}>{props.rowProps.fourth_line}</div>
            <div className={s.row_cell}>{props.rowProps.fifth_line}</div>
            <div className={s.row_cell}>{props.rowProps.dd_structure}</div>
            <div className={s.row_cell}>{props.rowProps.bonus}</div>
        </div>
    )
}

const Tabel = (props) => {
    return (
        <div className={s.tabel}>
            <div className={s.inner}>
                <div className={`${s.status} ${s.cell}`}>Статус</div>
                <div className={`${s.deposit} ${s.cell}`}>Личный депозит</div>
                <div className={`${s.left_branch} ${s.cell}`}>Левая ветка</div>
                <div className={`${s.right_branch} ${s.cell}`}>Правая ветка</div>
                <div className={`${s.first_line} ${s.cell}`}>1 линия</div>
                <div className={`${s.second_line} ${s.cell}`}>2 линия</div>
                <div className={`${s.third_line} ${s.cell}`}>3 линия</div>
                <div className={`${s.fourth_line} ${s.cell}`}>4 линия</div>
                <div className={`${s.fifth_line} ${s.cell}`}>5 линия</div>
                <div className={`${s.dd_structure} ${s.cell}`}>Д от д структуры</div>
                <div className={`${s.bonus} ${s.cell}`}>Бонус за закрытие</div>
                {/* rows */}
                <Row row={0} rowProps={rowProps} />
                <Row row={1} rowProps={rowProps} />
                <Row row={2} rowProps={rowProps} />
                <Row row={3} rowProps={rowProps} />
            </div>
            <div className={s.texts}>
                <div className={s.text}>
                    {props.text}
                </div>
                <div className={s.text}>
                    {props.text2}
                </div>
            </div>
        </div>
    );
};

const Tabels = () => {
    return (
        <>
            <Tabel text="По достижению статуса 5, максимальное количество открытых линий - 3, бонус за доход от структуры - 2% и бонус за закрытие -500 токенов." />
            <Tabel text="Обратите внимание, что после закрытия 5 статуса для получения бонусов за закрытие статусов Manger и Top Manager вам необходимо иметь в структуре не менее двух активных партнеров c указанными в таблице структурными оборотами, которые будут отображены как Левая и Правая ветка." text2="К Левой ветке относится структура активного партнера с меньшим оборотом, а к Правой с большим. По достижению статуса M1 открывается - 4 реферальная линия, бонус за доход от структуры равняется - 3% и максимальный бонус за закрытие статуса M5 - 5000 токенов."/>
            <Tabel text="По достижению статуса TM1 открывается  - 5 реферальная линия, бонус за доход от структуры равняется - 4%, начиная с TM5 - 5% и максимальный бонус за закрытие статуса TM7 - 20000 токенов." />
        </>
    )
}

export default Tabels;