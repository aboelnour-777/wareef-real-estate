import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);


    useEffect( () => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
        .then(response => {
            if(!response.ok) {
                throw Error('Could not fetch data at the moment.')
            }
            return response.json();
        })
        .then( data => {
            setData(data);
            setError(null);
        })
        .catch(err => {
            if (err.name !== 'AbortError') {
                setError(err.message);
            }
        })
        return () => abortCont.abort();
    }, [url]);

    return {data, error}
}

export default useFetch;