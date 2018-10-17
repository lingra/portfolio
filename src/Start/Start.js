import React, {Component} from 'react';
import './Start.css';
import {modelInstance} from '../data/portfolioModel';
import { Link } from 'react-router-dom';
import PuzzleImg from "../images/escapetower.png";
import GlobalImg from "../images/globalgoals.png";
import MyFaveImg from "../images/myFaveDb.PNG";
import Platniklas from "../images/camera.png";
import rgbsw from "../images/rgbsw1.PNG";
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
                            <div class="titleStart">Puzzle Tower</div>
                        </div>
                        <div class="col-sm-4" id="miniproject">
                            <Link to="/GlobalGoals">
                                <img src={GlobalImg} id="indeximg" />
                            </Link>
                            <div class="overlay">Global Goals - BTS</div>
                            <div class="titleStart">Global Goals</div>
                        </div>
                        <div class="col-sm-4" id="miniproject">
                            <Link to="myFaveDb">
                                <img src={MyFaveImg} id="indeximg" />
                            </Link>
                            <div class="overlay">M(yFave)Db</div>
                            <div class="titleStart">M(yFave)Db</div>
                        </div>
                    </div>                    
                    <div class="row">
                        <div class="col-sm-4" id="miniproject">
                            <Link to="/Platniklas">
                                <img src={Platniklas} id="indeximg" />
                            </Link>
                            <div class="overlay">Plåtniklas</div>
                            <div class="titleStart">Plåtniklas</div>
                        </div>
                        <div class="col-sm-4" id="miniproject">
                            <Link to="rgbsw">
                                <img src={rgbsw} id="indeximg" />
                            </Link>
                            <div class="overlay">RGBSW</div>
                            <div class="titleStart">RGBSW</div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      );
  }
}

export default Start;
