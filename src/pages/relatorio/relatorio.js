import React from 'react';
import { MenuItem, TextField } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Style from './StyleRelatorio';
import withStyles from "@material-ui/core/styles/withStyles";
import axios from 'axios';
import { saveAs } from "file-saver";
import PeriodoService from '../../services/PeriodoService';
import EscolhaService from '../../services/EscolhasService'

class MiniDrawer extends React.Component {

    constructor(props) {
        super(props)
        this.classes = props.classes

        this.state = {
            periodos: [],
            escolhas: [],
            periodoSelecionado: ''
        }

        this.periodoService = new PeriodoService()
        this.escolhaService = new EscolhaService()
    }

    componentDidMount() {
        this.listarPeriodos()
    }

    gerarPDF = () => {
        axios.post('/create-pdf', this.state.escolhas)
            .then(() => axios.get('/fetch-pdf', { responseType: 'blob' }))
            .then((res) => {
                const pdfBlob = new Blob([res.data], { type: 'application/pdf' })
                saveAs(pdfBlob, 'newPDF.pdf');
            })
    }

    listarPeriodos() {
        this.periodoService.listAll().then(result => {
            console.log(result)
            this.setState({
                periodos: result
            })
        })
    }

    listarEscolhas(){
        this.escolhaService.listarEscolhasPorPeriodo(this.state.periodos)
        .then(result => {
            console.log(result)
            this.setState({
                periodos: result
            })
        })
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
                            <Typography className={this.classes.title} color="secondary">
                                Geração de relatório
                            </Typography>
                            <Grid>
                                <Grid className={this.classes.grid} item xs={4} sm={4} >
                                    <TextField name="periodoSelecionado"
                                        label="Selecione o período"
                                        select
                                        value={this.state.periodoSelecionado}
                                        onChange={(e) => this.handleInput(e)}>
                                        {this.state.periodos.map(per => (
                                            <MenuItem value={per._id} key={per._id}>
                                                {per.ano + '/' + per.semestre + '/' + per.etapa}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                            </Grid>
                            <Button className={this.classes.buttonPrincipal} variant="outlined" onClick={this.gerarPDF()}>Gerar</Button>
                        </Card>
                    </Container>
                </React.Fragment>
            </div>
        );
    }
}

export default withStyles(Style)(MiniDrawer)