import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../scss/Navigation.scss';

export class Navigation extends Component{
  constructor(props) {
    super(props);
    this.state = {
    }

  }
  render(){
    return(
      <div className="hidden-panel">
        <span className="hidden-panel-close" data-js="hidden-panel-close">Close</span>
        <div className="hidden-panel-content">
          <nav className="hidden-panel-nav">
            <ul>
              <li><Link to={'/notes'} onClick={() => this.props.toggleNav()}>Notes</Link></li>
              <li><Link to={'/links'} onClick={() => this.props.toggleNav()}>Links</Link></li>
            </ul>
          </nav>
        </div>
      </div>


    )
  }
}
