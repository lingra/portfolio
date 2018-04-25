import React, {Component} from 'react';
import './GlobalGoals.css';
import {modelInstance} from '../data/portfolioModel';
import { Link } from 'react-router-dom';


class GlobalGoals extends Component {

  render() {
      
      return (
          <div>
            <div class="row">
                <div class="col-sm-2"></div>
                <div class="col-sm-4">
                   <img src="images/globalgoals.png" style="padding:20px;" width="300px" />
                </div>
                <div class="col-sm-4">

                    <h3>Collaborators</h3>
                    <li>Daniel Isheden</li>
                    <li>Emmeli Hansson</li>
                    <li>Leif Tysell Sundkvist</li>
                    <li>Linnéa Granlund</li>
                    <li>Pournami Krishnakumari</li>
                    <li>Sarah Berenji Ardestani</li>
                    <li>Shian Yuan</li>
                    <li>Tobias Hindersson</li>

                </div>
                <div class="col-sm-2"></div>
            </div>

            <div class="row">
                <div class="col-sm-12">
                    <div class="weblink">
                        Link to the project:
                        <p>
                            <a href="https://galnegus.github.io/ziba/about">
                                https://galnegus.github.io/ziba/about
                            </a>
                        </p>
                    </div>
                </div>
            </div>
          </div>
      );
  }
}

export default GlobalGoals;

