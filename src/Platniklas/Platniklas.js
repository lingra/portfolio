import React, {Component} from 'react';
import './Platniklas.css';
import {modelInstance} from '../data/portfolioModel';
import { Link } from 'react-router-dom';
import ImgLogo from "../images/camera.png";
import Navbar from '../Navbar/Navbar';


class Platniklas extends Component {

  render() {
      var TitleProject = "Plåtniklas";
      
      var Members = ["Linnéa Granlund", "Petra Olsson", "Anton Martinsson", "Olivia Bengtsson", "Viktor Ceder"];
      var MemberDiv = Members.map((member) => <li>{member}</li>);
      
      var Description = "This is a game we're right now developing in the 'Advanced graphics and interaction' course at KTH. Our goal with it is to combine VR and AR in a fun way. The game idea is that the VR player's goal is to destroy the city it is in. The character that he's playing is a robot (Plåtniklas) that collects building parts to evolve. The AR-players on the other hand are helicopter pilots and their goal is to stop the robot";
                                  
      var Weblink = "";
                                  
    var contribution = "Until now, I've mainly been in charge for dokumentation. I've also made some programming to the VR-part of the game for example positioning the robot's parts and modeled explosions."
      
      
      return (
      <div>
            <div class="row">
                <div class="col-sm-4">
                    <Navbar />
                </div>
                <div class="col-sm-8" id="textcenter">
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

export default Platniklas;