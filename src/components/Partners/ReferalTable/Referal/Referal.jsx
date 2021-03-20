import React from 'react';
import s from "./Referal.module.css";
import plus from "../../../../assets/icons/plus.svg";
import minus from "../../../../assets/icons/minus.svg";
import Circle from "./../../Circle";
import userImg from "./../../../../assets/img/user.jpg";
import styled from 'styled-components';


const Wrapper = styled.div`
    padding-left: ${props => (props.padd) * 20}px;

`

const Referal = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);
    console.log("first" + isOpen)
    return (
        <div className={`${s.referal} ${props.isFirst ? s.first : ""}`} >
            <div className={`${s.inner} ${props.isFirst ? s.first : ""}`}>
                <Wrapper padd={props.padd}>
                    <div className={s.user}>
                        {!props.isFirst &&
                            <div className={s.stick}>
                                <div className={`${s.stick} ${s.rotate}`}></div>
                            </div>}
                        <button disabled={props.refs.length < 1} className={s.button} onClick={() => setIsOpen(!isOpen)}>
                            {isOpen
                                ? <img src={minus} alt="minus" />
                                : <img src={plus} alt="plus" />}
                        </button>
                        <div className={s.user_img}>
                            <img src={userImg} alt="" />
                        </div>
                        <div className={s.user_info}>
                            <div className={s.user_name}>{props.name}</div>
                            <div className={s.user_id}>{props.id}</div>
                        </div>
                    </div>
                </Wrapper>
                <div className={s.line}><Circle color="#E16767" /><span>{props.line} линия</span></div>
                <div className={s.line}>134 рефералов</div>
                <div className={s.line}>{props.padd* 20}</div>
            </div>

            {isOpen && (props.refs.length > 0) ? props.refs.map((ref) =>
                <Referal fn={setIsOpen}
                    // padd={props.line > 4 ? (props.line + 1 % 5) : props.line + 1}
                    // padd={props.line > 4 ? (((props.line + 2) % 5) ? (props.line + 2) % 5 : 5 ) : props.line}
                    padd={props.line > 4 ? props.line % 5 : props.line}
                    line={props.line + 1}
                    name={ref.userName}
                    id={ref.userId}
                    refs={ref.referals} />) : ""}
        </div>
    );
};

export default Referal;