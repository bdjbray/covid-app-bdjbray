import Axios from "axios";

export function api() {
    return Axios.create({
        baseURL: 'https://coronavirus-monitor.p.rapidapi.com/',
        headers: {
            'X-RapidAPI-Host': 'coronavirus-monitor.p.rapidapi.com',
            'X-RapidAPI-Key': 'ab7ce94bb5msh5d44aa98ec18c2cp1c84c2jsnf3851d836a13'
        }
    })
}