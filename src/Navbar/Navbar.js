import React, {Component} from 'react';
import './Navbar.css';
import {modelInstance} from '../data/portfolioModel';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  render() {
      
      return (
          <div class="col-sm-12" id="navbar">
              <ul id="navbar">
                  <Link to="/">
                      <li>Home</li>
                  </Link>
                  <Link to="About">
                      <li>About Me</li>
                  </Link>
                  
              </ul>
          </div>
      );
  }
}

export default Navbar;

