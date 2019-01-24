import React, { Component } from "react";
import CardMovie from "../../component/card-movie/card-movie";
import Axios from "axios";
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

export default class Movies extends Component {
    state={
        movies : []
    }
  getData = () => {
    Axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=651925d45022d1ae658063b443c99784&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    )
      .then(res => {
        console.log(res.data.results)
        this.setState({
            movies : res.data.results
        })
        console.log(this.state.movies,'>>>>')
        
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount(){
      this.getData()
     
  }
  render() {
    return (
      <div>
        {this.state.movies.map((value, index)=>{
            return <Grid container spacing={24}><Grid  item xs={6}><CardMovie data={value}/></Grid></Grid>
        })}
        
      </div>
    );
  }
}
