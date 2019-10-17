import React from 'react';

export default class ControlPannel extends React.Component{
    render(props){
        return(
            <div className="controlpannel">
                <div className="controlpannel__title">Ajust Your Loader</div>
                <label>
                    Radius:
                    <input 
                        type="range" 
                        value={this.props.values.sizeValue}
                        onChange={(evt) => this.props.onChange(evt,"size")}
                        min="5"
                        max="400"
                    />
                </label>       
                
                <label>
                    Width:
                    <input 
                        type="range" 
                        value={this.props.values.widthValue}
                        onChange={(evt) => this.props.onChange(evt,"width")}
                        min="1"
                    />
                </label>

                <label>
                    Speed:
                    <input 
                        type="range" 
                        value={this.props.values.speedValue}
                        onChange={(evt) => this.props.onChange(evt,"speed")}
                        min="4"
                    />
                </label>

                <label>
                    <span className="controlpannel__span">Color:</span>   
                    <input 
                        type="color" 
                        value={this.props.values.colorValue}
                        onChange={(evt) => this.props.onChange(evt,"color")}
                    />
                </label>
            </div>
        )
    }

}