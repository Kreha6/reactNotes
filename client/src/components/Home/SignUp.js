import React,{ Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as UserActions from '../../actions/UserActions';
//import '../scss/App.scss';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login:"",
      password:"",
      open:false
    }
  }


  render() {
    return (
      <div className="col-xs-12 col-sm-6">
        <h2>If you don't have it yet, you can create it rigth here!</h2>
        <button type="button" className="">Create Account</button>
      </div>

    );
  }
}

export default SignUp;
