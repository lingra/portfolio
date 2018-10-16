import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { modelInstance } from './data/portfolioModel';
import PuzzleTower from './PuzzleTower/PuzzleTower';
import GlobalGoals from './GlobalGoals/GlobalGoals';
import MyFaveDb from './MyFaveDb/MyFaveDb';
import Platniklas from './Platniklas/Platniklas';
import Start from './Start/Start';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
      return (
          <div className="App">
            {/* We rended diffrent component based on the path */}
          
            {/* All adresses i.e. URL and loading of pages*/}
            <Route exact path="/" component={Start}/>
          
            <Route path="/PuzzleTower" render={() => <PuzzleTower model={modelInstance}/>}/>
            <Route path="/GlobalGoals" render={() => <GlobalGoals model={modelInstance}/>}/>
            <Route path="/MyFaveDb" render={() => <MyFaveDb model={modelInstance}/>}/>
            <Route path="/Platniklas" render={() => <Platniklas model={modelInstance}/>}/>
        </div>
    );
  }
}

export default App;