import React from 'react';
import s from "./Faq.module.css";
import questionMark from "./../../assets/icons/question-mark.svg";
import arrow from "./../../assets/icons/arrow-down.svg";

import { useTranslation } from "react-i18next";


const Card = (props) => {
    const { t, i18n } = useTranslation(); //хук для смены языка
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className={s.card} onClick={() => setIsOpen(!isOpen)}>
            <div className={s.inner}>
                <div className={s.card_img}>
                    <img src={questionMark} alt="img" />
                </div>
                <div className={s.card_title}>{props.title}</div>
                <div className={`${s.card_arrow} ${isOpen ? s.active : ""}`}>
                    <img src={arrow} alt="arrow"/>
                </div>
            </div>

            {isOpen &&
                <div className={s.card_text}>{props.content}</div>
            }
        </div>
    )
}

const Faq = () => {
    const { t, i18n } = useTranslation(); //хук для смены языка
    const cardInfo = [
        { title: t("faq.1.title"), content: t("faq.1.content") },
        { title: t("faq.2.title"), content: t("faq.2.content") },
        { title: t("faq.3.title"), content: t("faq.3.content") },
        { title: t("faq.4.title"), content: t("faq.4.content") },
        { title: t("faq.5.title"), content: t("faq.5.content") },
        { title: t("faq.6.title"), content: t("faq.6.content") },
        { title: t("faq.7.title"), content: t("faq.7.content") },
        { title: t("faq.8.title"), content: t("faq.8.content") },
        { title: t("faq.9.title"), content: t("faq.9.content") },
        { title: t("faq.10.title"), content: t("faq.10.content") },
        { title: t("faq.11.title"), content: t("faq.11.content") },
        { title: t("faq.12.title"), content: t("faq.12.content") },
    ]
    return (
        <div className={s.faq}>
            <div className={s.title}>FAQ / <span> {t("faq.title")}</span></div>
            {cardInfo.map((card) => <Card title={card.title} content={card.content} />)}
        </div>
    );
};

export default Faq;