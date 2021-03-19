
const SET_STATISTIC = 'SET_STATISTIC';

let initialState = {
    money: 58340,
    invest: 55438,
    profit: 5438,
    all_income: 125438,
    percent: 100,
    data_statistic: {
        daily: {
            crypt: [{ income: 3, time: 18.04 }, { income: 8, time: 19.04 }, { income: 7, time: 19.04 }, { income: 3, time: 20.04 }, {income: 5, time:21.04}, {income: 10, time:22.04}, {income: 12, time:23.04}, {income: 14, time:24.04}],
            commodyti: [{ income: 1, time: 18.04 }, { income: 2, time: 19.04 }, { income: 3, time: 19.04 }, { income: 8, time: 20.04 }, {income: 6, time:21.04}, {income: 9, time:22.04}, {income: 12, time:23.04}, {income: 16, time:24.04}],
            stock: [{ income: 3, time: 18.04 }, { income: 2, time: 19.04 }, { income: 5, time: 19.04 }, { income: 8, time: 20.04 }, {income: 6, time:21.04}, {income: 10, time:22.04}, {income: 11, time:23.04}, {income: 13, time:24.04}],
        },
        weekly: {
            crypt: [{ income: 3, time: "06.04" }, { income: 8, time: 13.04 }, { income: 7, time: 20.04}, { income: 3, time: 27.04 }, {income: 5, time: "03.04" }, {income: 10, time:10.04}, {income: 12, time:17.04}, {income: 14, time:24.04}],
            commodyti: [{ income: 1, time: "06.04" }, { income: 4, time: 13.04 }, { income: 7, time: 20.04}, { income: 8, time: 27.04 }, {income: 10, time: "03.04" }, {income: 7, time:10.04}, {income: 9, time:17.04}, {income: 12, time:24.04}],
            stock: [{ income: 3, time: "06.04" }, { income: 6, time: 13.04 }, { income: 7, time: 20.04}, { income: 5, time: 27.04 }, {income: 7, time: "03.04" }, {income:9, time:10.04}, {income: 11, time:17.04}, {income: 13, time:24.04}],
        },
        monthly: {
            crypt: [{ income: 3, time: "April 2020" }, { income: 8, time: "May 2020" }, { income: 7, time: "June 2020"}, { income: 3, time: "July 2020" }, {income: 5, time:"August 2020"}, {income: 10, time:"September 2020"}, {income: 12, time:"October 2020"}, {income: 14, time:"November 2020"}],
            commodyti: [{ income: 3, time: "April 2020" }, { income: 8, time: "May 2020" }, { income: 7, time: "June 2020"}, { income: 3, time: "July 2020" }, {income: 5, time:"August 2020"}, {income: 10, time:"September 2020"}, {income: 12, time:"October 2020"}, {income: 14, time:"November 2020"}],
            stock: [{ income: 3, time: "April 2020" }, { income: 8, time: "May 2020" }, { income: 7, time: "June 2020"}, { income: 3, time: "July 2020" }, {income: 5, time:"August 2020"}, {income: 10, time:"September 2020"}, {income: 12, time:"October 2020"}, {income: 14, time:"November 2020"}],
        },
        three_months: {
            crypt: [{ income: 3, time: "June 2018" }, { income: 8, time: "September 2018" }, { income: 7, time: "December 2018"}, { income: 3, time: "March 2019" }, {income: 5, time:"June 2019"}, {income: 10, time:"September 2019"}, {income: 12, time:"January 2020"}, {income: 14, time:"April 2020"}],
            commodyti:  [{ income: 3, time: "June 2018" }, { income: 8, time: "September 2018" }, { income: 7, time: "December 2018"}, { income: 3, time: "March 2019" }, {income: 5, time:"June 2019"}, {income: 10, time:"September 2019"}, {income: 12, time:"January 2020"}, {income: 14, time:"April 2020"}],
            stock:  [{ income: 3, time: "June 2018" }, { income: 8, time: "September 2018" }, { income: 7, time: "December 2018"}, { income: 3, time: "March 2019" }, {income: 5, time:"June 2019"}, {income: 10, time:"September 2019"}, {income: 12, time:"January 2020"}, {income: 14, time:"April 2020"}],
        },
        year: {
            crypt:  [{ income: 3, time: "2013" }, { income: 8, time: "2014" }, { income: 7, time: "2015"}, { income: 3, time: "2016" }, {income: 5, time:"2017"}, {income: 10, time:"2018"}, {income: 12, time:"2019"}, {income: 14, time:"2020"}],
            commodyti: [{ income: 3, time: "2013" }, { income: 8, time: "2014" }, { income: 7, time: "2015"}, { income: 3, time: "2016" }, {income: 5, time:"2017"}, {income: 10, time:"2018"}, {income: 12, time:"2019"}, {income: 14, time:"2020"}],
            stock: [{ income: 3, time: "2013" }, { income: 8, time: "2014" }, { income: 7, time: "2015"}, { income: 3, time: "2016" }, {income: 5, time:"2017"}, {income: 10, time:"2018"}, {income: 12, time:"2019"}, {income: 14, time:"2020"}],
        }
    },
    data_divers: [
        {name: "crypt", value: 400},
        {name: "commodyti", value: 600},
        {name: "stockt", value: 100},
    ],
    actives: [ [{name: "Bitcoin", cap: "61023.0432", profit: 2.46, date: "21.04.2020", up: true},
    {name: "Bitcoin", cap: "60980.0722", profit: 2.8, date: "21.04.2020", up: false},
    {name: "Bitcoin", cap: "61900.0732", profit: 1.46, date: "21.04.2020", up: false},
    {name: "Bitcoin", cap: "62013.0832", profit: 3.46, date: "21.04.2020", up: true},], 
    [{name: "Smth", cap: "598.0432", profit: 2.46, date: "21.04.2020", up: false},
    {name: "Smth", cap: "600.0722", profit: 2.8, date: "21.04.2020", up: false},
    {name: "Smth", cap: "610.0732", profit: 1.46, date: "21.04.2020", up: false},
    {name: "Smth", cap: "613.0832", profit: 3.46, date: "21.04.2020", up: true},], 
    [{name: "LT", cap: "123.0432", profit: 5.46, date: "21.04.2020", up: true},
    {name: "LT", cap: "80.0722", profit: 8.8, date: "21.04.2020", up: false},
    {name: "LT", cap: "90.0732", profit: 34.46, date: "21.04.2020", up: false},
    {name: "LT", cap: "201.0832", profit: 3.46, date: "21.04.2020", up: true},] 
    ],
    profit_total: [
        {min: 4, max: 10, value: 7.63},
        {min: 28, max: 70, value: 34.46},
        {min: 124, max: 310, value: 137.9},
    ],
    show_statistic: "weekly"
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATISTIC:{
            return{
                ...state, show_statistic: action.payload
            }
        }
        default:
            return state
    }
}

export const setShowStatistic = (data) => ({
    type: SET_STATISTIC, payload: data
})

export default ProfileReducer;