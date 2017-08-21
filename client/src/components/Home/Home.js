import React from 'react';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';

import '../../scss/Home.scss';

export const Home = (props) => {
    return (
      <div className="row">
        <SignIn />
        <SignUp />
      </div>
)
}
