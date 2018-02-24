import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers, saveUser, deleteUser } from './actions/UserActions';
import { Field, reduxForm, reset } from 'redux-form';
import _ from 'lodash';
import './Styles/App.css'



class App extends Component {
  componentWillMount() {
    this.props.getUsers();
  }

  renderUsers() {
    return _.map(this.props.users, (user, key) => {
      return (
        <div className="" key={key}>
         
          <h3 className="">
            {user.firstName}
          </h3>
          <p className="">
            {user.lastName}
          </p>
          <h3 className="">
            {user.addressLine1}
          </h3>
          <h3 className="">
            {user.addressLine2}
          </h3>


            <button className="btn btn-danger float-right" onClick={() => this.props.deleteUser(key)}>Delete</button>
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
          {this.renderUsers()}
        </div>
        <div className="navbar fixed-bottom">
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="footerForm">
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
            <button type="submit" className="btn footer-button">Create</button>
          </form>
        </div>
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