import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://cloud.iexapis.com/stable/',
});

export const QuotesAPI = {
    getQuotes(payload = 'USD'){
        return instance.get(`stock/${payload}/quote/?token=pk_d1131b0a66d242548a3e56d4804c9e44`).then((response)=>{
            return response
        }).catch((response)=>{
            return 0
        })
    },
    getStatistic(payload='USD'){
        return instance.get(`/fx/historical?symbols=${payload}&token=pk_d1131b0a66d242548a3e56d4804c9e44`).then((response)=>{
            return response
        }).catch((response)=>{
            return 0
        })
    }
}