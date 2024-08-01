import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'd45f9bff8cmshee5089c6d02ee6dp16a38bjsn88c31f210d96',
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        },
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query }
    };

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            setData([]);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch };
}


export default useFetch;