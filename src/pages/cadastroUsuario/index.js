import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import withStyles from "@material-ui/core/styles/withStyles";
import Style from './StyleCadastroUsuario'
import CadastroUsuarioService from '../../services/CadastroUsuarioService';



class MiniDrawer extends React.Component {

  constructor(props) {
    super(props)
    this.classes = props.classes

    this.state = {
      usuario: '',
      senha: '',
      email: '',
      nome: '',
      curso: '',
      semestre: 0,
      confirmacao: ''
    }

    this.cadastroUsuarioService = new CadastroUsuarioService()

  }

  salvarUsuario() {

    if (this.state.senha === this.state.confirmacao) {
      var usuario = {
        usuario: this.state.usuario,
        senha: this.state.senha,
        email: this.state.email,
        nome: this.state.nome,
        curso: this.state.curso,
        semestre: this.state.semestre,
      }

      let promise = this.cadastroUsuarioService.salvar(usuario)
      promise.then(() => {
        alert('Usuário cadastrado com sucesso!')
      })
      promise.catch((e) => {
        alert('Erro ao cadastrar usuário ' + e.message)
      })
    }
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value })
  }


  render() {
    return (
      <div>
        <React.Fragment>
          <Container fixed>
            <Card className={this.classes.card}>

              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography className={this.classes.title} color="primary">
                    Cadastro de usuário
                    </Typography>
                  <Typography className={this.classes.subtitle} color="textSecondary" >
                    Preencha os campos solicitados para realizar seu cadastro na plataforma LooseBook.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={1}>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-Nome"
                    label="Nome"
                    className={this.classes.textField}
                    variant="outlined"
                    name='nome'
                    onChange={(e) => this.handleInput(e)}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    id="outlined-Usuario"
                    label="Nome de usuário"
                    className={this.classes.textField}
                    variant="outlined"
                    name='usuario'
                    onChange={(e) => this.handleInput(e)}
                  />
                </Grid>

                <Grid item xs={12} sm={4}>
                  <TextField
                    id="outlined-Email"
                    label="E-mail"
                    className={this.classes.textField}
                    variant="outlined"
                    name="email"
                    onChange={(e) => this.handleInput(e)}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    id="outlined-Senha"
                    label="Senha"
                    className={this.classes.textField}
                    variant="outlined"
                    name="senha"
                    onChange={(e) => this.handleInput(e)}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    id="outlined-Paginas"
                    label="Confirmação da senha"
                    className={this.classes.textField}
                    variant="outlined"
                    name="confirmacao"
                    onChange={(e) => this.handleInput(e)}
                  />
                </Grid>

                <Grid item xs={12} sm={1}>
                </Grid>
                <Grid item xs={12} sm={1}>
                </Grid>
                <Grid item xs={12} sm={5}>
                  <TextField
                    id="outlined-Curso"
                    label="Curso"
                    className={this.classes.textField}
                    variant="outlined"
                    name="curso"
                    onChange={(e) => this.handleInput(e)}
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <TextField
                    id="outlined-Semestre"
                    label="Semestre"
                    className={this.classes.textField}
                    variant="outlined"
                    name="semestre"
                    onChange={(e) => this.handleInput(e)}
                  />
                </Grid>
                <Grid item xs={12} sm={3} container justify="center" alignItems="center">

                </Grid>
                <Grid item xs={12} sm={1}>
                </Grid>
                <Grid item xs={12} sm={7}>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Button className={this.classes.buttonSecundario}>Cancelar</Button>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Button className={this.classes.buttonPrincipal}>Salvar</Button>
                </Grid>
              </Grid>
            </Card>
          </Container>
        </React.Fragment>
      </div>
    )
  }
}

export default withStyles(Style)(MiniDrawer)
