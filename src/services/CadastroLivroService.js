import axios from 'axios'

const URL_WS = "http://localhost:8080/livro"

export default class CadastroLivroService {

    async salvar(livro) {
        let result = await axios.post(URL_WS, livro)
        return result.data
    }
}