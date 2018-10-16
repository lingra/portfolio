import React, {Component} from 'react';
import './Navbar.css';
import {modelInstance} from '../data/portfolioModel';
import { Link } from 'react-router-dom';
import profileimage from '../images/linnea.jpg';

class Navbar extends Component {

  render() {
      
      var aboutme = "My name is Linnéa Granlund and right now, I'm studying my fifth year at the Media Technology program at KTH.";
      
      return (
          <div class="row">
              <div class="col-sm-3" id="navbar">
                  <div class="row">
                      <div class="col-sm-2"></div>
                      <div class="col-sm-8" id="navItem">
                          <Link to="/">
                              <img id="profileimage" src={profileimage} />
                          </Link>
                      </div>
                      <div class="col-sm-2"></div>
                  </div>
                  <div class="row">
                      <div class="col-sm-1"></div>
                      <div class="col-sm-9" id="aboutme">
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

