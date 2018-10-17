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
      
      var Description = "This is an annual film project that is shown at each reception at Media Technology. The main story is that the world is threatened by the villans Black and White (Swart och Wit) and the only ones that can save it is the superheroes Red, Green and Blue (Röd, Grön och Blå). 2015 they had magic wands and 2016 they had laser swords. I've been part of it 2 years, 2015 and 2016.";
                                  
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
                          <br />
                          <p>Here's the videos from 2015:</p>
                          <p class="weblink" id="rgbswLink">
                              <a href={Weblink} target="_blank">
                                  {Weblink}
                              </a>
                          </p>
                      </div>
                  </div>
                  <div className="col-sm-4">
                  </div>
                </div>
              </div>
          </div>
      );
  }
}

export default rgbsw;