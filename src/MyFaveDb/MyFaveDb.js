import React, {Component} from 'react';
import './MyFaveDb.css';
import {modelInstance} from '../data/portfolioModel';
import { Link } from 'react-router-dom';


class MyFaveDb extends Component {

  render() {
      
      return (
          <div>
        <div class="row">
            <div class="col-sm-2"></div>
            <div class="col-sm-4">
                <img src="images/camera.png" style="padding:20px;" width="300px" />
            </div>
            <div class="col-sm-4">
                Text
            </div>
            <div class="col-sm-2"></div>
        </div>

        <div class="row">
            <div class="col-sm-12">
                <p class="weblink">
                    <a href="https://myfavedb.herokuapp.com/">
                        https://myfavedb.herokuapp.com/
                    </a>
                </p>
            </div>
        </div>
              </div>
      );
  }
}

export default MyFaveDb;

