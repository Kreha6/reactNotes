import React,{ Component } from 'react';
import {Navigation} from './Navigation.js';
import {Header} from './Header.js';
import {Home} from './Home/Home.js';
import {Notes} from './Notes.js';
import {Links} from './Links.js';
//import {AddItem} from './AddItem.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import '../scss/App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen:false
    }
  }
  toggleNav = () =>{
    this.setState({navOpen:!this.state.navOpen})
  }

  render() {
    return (
      <div className={'container-fluid' + (this.state.navOpen ? ' panel-open' : '')}>
        <Header toggleNav = {this.toggleNav} />
        <section className="banner" role="banner">
          <BrowserRouter>
            <div>
              <Navigation toggleNav = {this.toggleNav} />
              <Switch>
                <Route path="/notes" component = {Notes} />
                <Route path="/links" component = {Links} />
                {/* <Route path='/add-item' component={AddItem} /> */}
                <Route exact path="/" component = {Home} />
              </Switch>
            </div>
          </BrowserRouter>
        </section>


      </div>

    );
  }
}

export default App;
