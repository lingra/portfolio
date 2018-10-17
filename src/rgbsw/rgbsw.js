import React, {Component} from 'react';
import './rgbsw.css';
import {modelInstance} from '../data/portfolioModel';
import { Link } from 'react-router-dom';
import ImgLogo from "../images/rgbsw1.PNG";
import Navbar from '../Navbar/Navbar';


class rgbsw extends Component {

  render() {
      var TitleProject = "RGBSW";
      
      var MemberDiv = "";
      
      var Description = "This is a film project that is shown each reception at Media Technology. I've been part of it 2 years, 2015 and 2016.";
                                  
      var Weblink = "https://www.youtube.com/channel/UCbtkucygEdgySTaAkC9P4oQ";
                                  
    var contribution = "I've been doing a little of everything. Both filming and doing post production in Adobe Premiere and After Effects."
      
      
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
                      <div class="col-sm-12" id="imageDiv">
                          <img id="imgBigBig" src={ImgLogo} />
                      </div>
                      <div class="col-sm-2"></div>
              </div>
              
              <div class="row" id="descCon">
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

export default rgbsw;