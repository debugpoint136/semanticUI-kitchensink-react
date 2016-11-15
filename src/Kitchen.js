import React from 'react';
import { Container, Segment, Divider, Input } from 'semantic-ui-react';
import ButtonExampleEmphasis from './ButtonExampleEmphasis';
import ContainerExampleText from './ContainerExampleText';
import ListExampleImage from './ListExampleImage';
import RailExampleRail from './RailExampleRail';
import StepExampleOrdered from './StepExampleOrdered';

const Kitchen = (props) => {
    return (
        <div>
            <ContainerExampleText/>
            <ButtonExampleEmphasis/>
            <Divider hidden />
            <Input action={{
                color: 'teal',
                labelPosition: 'left',
                icon: 'cart',
                content: 'Checkout'
            }} actionPosition='left' placeholder='Search...' defaultValue='52.03'/>
          <Segment padded>
            <Container textAlign='left'>
              <ListExampleImage />
              <RailExampleRail />
            </Container>
          </Segment>
          <Segment>
            <StepExampleOrdered />
          </Segment>

        </div>

    )
}

export default Kitchen;
