import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import StylesLogin from './StyleLogin';
import withStyles from "@material-ui/core/styles/withStyles";

class MiniDrawer extends React.Component {

  constructor(props) {
    super(props)
    this.classes = props.classes
  }

  render() {
    return (
        <div>
          <ThemeProvider theme={this.classes.themeDark}>
            <React.Fragment>
              <Container fixed>
                <Card className={this.classes.card}>
                  <Typography className={this.classes.title} color="secondary">
                    Login
                  </Typography>
                  <Grid>
                    <Grid item xs={4} sm={4}>
                      <TextField
                          id="outlined-nomeResponsavel"
                          label="E-mail"
                          className={this.classes.textField}
                          variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={4} sm={4}>
                      <TextField
                          id="outlined-NomeEmpresa"
                          label="Senha"
                          type="password"
                          className={this.classes.textField}
                          variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Button className={this.classes.buttonPrincipal} variant="outlined" href={"/books"}>Entrar</Button>
                  <Button className={this.classes.Button}  href={"/CadastroUsuario"}>Cadastrar-se</Button>
                </Card>
              </Container>
            </React.Fragment>
          </ThemeProvider>
        </div>
    );
  }
}

export default withStyles(StylesLogin)(MiniDrawer)
