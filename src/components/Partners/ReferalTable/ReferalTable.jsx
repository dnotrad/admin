import React from 'react';
import Referal from './Referal/Referal';
import s from "./ReferalTable.module.css";
const ReferalTable = () => {
    const user14 = {
        userName: "Рефер 4",
        userId: "575798",
        referals: []
    }
    const user13 = {
        userName: "Рефер 4",
        userId: "575798",
        referals: [user14]
    }
    const user12 = {
        userName: "Рефер 4",
        userId: "575798",
        referals: [user13]
    }
    const user11 = {
        userName: "Рефер 4",
        userId: "575798",
        referals: [user12]
    }
    const user10 = {
        userName: "Рефер 4",
        userId: "575798",
        referals: [user11]
    }

    const user9 = {
        userName: "Рефер 4",
        userId: "575798",
        referals: [user10]
    }
    const user8 = {
        userName: "Рефер 4",
        userId: "575798",
        referals: [user9]
    }
    const user7 = {
        userName: "Рефер 4",
        userId: "575798",
        referals: [user8]
    }
    const user6 = {
        userName: "Рефер 4",
        userId: "575798",
        referals: [user7]
    }
    const user5 = {
        userName: "Рефер 4",
        userId: "575798",
        referals: [user6]
    }
    const user4 = {
        userName: "Рефер 4",
        userId: "575798",
        referals: [user5]
    }
    const user1 = {
        userName: "Андрей",
        userId: "789456",
        referals: [user4]
    }
    const user3 = {
        userName: "Анна",
        userId: "478532",
        referals: [user1]
    }
    const user2 = {
        userName: "Евгений",
        userId: "567951",
        referals: [user3]
    }

    const currentUser = {
        userName: "Daniel",
        userId: "456123",
        referals: [user1, user2, user3, user4, user5]
    }

    const [line, setLine] = React.useState(1);

    return (
        <div className={s.table}>
            <div className={s.header}>
                <div className={s.header_id}>ID реферала</div>
                <div className={s.header_line}>Линия</div>
                <div className={s.header_refs}>Кол-во рефералов</div>
                <div className={s.header_info}>Информация</div>
            </div>
            <div className={s.referals}>
                {currentUser.referals.map((ref) => <Referal isFirst={true} line={1} padd={0} name={ref.userName} id={ref.userId} refs={ref.referals} />)}
            </div>
        </div>
    );
};

export default ReferalTable;