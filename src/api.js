import axios from 'axios';

export const saveArgonaute = async (data)=>{
    try {
        const response = await axios.post(`http://localhost:8000/api/argonautes/register`, data);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export const getAllArgonautes = async ()=>{
    try {
        const response = await axios.get(`http://localhost:8000/api/argonautes`);
        return response.data;
    } catch (err) {
        console.log(err);
    }
    }


export const updateArgonaute = async (data, id)=>{
    try {
        const response = await axios.put(`http://localhost:8000//api/argonautes/${id}`, data);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export const getOneArgonaute = (id)=>{
    return axios.get((`http://localhost:8000//api/argonautes/${id}`)
            .then((response)=>{
                return response.data;
            })
            .catch((err)=>{
                console.log(err);
            })
    );
}