import React, {Component} from 'react';
import './Start.css';
import {modelInstance} from '../data/portfolioModel';
import { Link } from 'react-router-dom';
import PuzzleImg from "../images/escapetower.png";
import GlobalImg from "../images/globalgoals.png";
import MyFaveImg from "../images/camera.png";
import Navbar from "../Navbar/Navbar";


class Start extends Component {

  render() {
      
      return (
          <div>
            <div class="row" id="gallery">
                <div class="col-sm-4">
                    <Navbar />
                </div>
                <div class="col-sm-8">
                    <div class="row">
                        <div class="col-sm-4" id="miniproject">
                            <Link to="/puzzleTower">
                                <img src={PuzzleImg} id="indeximg" />
                            </Link>
                                <div class="overlay">Puzzle Tower VR</div>
                        </div>
                        <div class="col-sm-4" id="miniproject">
                            <Link to="/GlobalGoals">
                                <img src={GlobalImg} id="indeximg" />
                            </Link>
                                <div class="overlay">Global Goals - BTS</div>
                        </div>
                        <div class="col-sm-4" id="miniproject">
                            <Link to="myFaveDb">
                                <img src={MyFaveImg} id="indeximg" />
                            </Link>
                                <div class="overlay">M(yFave)Db</div>
                            <p>Ongoing project</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      );
  }
}

export default Start;
