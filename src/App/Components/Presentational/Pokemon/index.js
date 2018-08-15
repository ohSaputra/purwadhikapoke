import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'

import './pokemon.css'

class Pokemon extends Component {

  render() {
    return (
      <Grid.Column>
        <div className='pokemon__item'>
          <Image 
            src={ this.props.image || 'http://via.placeholder.com/350x150' } 
            size='small' />
          
          <div>
            <div> { this.props.name || '' } </div>
          </div>
        </div>
      </Grid.Column>
    )
  }
}

export default Pokemon