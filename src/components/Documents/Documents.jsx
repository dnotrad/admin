import React from 'react';
import s from "./Documents.module.css";
import pdfImg from "../../assets/icons/pdf.svg";
import arrowRight from "../../assets/icons/arrow-to-right.svg";
import docImg from "../../assets/img/doc.jpg";


const Block = (props) => {
    return (
        <div className={`${s.block} ${s[`block_${props.nubmer}`]} `}>
            <div className={s.inner}>
                <div className={s.block_img}>
                    <img src={pdfImg} alt="pdfImg" />
                </div>
                <div className={s.block_info}>
                    <div className={s.info_title}>{props.title}</div>
                    <div className={s.info_more}>
                        <div className={s.more_text}>Подробнее</div>
                        <div className={s.more_button}>
                            <img src={arrowRight} alt="arrowRight" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const data = [
    { id: 1, title: "AML POLICY" },
    { id: 2, title: "PROTECTION OF USER PERSONAL DATA" },
    { id: 3, title: "AML POLICY" },
    { id: 4, title: "USER NOTIFICATION" },
    { id: 5, title: "PROTECTION OF USER PERSONAL DATA" },
    { id: 6, title: "USER NOTIFICATION" },
]

const Documents = () => {
    return (
        <div className={s.documents}>
            <div className={`${s.block} ${s.header}`}>
                <div className={s.title}>
                    Documents
                </div>
                <div className={s.text}>В Портфолио вы можете просмотреть всю интересующую вас информацию о ваших работающих депозитах, а так же  посмотреть историю начислений и пополнений,  установить желаемое значение Авто-реинвеста, воспользоваться функцией Ребалансировки и Реинвестирования.</div>
            </div>
            <div className={s.wrapper}>
                <div className={`${s.block} ${s.big_pdf}`}>
                    <div className={s.img_wrap}>
                        <div className={s.main_doc}>
                            <img src={docImg} alt="docImg" />
                        </div>
                        <div className={s.bottom}>
                            <div className={s.bottom_inner}>
                                <div className={`${s.bottom_title}`}>AML POLICY</div>
                                <div className={s.bottom_subtitle}>PDF</div>
                            </div>
                        </div>
                    </div>
                </div>
                {data.map(el => <Block nubmer={el.id} title={el.title} key={el.id} />)}
            </div>
        </div>
    );
};

export default Documents;