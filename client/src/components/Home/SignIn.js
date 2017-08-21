import React,{ Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Field, reduxForm} from 'redux-form';

import * as UserActions from '../../actions/UserActions';
//import '../scss/App.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login:"",
      password:"",
      open:false
    }
  }

  renderField = (field) =>{
    const {meta: {touched , error}} = field; //z mety wyciagam jeszcze to
    const className = `input-group row ${touched && error ? 'has-error' :''}`
    return(
      <div className = {className}>
        <label htmlFor = {field.name}>{field.label}</label>
        <input
          className = "form-control"
          type = "text"
          id = {field.name}
          {...field.input}
        />
        <div>
          <p className = "text-danger">{touched ? error:' '}</p>
        </div>
      </div>
    )
  }

  onSubmit = (e) =>{
    
    console.log("poszlo");
  }

  openForm = () =>{
    this.setState({open:true})
  }

  render() {
    const {handleSubmit} = this.props;
    let form = null;
    if (this.state.open) {
      form =
      <form onSubmit = {handleSubmit(this.onSubmit)}>
        <Field
          label="Login"
          name="login"
          component={this.renderField}
        />
        <Field
          label="Password"
          name="password"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    }
    return (
      <div className="col-xs-12 col-sm-6 text-center">
        <h2>Sign in if you already hava an account!</h2>
        <button onClick={this.openForm} type="button" className="">Sign In</button>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {form}
        </ReactCSSTransitionGroup>

      </div>

    );
  }
}

function validate(values){
  const errors = {};
  if(!values.login){
    errors.login = "Enter a login";
  }
  if(!values.password){
    errors.password = "Entera password";
  }
  console.log(errors)
  //if erros is empty everything is ok
  return errors;
}

function mapDispatchToProps(dispatch) {
  return { userActions: bindActionCreators(UserActions, dispatch) }
}

export default reduxForm({
  validate,
  form:'SignUserIn'
})(
  connect(null,{mapDispatchToProps})(SignIn)
);
