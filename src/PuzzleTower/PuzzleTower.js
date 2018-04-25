import React, {Component} from 'react';
import './PuzzleTower.css';
import {modelInstance} from '../data/portfolioModel';
import { Link } from 'react-router-dom';


class PuzzleTower extends Component {

  render() {
      
      return (
          <div>
                <div class="row">
                    <div class="col-sm-2"></div>
                    <div class="col-sm-4">
                        <img src="images/escapetower.png" style={"padding:20px;"} width="300px" />
                    </div>
                    <div class="col-sm-4">

                        <li>Lukas Saari</li>
                        <li>Linnéa Granlund</li>
                        <li>Nicolas Zimmermann</li>
                        <li>Linette Nilsson</li>
                        <li>Olivia Bengtsson</li>
                        <li>Thibault Laval</li>

                    </div>
                    <div class="col-sm-2"></div>
                </div>


                <div class="row">
                    <div class="col-sm-12">
                        <p class="weblink">
                            <a href="https://people.kth.se/~oliben/puzzletower/">
                                https://people.kth.se/~oliben/puzzletower/
                            </a>
                        </p>
                    </div>
                </div>
          </div>
      );
  }
}

export default PuzzleTower;