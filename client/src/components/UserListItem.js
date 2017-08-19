import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as UserActions from '../actions/UserActions';

class UserListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleDelete = (e) => {
    e.preventDefault()
    this.props.userActions.deleteUser(this.props.user._id);
  }

  handleUpdate = (e) => {
    e.preventDefault()
    let user = {login:"updated login", password:"updatedpassword",userId:this.props.user.userId};
    this.props.userActions.updateUser(user);
  }

  render() {
    return (
      <li className="">
        <p>---------------------------------</p>
        <p>Name: {this.props.user.login}</p>
        <button onClick={this.handleDelete}>delete</button>
        <button onClick={this.handleUpdate}>update</button>
      </li>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return { userActions: bindActionCreators(UserActions, dispatch) }
}

export default connect(null, mapDispatchToProps)(UserListItem)
