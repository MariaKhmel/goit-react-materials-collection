import axios from 'axios'

axios.defaults.baseURL = 'https://65d1655fab7beba3d5e452c6.mockapi.io';

export const addmaterial = async (values) => {
    const response = await axios.post('/materials', values);
    return response.data;
}

export const getMaterials = async () => {
    const response = await axios.get('/materials');
    return response.data;
}

export const deleteMaterial = async (id) => {
    const response = await axios.delete(`/materials/${id}`);
    return response.data;
}

export const updateMaterials = async update => {
    const response = await axios.put(`/materials/${update.id}`, update);
    return response.data;
}