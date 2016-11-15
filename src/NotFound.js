import React from 'react';
import { Divider, Message, Grid} from 'semantic-ui-react'

const NotFound = () => {
    return (
        <div>
            <Divider hidden/>
            <Grid verticalAlign='middle' centered columns={4}>
                <Grid.Row>
                    <Message negative size='massive'>
                        <Message.Header>Page not found!</Message.Header>
                    </Message>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default NotFound;
