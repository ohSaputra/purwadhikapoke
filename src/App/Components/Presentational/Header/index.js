import React, { Component } from 'react'
import { Container, Header as Head } from 'semantic-ui-react'

import './header.css'

class Header extends Component {
  render() {
    const { title } = this.props

    return (
      <header>
        <Container>
          <Head as='h1'> { title || 'POKEDEX' } </Head>
        </Container>
      </header>
    )
  }
}

export default Header