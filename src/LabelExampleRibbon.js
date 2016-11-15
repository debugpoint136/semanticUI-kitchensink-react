import React from 'react'
import { Container, Grid, Image, Label, Segment } from 'semantic-ui-react'

const LabelExampleRibbon = () => (
  <Container>
  <Grid columns={2}>
    <Grid.Column>
      <Segment raised>
        <Label as='a' color='red' ribbon>Overview</Label>
        <span>Account Details</span>

        <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />

        <Label as='a' color='blue' ribbon>Community</Label>
        <span>User Reviews</span>

        <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
      </Segment>
    </Grid.Column>

    <Grid.Column>
      <Segment>
        <Label as='a' color='orange' ribbon='right'>Specs</Label>
        <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />

        <Label as='a' color='teal' ribbon='right'>Reviews</Label>
        <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
      </Segment>
    </Grid.Column>
  </Grid>
  </Container>
)

export default LabelExampleRibbon
