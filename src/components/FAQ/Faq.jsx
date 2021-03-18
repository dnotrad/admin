import React from 'react';
import s from "./Faq.module.css";
import questionMark from "./../../assets/icons/question-mark.svg";
import arrow from "./../../assets/icons/arrow-down.svg";
const cardInfo = [
    { title: "Что такое токен DTN ?", content: "Токен DTN - это универсальная внутренняя валюта компании, которая была создана для удобства работы внутри системы. 1 токен OSMI = $1 США." },
    { title: "Почему мне нужно верифицировать мой профиль ?", content: "Инвестирование в компании доступно только лицам, достигшим совершеннолетия." },
    { title: "Как мне верифицировать мой профиль ?", content: 'В Личном Кабинете откройте "НАСТРОЙКИ". Найдите раздел "ВЕРИФИКАЦИЯ" и загрузите все необходимые документы.' },
    { title: "Какая минимальная сумма для открытия тарифного плана ?", content: "Минимальная сумма для открытия депозита 50 токенов DTN ($ 50 US)." },
    { title: "Как мне пополнить свой кошелек ?", content: 'В личном кабинете откройте "КОШЕЛЬКИ". Выберете  кошелек в зависимости от валюты или криптовалюты, которая будет использована для пополнения. Укажите сумму и платежный сервис. Следуйте дальнейшим инструкциям выбранного платежного сервиса.' },
    { title: "Как мне купить/продать токен DTN ?", content: 'В Личном Кабинете откройте "КОШЕЛЬКИ". Найдите кошелек DTN или другой валюты или криптовалюты. Нажмите "КУПИТЬ" и укажите сумму и ваш другой кошелек с которого будет совершена покупка' }
]
const Card = (props) => {
    const [isOpen, setIsOpen] = React.useState(false)
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
    return (
        <div className={s.faq}>
            <div className={s.title}>FAQ / <span> Часто задаваемые вопросы </span></div>
            {cardInfo.map((card) => <Card title={card.title} content={card.content} />)}
        </div>
    );
};

export default Faq;