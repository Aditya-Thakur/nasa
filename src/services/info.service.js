import axios from 'axios';
import { properties } from '../assets/constants';

export async function browse() {
    const res = await axios.get(properties.urls.browse, {params: {
        api_key: properties.API_KEY
    }});
    return res.data;
}
export async function feed(dateRange) {
    const res = await axios.get(properties.urls.feed, {params: {
        start_date: dateRange.startDate,
        end_date: dateRange.endDate,
        api_key: properties.API_KEY
    }});
    return res.data;
}
export async function lookup(asteroidId) {
    const res = await axios.get(properties.urls.lookup + asteroidId, {params: {
        api_key: properties.API_KEY
    }});
    return res.data;
}
