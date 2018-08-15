import React, { Component } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import axios from 'axios'

import './main.css'

import Header from '../../Presentational/Header'
import Pokemon from '../../Presentational/Pokemon'

class Main extends Component {
  
  state = {
    data: {}
  }

  componentDidMount() {
    axios.get('/api/main.json')
      .then(response => {
        this.setState({ data: response.data })
      })
      .catch(error => {
        console.error(error)
      })
  }

  render() {
    return (
      <div>
        <Header
          title = 'POKE PURWADHIKA' />
        
        <div>
          <Container>
            <Grid columns={5}>
              <Grid.Row> 
                { this.renderPokemon() }
              </Grid.Row>
            </Grid>
          </Container>
        </div>
      </div>
    )
  }

  renderPokemon = () => {
    const { data } = this.state

    if (data.results) {
      return data.results.map((result, position) => {
        return (
          <Pokemon 
            key={ position }
            name={ result.name } />
        )
      })
    }
  }

}

export default Main