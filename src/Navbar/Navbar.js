import React, {Component} from 'react';
import './Navbar.css';
import {modelInstance} from '../data/portfolioModel';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  render() {
      
      var aboutme = "My name is Linnéa Granlund and right now, I'm studying my fifth year at the Media Technology program at KTH.";
      
      return (
          <div class="row">
              <div class="col-sm-3" id="navbar">
                  <div class="row">
                      <div class="col-sm-12" id="navItem">
                          <Link to="/">
                              <li>Home</li>
                          </Link>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-sm-2"></div>
                      <div class="col-sm-8" id="aboutme">
                          {aboutme}
                      </div>
                      <div class="col-sm-2"></div>
                  </div>
              </div>
          </div>
      );
  }
}

export default Navbar;

