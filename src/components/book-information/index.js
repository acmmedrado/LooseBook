import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia'
import AnimatedCard from '@rihor/react-3d-card/dist/AnimatedCard'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Style from './StyleBookInformation'
import withStyles from "@material-ui/core/styles/withStyles";

class SimpleCard extends React.Component {

    constructor(props) {
        super(props)
        this.classes = props.classes
    }

    render() {
        return (
            <div className='card-content'>
                <Card className={this.classes.card}>
                    <Grid container>
                        <Grid item xs={4} className={this.classes.imagemgrid}>
                            <CardContent>
                                <div className={this.classes.borda}>
                                    <AnimatedCard clickable={false}>
                                        <CardMedia className={this.classes.image}
                                                   component="img"
                                                   alt="Livro"
                                                   image="http://statics.livrariacultura.net.br/products/capas_lg/728/3128728.jpg"
                                        />
                                    </AnimatedCard>
                                </div>
                            </CardContent>
                        </Grid>
                        <Grid item xs zeroMinWidth>
                            <CardContent className={this.classes.description}>
                                <Typography variant="h5" gutterBottom>
                                    Harry Potter e a ordem da Fenix
                                </Typography>
                                <Typography variant="h6" color="textSecondary" gutterBottom>
                                    Rowling,J. K., Rowling,J. K.
                                </Typography>
                                <Typography variant="caption" gutterBottom>
                                    Harry não é mais um garoto. Aos 15 anos, continua sofrendo a rejeição dos Dursdley,
                                    sua estranhíssima família no mundo dos 'trouxas', ou seja, todos os que não são bruxos.
                                    Também continua contando com Rony Weasley e Hermione Granger, seus melhores amigos em
                                    Hogwarts, para levar adiante suas investigações e aventuras. Mas o bruxinho começa a
                                    sentir e descobrir coisas novas, como o primeiro amor e a sexualidade. Nos volumes
                                    anteriores, J. K. Rowling mostrou como Harry foi transformado em celebridade no mundo
                                    da magia por ter derrotado, ainda bebê, Voldemort, o todo-poderoso bruxo das trevas
                                    que assassinou seus pais. Neste quinto livro da saga, o protagonista, numa crise
                                    típica da adolescência, tem ataques de mau humor com a perseguição da imprensa, que
                                    o segue por todos os lugares e chega a inventar declarações que nunca deu. Harry
                                    vai enfrentar as investidas de Voldemort sem a proteção de Dumbledore, já que o
                                    diretor de Hogwarts é afastado da escola. E vai ser sem a ajuda de seu protetor
                                    que o jovem herói enfrentará descobertas sobre a personalidade controversa de
                                    seu pai, Tiago Potter, e a morte de alguém muito próximo.
                                </Typography>
                            </CardContent>
                        </Grid>
                        <Grid item className={this.classes.gridButton}>
                            <CardActions>
                                <Button className={this.classes.buttonEscolher} size="small">Escolher</Button>
                            </CardActions>
                        </Grid>
                    </Grid>
                </Card>
            </div>
        );
    }
}

export default withStyles(Style)(SimpleCard)