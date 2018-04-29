import React, {Component} from 'react';
import './MyFaveDb.css';
import {modelInstance} from '../data/portfolioModel';
import { Link } from 'react-router-dom';
import ImgLogo from "../images/camera.png";
import Navbar from '../Navbar/Navbar';


class MyFaveDb extends Component {

  render() {
      var TitleProject = "M(yFave)Db";
      
      var Members = ["Emma Åkesson", "Linnéa Granlund", "Okra Livia Inkeri Dimbe", "Melanie Bonnaudet"];
      
      var MemberDiv = Members.map((member) => <li>{member}</li>);
      
      var Description = "This is the project that we are doing right now in the course 'Interaction Programming and the Dynamic Web'. What we are doing is a movie webpage that uses an API to retrive information and a database storing user information and the lists the user creates. ";
                                  
      var Weblink = "https://myfavedb.herokuapp.com/";
      
      
      return (
          <div>
              <Navbar />
              <div class="row">
                  <div class="col-sm-2"></div>
                  <div class="col-sm-4">
                      <img id="imgBig" src={ImgLogo} />
                  </div>
                  <div class="col-sm-4">
                      <h3>{TitleProject}</h3>
                      <h4>Members</h4>
                      {MemberDiv}
                      
                  </div>
                  <div class="col-sm-2"></div>
              </div>
              
              <div class="row">
                  <div class="col-sm-2"></div>
                  <div className="col-sm-6" id="descriptionDiv">
                      <h4>Description</h4>
                      <p>{Description}</p>
                  </div>
                  <div class="col-sm-4"></div>
              </div>
              
              <div class="row">
                  <div class="col-sm-12">
                      <p class="weblink">
                          <a href={Weblink}>
                              {Weblink}
                          </a>
                      </p>
                  </div>
              </div>
            
                                      
          </div>
      );
  }
}

export default MyFaveDb;

