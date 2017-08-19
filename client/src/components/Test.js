import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as UserActions from '../actions/UserActions';
import {UsersList} from './UsersList.js';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: ""
    }


  }

  handleLoginInputChange = (e) => {
    this.setState({login: e.target.value})
  }

  handlePasswordInputChange = (e) => {
    this.setState({password: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let user = {login:this.state.login, password:this.state.password,userId:Math.floor(Math.random()*(100000))};
    this.props.userActions.addUser(user);
  }

  render() {
    return (
      <div className="test">
        <form>
          <input type="text" onChange={this.handleLoginInputChange} value={this.state.login} placeholder="login"/>
          <input type="text" onChange={this.handlePasswordInputChange} value={this.state.password} placeholder="pass"/>
          <button onClick={this.handleSubmit}>send</button>
        </form>
        <UsersList users = {this.props.users} />

      </div>

    )
  }

  componentDidMount() {
    this.props.userActions.getUsers();
    console.log("loguje propsy");
    console.log(this.props);
  }
}

function mapStateToProps(state) {
  return { users: state.users }
}

function mapDispatchToProps(dispatch) {
  return { userActions: bindActionCreators(UserActions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)
