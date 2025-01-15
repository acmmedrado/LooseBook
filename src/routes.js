import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Cadastro from './pages/cadastroLivro';
import CadastroUsuario from './pages/cadastroUsuario';
import Relatorio from './pages/relatorio/relatorio';
import Login from './pages/login';
import Books from './pages/books';
import BookInformation from './components/book-information'
import PrivateRoute from "./privateRoutes";
import { ThemeProvider } from '@material-ui/styles';
import {createMuiTheme} from "@material-ui/core";

const themeDark = createMuiTheme({
    palette: {
        primary: { main: '#C898FF' },
        secondary: { main: '#C898FF' },
    },
});

export default function routes() {

    const classes = themeDark

    return (
        <BrowserRouter>
            <Switch>
                <ThemeProvider theme={themeDark}>
                    <Route exact path="/" component={Login}/>
                    <PrivateRoute exact path="/Cadastro" component={Cadastro}/>
                    <PrivateRoute exact path="/CadastroUsuario" component={CadastroUsuario}/>
                    <PrivateRoute exact path="/books" component={Books}/>
                    <PrivateRoute exact path="/book-information" component={BookInformation}/>
                    <PrivateRoute exact path="/relatorio" component={Relatorio}/>
                    <PrivateRoute exact path="/login" component={Login}/>
                </ThemeProvider>
            </Switch>
        </BrowserRouter>
    )
}
