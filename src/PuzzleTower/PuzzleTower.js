import React, {Component} from 'react';
import './PuzzleTower.css';
import {modelInstance} from '../data/portfolioModel';
import { Link } from 'react-router-dom';
import ImgLogo from "../images/escapetower.png";
import Navbar from '../Navbar/Navbar';


class PuzzleTower extends Component {

  render() {
      var TitleProject = "Puzzle Tower VR";
      
      var Members = ["Lukas Saari", "Linnéa Granlund", "Nicolas Zimmermann", "Linette Nilsson", "Olivia Bengtsson", "Thibault Laval"];
      var MemberDiv = Members.map((member) => <li>{member}</li>);
      
      var Description = "This is a puzzle VR game that we made in the course 'Computer Game Design' at KTH in my 4th year. The idea behind this is a child-friendly VR game that isn't scary. It's also funny to see someone else play it since you need to interact with the environment to solve the puzzles. /nTo add more VR feeling we made it so that when you have solved a puzzle you fall a short period to the next puzzle.";
                                  
      var Weblink = "https://people.kth.se/~oliben/puzzletower/";
                                  
    var contribution = "In this project, I was mainly responsible for the sound effects in the game. I did also little design work and ideas for the different rooms."
      
      
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

export default PuzzleTower;