import { apiKey, apiURL } from 'services/settings';

export default async function getTrendingTerms ( { limit = 25 } = {} ) {
    const api = `${apiURL}/trending?api_key=${apiKey}&limit=${limit}&rating=g`;

    try{
        return await fetch(api)
            .then(res => res.json())
            
            .then(res => {
                const { data } = res;
                const trends = data.map(trend => {
                    const { id, url, title } = trend;
                    return { id, url, title }
                })

                return trends;
            })
    }
    catch(e){
        Promise.reject(e);
    }
}
