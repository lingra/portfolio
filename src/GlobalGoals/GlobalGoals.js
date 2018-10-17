import React, {Component} from 'react';
import './GlobalGoals.css';
import {modelInstance} from '../data/portfolioModel';
import { Link } from 'react-router-dom';
import ImgLogo from "../images/globalgoals.png";
import Navbar from '../Navbar/Navbar';

class GlobalGoals extends Component {

  render() {
      var TitleProject = "Global Goals - Behind the scenes";
      
      var Members = ["Daniel Isheden", "Emmeli Hansson", "Leif Tysell Sundkvist", "Linnéa Granlund", "Pournami Krishnakumari", "Sarah Berenji Ardestani", "Shian Yuan", "Tobias Hindersson"];
      
      var MemberDiv = Members.map((member) => <li>{member}</li>);
      
      var Description = "This is the project that we made in the course 'Information Technology. This is a visualization in how the different Global Goals affect each other. We got the data from Stockholm Environmental Institute.";
                                  
      var Weblink = "https://galnegus.github.io/ziba/about";
                                  
      var contribution = "In this project, my contribution was in the design/brainstorming area. I also did some html-coding for the website.";
      
      
      return (
        <div>
            <div class="row">
                <div class="col-sm-4">
                    <Navbar />
                </div>
                <div class="col-sm-8" id="imgPers">
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
                          <a href={Weblink} target="_blank">
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

export default GlobalGoals;

