import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsers, saveUser, deleteUser } from './actions/UserActions'
import { Field, reduxForm, reset } from 'redux-form'
import _ from 'lodash'
import './Styles/App.css'
import styled from 'styled-components'
import { Grid, Button, Icon } from 'semantic-ui-react'
import UserListHeading from './components/UserListHeading'


const UserListDiv = styled.div `
            .container {
              font-family: sans-serif;
              text-align: center;
              font-size: 3vh;
              
              }
          

            .button {
              background-color: #4CAF50;
            }
            
        `;

        const TitleDiv = styled.div `
            .container {
            font-family: sans-serif;
            text-align: center;
            font-size: 2em;
            padding-top: 2vh;
            padding-bottom: 2vh;
            background-color: black;
            color: white;
            margin-bottom: 2vh;
            }
        `;

        const FooterDiv = styled.div `
            .container {
            font-family: sans-serif;
            text-align: center;
            
            }
        `;

class App extends Component {
  componentWillMount() {
    this.props.getUsers();
  }

  renderUsers() {
    return _.map(this.props.users, (user, key) => {
      return (
        <div>
                    
        <UserListDiv>
          <div className="container" key={key} index={key}>
            <Grid>
            
            <Grid.Column mobile={3} computer={2}>
                 {user.firstName}
              </Grid.Column>
              <Grid.Column mobile={3} computer={2}>
                {user.lastName}
              </Grid.Column>
              <Grid.Column mobile={9} computer={4}>
                <div>
                  {user.addressLine1}
                </div>
                <div>
                  {user.addressLine2}
                </div>
              </Grid.Column>
              <Grid.Column mobile={3} computer={2}>
                {user.city}
              </Grid.Column>
              <Grid.Column mobile={3} computer={1}>
                {user.state}
              </Grid.Column>
              <Grid.Column mobile={3} computer={1}>
                {user.zip}
              </Grid.Column>
              <Grid.Column mobile={3} computer={2}>
              <Button size='tiny' inverted color='blue' animated onClick={() => this.props.editUser(key)}>
                <Button.Content hidden>Edit User</Button.Content>
                <Button.Content visible>
                  <Icon name='edit' />
                </Button.Content>
              </Button>
              
                  

              </Grid.Column>
              <Grid.Column mobile={3} computer={2}>
              <Button size='tiny' inverted color='red' animated onClick={() => this.props.deleteUser(key)}>
                <Button.Content hidden>Delete</Button.Content>
                <Button.Content visible>
                  <Icon name='trash' />
                </Button.Content>
              </Button>
              </Grid.Column>
              
            </Grid>
          </div>
        </UserListDiv>
        </div>
      );
    });
  }

  renderField(field) {
    return (
      <input type="text" placeholder={`Enter a ${field.label}...`} {...field.input} className={field.class}/>
    );
  }

  onSubmit(values) {
    this.props.saveUser(values).then(this.props.dispatch(reset('NewUser')));
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="container">
        <div className="main">
             <TitleDiv>
              <div className="container">
              Manage Users
              </div>
            </TitleDiv>
            <UserListHeading />
          {this.renderUsers()}
        </div>
        <FooterDiv>
        <div className="fixed-bottom container">
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="footerForm">
            <div>
            <Field
              name="firstName"
              component={this.renderField}
              label="First Name"
              class="footer-firstName"
              />
            <Field
              name="lastName"
              component={this.renderField}
              label="Last Name"
              class="footer-lastName"
            />
            <Field
              name="addressLine1"
              component={this.renderField}
              label="Address Line 1"
              class="footer-addressLine1"
            />
            <Field
              name="addressLine2"
              component={this.renderField}
              label="Address Line 2"
              class="footer-addressLine2"
            />
            </div>
            <div>
            <Field
              name="city"
              component={this.renderField}
              label="City"
              class="footer-city"
              />
            <Field
              name="state"
              component={this.renderField}
              label="State"
              class="footer-state"
            />
            <Field
              name="zip"
              component={this.renderField}
              label="Zip Code"
              class="footer-zip"
            />
            <button type="submit" className="btn footer-button">Create</button>
            </div>
          </form>
        </div>
        </FooterDiv>
      </div>
    );
  }
}

let form = reduxForm({
  form: 'NewUserPost'
})(App);

form = connect(state => ({
    users: state.users
  }), { saveUser, getUsers, deleteUser }
)(form);

export default form;