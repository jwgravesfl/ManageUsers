import React, { Component } from 'react'
import styled from 'styled-components'
import { Grid } from 'semantic-ui-react'

const MainDiv = styled.div `
            .container {
            padding-top: ;
            text-align: center;
            }
        `; 

export default class UserListHeading extends Component {
    render() {
        return(
            <MainDiv>
                <div className="container">
                <Grid>
                
                <Grid.Column mobile={3} computer={2}>
                    First Name
                </Grid.Column>
                <Grid.Column mobile={3} computer={2}>
                    Last Name
                </Grid.Column>
                <Grid.Column mobile={5} computer={4}>
                    <div>
                Address Line 1 & 2
                    </div>
                </Grid.Column>
                <Grid.Column mobile={3} computer={2}>
                   City, State Zip
                </Grid.Column>
                
                
                </Grid>
            </div>
            </MainDiv>
        )
    }
}