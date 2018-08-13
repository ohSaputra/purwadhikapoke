import React, { Component } from 'react'
import { Container, Grid, Image } from 'semantic-ui-react'

import './main.css'

import Header from '../../Presentational/Header'

class Main extends Component {
  render() {
    return (
      <div>
        <Header
          title = 'POKE PURWADHIKA' />
        
        <div>
          <Container>
            <Grid columns={5}>
              <Grid.Row>
                <Grid.Column>
                  <Image src='http://via.placeholder.com/350x150' size='small' />
                  
                  <div>
                    <div>Description</div>
                    <p>Vivamus nec imperdiet felis. Proin ut blandit erat. Quisque maximus mauris vel lacus mollis ornare et eget augue. Sed in rhoncus ex. Nullam elementum blandit pretium. Integer auctor facilisis odio sit amet vulputate.</p>
                  </div>
                </Grid.Column>

                <Grid.Column>
                  <Image src='http://via.placeholder.com/350x150' size='small' />
                  
                  <div>
                    <div>Description</div>
                    <p>Vivamus nec imperdiet felis. Proin ut blandit erat. Quisque maximus mauris vel lacus mollis ornare et eget augue. Sed in rhoncus ex. Nullam elementum blandit pretium. Integer auctor facilisis odio sit amet vulputate.</p>
                  </div>
                </Grid.Column>

                <Grid.Column>
                  <Image src='http://via.placeholder.com/350x150' size='small' />
                  
                  <div>
                    <div>Description</div>
                    <p>Vivamus nec imperdiet felis. Proin ut blandit erat. Quisque maximus mauris vel lacus mollis ornare et eget augue. Sed in rhoncus ex. Nullam elementum blandit pretium. Integer auctor facilisis odio sit amet vulputate.</p>
                  </div>
                </Grid.Column>

                <Grid.Column>
                  <Image src='http://via.placeholder.com/350x150' size='small' />
                  
                  <div>
                    <div>Description</div>
                    <p>Vivamus nec imperdiet felis. Proin ut blandit erat. Quisque maximus mauris vel lacus mollis ornare et eget augue. Sed in rhoncus ex. Nullam elementum blandit pretium. Integer auctor facilisis odio sit amet vulputate.</p>
                  </div>
                </Grid.Column>

                <Grid.Column>
                  <Image src='http://via.placeholder.com/350x150' size='small' />
                  
                  <div>
                    <div>Description</div>
                    <p>Vivamus nec imperdiet felis. Proin ut blandit erat. Quisque maximus mauris vel lacus mollis ornare et eget augue. Sed in rhoncus ex. Nullam elementum blandit pretium. Integer auctor facilisis odio sit amet vulputate.</p>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
      </div>
    )
  }
}

export default Main