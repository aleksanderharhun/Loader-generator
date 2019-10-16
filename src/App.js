import React from 'react';
import './App.css';
import $ from 'jquery';

import ControlPannel from './components/ControlPannel';
import Loader from './components/Loader';
import LoaderCode from './components/LoaderCode';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      controlPannel: {
        color: "#000",
        sizeValue: "50",
        widthValue: "4",
        speedValue: "10"
      }
    }
  }

  updateSize(evt,idetifier){
    let newSize = evt.target.value;
    console.log(idetifier,newSize);
    this.setState({
      controlPannel: {
        color: (idetifier==="color") ? newSize : this.state.controlPannel.color,  
        sizeValue: (idetifier==="size") ? newSize : this.state.controlPannel.sizeValue,  
        widthValue: (idetifier==="width") ? newSize : this.state.controlPannel.widthValue,
        speedValue: (idetifier==="speed") ? newSize : this.state.controlPannel.speedValue,
      }
    })
    console.log(this.state.controlPannel.widthValue);
  }

  render(){
    return (
      <div>
        <ControlPannel 
          values={this.state.controlPannel} 
          onChange={(evt,idetifier) => this.updateSize(evt,idetifier)}
        />
        <Loader values={this.state.controlPannel} />
        <LoaderCode values={this.state.controlPannel} />
      </div>
    );
  }
}

export default App;
