import React, {Component} from 'react';
import './Navbar.css';
import {modelInstance} from '../data/portfolioModel';
import { Link } from 'react-router-dom';
import profileimage from '../images/linnea.jpg';

class Navbar extends Component {

  render() {
      
      var aboutme = "My name is Linnéa Granlund and right now, I'm studying my fifth year at the Media Technology program at KTH.";
      var description = "Here I've listed some of the projects that I've made throuout the years. ";
      
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
                          <p>{aboutme}</p>
                          <p>{description}</p>
                      </div>
                      <div class="col-sm-2"></div>
                  </div>
                  <div class="row">
                      <div class="col-sm-1"></div>
                      <div class="col-sm-9" id="contactMe">
                          <p><a id="navLink" href="mailto:linneagranlund96@gmail.com">linneagranlund96@gmail.com</a></p>
                          <p><a id="navLink" href="https://www.linkedin.com/in/linneagranlund/">linkedin.com/in/linneagranlund</a></p>
                          <p><a id="navLink" href="https://www.facebook.com/linnea.granlund.9/">facebook.com/linnea.granlund.9</a></p>
                          
                      </div>
                      <div class="col-sm-2"></div>
                      
                  </div>
              </div>
          </div>
      );
  }
}

export default Navbar;

