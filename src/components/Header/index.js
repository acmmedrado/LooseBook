import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Logo from "../../imagens/logo.svg";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import './styles.css';


const themeDark = createMuiTheme({
  palette: {
    primary: { main: '#FFFFFF' },
    secondary: { main: '#C898FF' },
  },
});

const useStyles = makeStyles(theme => ({
  div: {
    flexGrow: 1,
  },
  img: {
    width: "10%",
  },
  button: {
    background: 'linear-gradient(45deg, #C898FF 30%, #72A1FF 90%)',
    marginLeft: "20px",
    borderRadius: 50,
    color: 'white',
    height: 35,
    padding: '0 30px',
    border: 0,
    transition: '0.5s',
    "&:hover": {
      background: "transparent",
      color: '#C898FF',
      border: '1px solid'
    },
  },
  buttonSecundary: {
    borderRadius: 50,
    color: '#C898FF',
    height: 35,
    padding: '0 30px',
  },
  AppBar: {
    background: "transparent",
  }
}));

export default function MiniDrawer() {
  const classes = useStyles();

  return (
    <div>
      <ThemeProvider theme={themeDark}>
        <AppBar
          color="primary" className={classes.AppBar} >
          <Toolbar>
            <div className={classes.div}>
              <img className={classes.img} alt='LooseBook' src={Logo} />
            </div> 
            <Button color="secondary" href='/relatorio' className={classes.buttonSecundary}>Gerar relatório</Button>
            <Button href='/books' color="secondary" className={classes.buttonSecundary}>livros</Button>
            <Button color="secondary" variant="outlined" className={classes.button}>Entrar</Button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>

    </div>
  );
}

