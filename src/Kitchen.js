import React from 'react';
import { Container, Segment, Divider, Input } from 'semantic-ui-react';
import ButtonExampleEmphasis from './ButtonExampleEmphasis';
import ContainerExampleText from './ContainerExampleText';
import ListExampleImage from './ListExampleImage';
import StepExampleOrdered from './StepExampleOrdered';

const Kitchen = (props) => {
    return (
        <div>
          <Container>
            <ContainerExampleText/>
            <ButtonExampleEmphasis/>
            <Divider hidden />
            <Container textAlign="center">
              <Input action={{
                  color: 'teal',
                  labelPosition: 'left',
                  icon: 'cart',
                  content: 'Checkout'
              }} actionPosition='left' placeholder='Search...' defaultValue='52.03'/>
            </Container>

          <Segment padded>
            <Container textAlign='left'>
              <ListExampleImage />
            </Container>
          </Segment >
          <Segment textAlign="center" padded="very">
            <StepExampleOrdered />
          </Segment>
        </Container>
        </div>

    )
}

export default Kitchen;
