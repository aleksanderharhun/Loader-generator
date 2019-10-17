import React from 'react';
import ControlPannel from './components/ControlPannel';
import Loader from './components/Loader';
import LoaderCode from './components/LoaderCode';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      controlPannel: {
        color: "#000000",
        sizeValue: "85",
        widthValue: "5",
        speedValue: "20"
      }
    }
  }

  updateSize(evt,idetifier){
    let newSize = evt.target.value;
    this.setState({
      controlPannel: {
        color: (idetifier==="color") ? newSize : this.state.controlPannel.color,  
        sizeValue: (idetifier==="size") ? newSize : this.state.controlPannel.sizeValue,  
        widthValue: (idetifier==="width") ? newSize : this.state.controlPannel.widthValue,
        speedValue: (idetifier==="speed") ? newSize : this.state.controlPannel.speedValue,
      }
    })
  }

  render(){
    return (
      <div className="app">
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
