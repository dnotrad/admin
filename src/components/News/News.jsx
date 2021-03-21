import React from 'react';
import s from "./News.module.css";
import newsImg from "./../../assets/img/news.jpg";
import arrow from "./../../assets/icons/arrow-to-right.svg";
const NewsItem = (props) => {
    return (
        <div className={s.item}>
            <div className={s.item_inner}>
                <div className={s.item_img}>
                    <img src={props.img} alt="newsImg" />
                </div>
                <div className={s.item_title}>
                    {props.title}
                </div>
                <div className={s.item_info}>
                    <div className={s.info_date}>
                        {props.date}
                    </div>
                    <div className={s.info_link}>
                        <span>Read more</span>
                        <img src={arrow} alt="arrow"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const News = () => {
    return (
        <div className={s.news}>
            <div className={s.inner}>
                <NewsItem img={newsImg} title="A strategy for your success." date="16 March 1992" />
                <NewsItem img={newsImg} title="A strategy for your success." date="16 March 1992" />
                <NewsItem img={newsImg} title="A strategy for your success." date="16 March 1992" />
                <NewsItem img={newsImg} title="A strategy for your success." date="16 March 1992" />
                <NewsItem img={newsImg} title="A strategy for your success." date="16 March 1992" />
                <NewsItem img={newsImg} title="A strategy for your success." date="16 March 1992" />
                <NewsItem img={newsImg} title="A strategy for your success." date="16 March 1992" />
                <NewsItem img={newsImg} title="A strategy for your success." date="16 March 1992" />
                <NewsItem img={newsImg} title="A strategy for your success." date="16 March 1992" />
                <NewsItem img={newsImg} title="A strategy for your success." date="16 March 1992" />
                <NewsItem img={newsImg} title="A strategy for your success." date="16 March 1992" />
                <NewsItem img={newsImg} title="A strategy for your success." date="16 March 1992" />
            </div>
        </div>
    );
};

export default News;