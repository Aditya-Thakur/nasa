import axios from 'axios';
import { properties } from '../assets/constants';

export async function login(data) {
    const res = await axios.post( properties.urls.user.login, data);
    return res.data;
}