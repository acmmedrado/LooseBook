import axios from 'axios'

const URL_WS = "http://localhost:8080//aluno/salvaAluno"

export default class CadastroUsuarioService {

    async salvar(usuario) {
        let result = await axios.post(URL_WS, usuario)
        return result.data
    }
}