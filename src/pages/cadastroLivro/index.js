import React from 'react';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Style from './StyleCadastroLivro'
import withStyles from "@material-ui/core/styles/withStyles";
import PeriodoServices from '../../services/PeriodoService';
import { MenuItem } from '@material-ui/core';
import CadastroLivroService from '../../services/CadastroLivroService'

class MiniDrawer extends React.Component {

  constructor(props) {
    super(props)
    this.classes = props.classes

    this.state = {
      titulo: '',
      subtitulo: '',
      autor: '',
      editora: '',
      paginas: '',
      vagas: '',
      imagem: '',
      professor: '',
      idioma: 1, //portugues: 1 -> inglês: 2
      periodo: '',
      descricao: '',
      periodos: []
    }

    this.periodoService = new PeriodoServices()
    this.cadastroLivroService = new CadastroLivroService()
  }

  listarPeriodos() {
    this.periodoService.listAll().then(result => {
      console.log(result)
      this.setState({
        periodos: result
      })
    })
  }

  componentDidMount() {
    this.listarPeriodos()
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  salvarLivro(e) {
    let livro = {
      titulo: this.state.titulo,
      subtitulo: this.state.subtitulo,
      autor: this.state.autor,
      editora: this.state.editora,
      paginas: this.state.pagina,
      vagas: this.state.vagas,
      professor: this.state.professor,
      idioma: this.state.idioma, //portugues: 1 -> inglês: 2
      periodo: this.state.periodo,
      descricao: this.state.descricao,
    }
    let promise = this.cadastroLivroService.salvar(livro)
      promise.then(() => {
        alert('Livro cadastrado com sucesso!')
      })
      promise.catch((e) => {
        alert('Erro ao salvar o livro ' + e.message)
      })
    }


  render() {
    return (
      <div>
        <form>
          <React.Fragment>
            <Container fixed>
              <Card className={this.classes.card}>

                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <Typography className={this.classes.title} color="primary">
                      Cadastro do Livro
                    </Typography>
                    <Typography className={this.classes.subtitle} color="textSecondary" >
                      Preencha os campos solicitados para realizar o cadastro do livro.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={1}>
                  </Grid>
                  <Grid item xs={12} sm={4}>

                    <TextField
                      id="outlined-NomeLivro"
                      label="Nome do livro"
                      className={this.classes.textField}
                      variant="outlined"
                      name='titulo'
                      onChange={(e) => this.handleInput(e)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <TextField
                      id="outlined-Subtitulo"
                      label="Sub-Titulo"
                      className={this.classes.textField}
                      variant="outlined"
                      name='subtitulo'
                      onChange={(e) => this.handleInput(e)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={1} container justify="center" alignItems="center">
                    <input accept="image/*" className={this.classes.input} id="icon-button-file" type="file" />
                    <label htmlFor="icon-button-file">
                      <IconButton
                        color="primary"
                        className={this.classes.button}
                        aria-label="upload picture"
                        component="span"
                      >
                        <PhotoCamera />
                      </IconButton>
                    </label>
                  </Grid>
                  <Grid item xs={12} sm={1}>
                  </Grid>
                  <Grid item xs={12} sm={1}>
                  </Grid>

                  <Grid item xs={12} sm={3}>
                    <TextField
                      id="outlined-Autor"
                      label="Autor"
                      className={this.classes.textField}
                      variant="outlined"
                      name='autor'
                      onChange={(e) => this.handleInput(e)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      id="outlined-Editora"
                      label="Editora"
                      className={this.classes.textField}
                      variant="outlined"
                      name='editora'
                      onChange={(e) => this.handleInput(e)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <TextField
                      id="outlined-Paginas"
                      label="Páginas"
                      className={this.classes.textField}
                      variant="outlined"
                      name='paginas'
                      onChange={(e) => this.handleInput(e)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <TextField
                      id="outlined-Vagas"
                      label="Vagas"
                      className={this.classes.textField}
                      variant="outlined"
                      name='vagas'
                      onChange={(e) => this.handleInput(e)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={1}>
                  </Grid>
                  <Grid item xs={12} sm={1}>
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <TextField
                      id="outlined-Professor"
                      label="Professor Responsável"
                      className={this.classes.textField}
                      variant="outlined"
                      name='professor'
                      onChange={(e) => this.handleInput(e)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <TextField
                      label="Selecione o período"
                      select
                      value={this.state.periodoSelecionado}
                      name="periodo"
                      onChange={(e) => this.handleInput(e)}>
                      {this.state.periodos.map(per => (
                        <MenuItem value={per._id} key={per._id}>
                          {per.ano + '/' + per.semestre + '/' + per.etapa}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid item xs={12} sm={3} container justify="center" alignItems="center">
                    <FormControlLabel
                      control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} value="checked" />}
                      label="Livro em língua estrangeira"
                      name='idioma'
                      onChange={this.value = 'checked' ? this.setState({ idioma: 2 }) : this.setState({ idioma: 1 })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={1}>
                  </Grid>
                  <Grid item xs={12} sm={1}>
                  </Grid>
                  <Grid item xs={12} sm={10}>
                    <TextField
                      id="outlined-Descricao"
                      label="Descrição"
                      className={clsx(this.classes.textField, this.classes.dense)}
                      variant="outlined"
                      multiline
                      rowsMax="6"
                      name='descricao'
                      onChange={(e) => this.handleInput(e)}

                    />
                  </Grid>
                  <Grid item xs={12} sm={1}>
                  </Grid>
                  <Grid item xs={12} sm={7}>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <Button href='/relatorio' className={this.classes.buttonSecundario}>Cancelar</Button>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <Button className={this.classes.buttonPrincipal} onClick={(e) => this.salvarLivro(e)}>Salvar</Button>
                  </Grid>
                </Grid>
              </Card>
            </Container>
          </React.Fragment>
        </form>
      </div>
    );
  }
}
export default withStyles(Style)(MiniDrawer)
