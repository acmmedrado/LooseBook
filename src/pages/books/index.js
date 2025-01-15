import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Container, CssBaseline} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Style from './StyleBook';
import withStyles from "@material-ui/core/styles/withStyles";
const axios = require('axios');

class ImgMediaCard extends React.Component {

  constructor(props) {
    super(props)
    this.classes = props.classes
    this.state = {
      books : []
    }
  }

  componentDidMount(){
        axios.get('http://127.0.0.1:5000/books')
        .then(function (response) {
          this.setState({books : response})
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  render() {
    return (
        <React.Fragment>
          <CssBaseline/>
          <Container maxWidth="md">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                {this.state.books.map((book) => (
                <Card className={this.classes.card}>
                  <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="http://statics.livrariacultura.net.br/products/capas_lg/728/3128728.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent className={this.classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {book.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {book.author}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {book.vagas}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" href='/book-information'>
                      Mais Informações
                    </Button>
                  </CardActions>
                </Card>
                ))}
              </Grid>
            </Grid>
          </Container>
        </React.Fragment>
    );
  }
}
export default withStyles(Style)(ImgMediaCard)
