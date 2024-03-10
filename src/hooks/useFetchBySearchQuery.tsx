import { useEffect, useState } from 'react'
import { axiosClient } from '../ApiClient';

const useFetchBySearchQuery = (url: string, subject: string, searchQuery: string) => {
    const [data, setData] = useState(null);
    if (searchQuery && searchQuery.trim() === ""){
        setData(null);
        return [];
    };
    useEffect(() => {
        searchQuery.trim() !== "" && axiosClient(`${url}/search?q=${searchQuery}`)
            .then(response => setData(response.data[subject]))
            .catch(error => new Error(error.message))
    },[url, searchQuery, subject])
  return data
}

export default useFetchBySearchQuery;