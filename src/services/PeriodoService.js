import axios from 'axios'

const URL_WS = "http://localhost:8080/periodo"

export default class PeriodoServices {

    async listAll() {
        let result = await axios.get(URL_WS)
        return result.data
    }
}