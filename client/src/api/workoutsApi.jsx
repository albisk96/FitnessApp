import axios from 'axios'

const API_ROOT = 'http://localhost:4000';

const resBody = res => res.data;

export const requests = {
    get: url =>
        axios.get(`/api/${url}`).then(resBody)
};

export const getData = ({ setData }) => {
        axios.get('/api/users')
        .then(
            res => setData(res.data)
        ).catch(function(err){
            console.log(err)
        })
}
