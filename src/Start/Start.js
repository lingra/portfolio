import React, {Component} from 'react';
import './Start.css';
import {modelInstance} from '../data/portfolioModel';
import { Link } from 'react-router-dom';
import PuzzleImg from "../images/escapetower.png";
import GlobalImg from "../images/globalgoals.png";
import MyFaveImg from "../images/camera.png";


class Start extends Component {

  render() {
      
      return (
          <div>
            <div class="row" id="gallery">
                <div class="col-sm-1"></div>
                <div class="col-sm-3" id="miniproject">
                    <Link to="/puzzleTower">
                        <img src={PuzzleImg} id="indeximg" />
                    </Link>
                </div>
                <div class="col-sm-3" id="miniproject">
                    <Link to="/GlobalGoals">
                        <img src={GlobalImg} id="indeximg" />
                    </Link>
                </div>
                <div class="col-sm-3" id="miniproject">
                    <Link to="myFaveDb.html">
                        <img src={MyFaveImg} id="indeximg" />
                    </Link>
                    <p>Ongoing project</p>
                </div>
                <div class="col-sm-1"></div>
            </div>
            
            <div class="aboutMe">
             About me
            </div>
          </div>
      );
  }
}

export default Start;

