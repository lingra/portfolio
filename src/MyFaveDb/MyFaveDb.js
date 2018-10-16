import React, {Component} from 'react';
import './MyFaveDb.css';
import {modelInstance} from '../data/portfolioModel';
import { Link } from 'react-router-dom';
import ImgLogo from "../images/myFaveDb.PNG";
import Navbar from '../Navbar/Navbar';


class MyFaveDb extends Component {

  render() {
      var TitleProject = "M(yFave)Db";
      
      var Members = ["Emma Åkesson", "Linnéa Granlund", "Okra Livia Inkeri Dimbe", "Melanie Bonnaudet"];
      
      var MemberDiv = Members.map((member) => <li>{member}</li>);
      
      var Description = "This is the project that we made 2017 in the course 'Interaction Programming and the Dynamic Web'. This is a webpage where you can search for different movies in a database and create public lists with your movies.";
                                  
      var Weblink = "https://myfavedb.herokuapp.com/";
    
      var contribution = "In this project, my contribution was the 'front-end' of react. I got html-skeletons and made reactpages of them";
      
      
      return (
      <div>
            <div class="row">
                <div class="col-sm-4">
                    <Navbar />
                </div>
                <div class="col-sm-8">
                    <div class="row">
                        <div class="col-sm-12" id="projTitle">
                            <p>{TitleProject}</p>
                        </div>
                    </div>
                      <div class="col-sm-6">
                          <img id="imgBig" src={ImgLogo} />
                      </div>
                      <div class="col-sm-6">
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
                      <h4>My contribution</h4>
                      <p>{contribution}</p>
                <div>
                    <p class="weblink">
                          <a href={Weblink}>
                              {Weblink}
                          </a>
                      </p>
                    </div>
                  </div>
                  <div class="col-sm-4"></div>
              </div>
            </div>
                                      
          </div>
      );
  }
}

export default MyFaveDb;

