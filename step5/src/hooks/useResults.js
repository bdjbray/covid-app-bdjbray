import { useState, useEffect } from "react";
import covidApi from '../api/Api'



export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async () => { 
        setErrorMessage('None')
        try {
            const response = await covidApi.get('/summary')//, {
                
            setResults(response.data.Countries) 
        } catch (err) {
            console.log('')
            console.log(err)
            console.log('')
            setErrorMessage('error ')
        }
    }

    
    useEffect(() => {
        searchApi()
    }, [])
    return [searchApi, results, errorMessage];
};
