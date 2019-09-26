import React, { Component } from 'react';
import { voteAngular, voteReact, voteVuejs } from './actions'
import './App.scss';
import image1 from './Images/image1redux.jpg';
import reactLogo from './Images/reactLogo.png';
import angularLogo from './Images/angularLogo.png';
import vueLogo from './Images/vueLogo.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }
  handleVoteAngular = () => {
    this.store.dispatch(voteAngular());
  }
  handleVoteReact = () => {
    this.store.dispatch(voteReact());
  }
  handleVoteVuejs = () => {
    this.store.dispatch(voteVuejs());
  }
  render() {
    return (
      <div>
        <div className="jumbotron" style={{'textAlign': 'center'}}>
          <img src={image1} height="96" alt="CodingTheSmartWay.com"></img>
          <h2>What is your favorite front-end development framework 2017?</h2>
          <h4>Click on the logos below to vote!</h4>
          <br />
          <div className="row">
            <div className="col-xs-offset-3 col-xs-2">
              <img src={angularLogo} height="96" alt="Angular" onClick={this.handleVoteAngular}></img>
            </div>
            <div className="col-xs-2">
              <img src={reactLogo} height="96" alt="React" onClick={this.handleVoteReact}></img>
            </div>
            <div className="col-xs-2">
              <img src={vueLogo} height="96" alt="Vue.js" onClick={this.handleVoteVuejs}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;