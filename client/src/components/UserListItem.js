import React, {Component} from 'react';

export class MovieListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <li className="">
        <p>Name: {this.props.user.login}</p>
      </li>
    )
  }
}
