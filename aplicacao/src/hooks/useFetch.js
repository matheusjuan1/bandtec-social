import React from 'react'

export const useFetch = () => {
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(null);

    const request = React.useCallback(async (req) => {
        let response;
        try {
            setError(null);
            setLoading(true);
            response = await req;
            if (response.status >= 299) throw new Error(response.response)
        } catch (err) {
            response = null;
            setError(err.message)
        } finally {
            setData(response);
            setLoading(false);
            return response
        }
    }, [])

    return {
        data, loading, error, request, setError
    }
}

export default useFetch;
