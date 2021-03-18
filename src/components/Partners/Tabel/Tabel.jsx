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

const Tabel = () => {
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

                {/* ранги */}
                {/* <div className={`${s.rang_0} ${s.rang}`}>Ранг</div>
                <div className={`${s.rang_1} ${s.rang}`}>Ранг</div>
                <div className={`${s.rang_2} ${s.rang}`}>Ранг</div>
                <div className={`${s.rang_3} ${s.rang}`}>Ранг</div> */}

                {/* rows */}
                <Row row={0} rowProps={rowProps} />
                <Row row={1} rowProps={rowProps}/>
                <Row row={2} rowProps={rowProps}/>
                <Row row={3} rowProps={rowProps}/>
            </div>
        </div>
    );
};

export default Tabel;