import axios from 'axios'

const URL_WS = "http://localhost:8080/escolha"

export default class EscolhaService {

    async listarEscolhasPorPeriodo(periodo) {
        let result = await axios.get(URL_WS)
        return result.data
    }
}