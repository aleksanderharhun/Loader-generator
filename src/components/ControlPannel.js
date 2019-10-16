import React from 'react';
import $ from 'jquery';

export default class ControlPannel extends React.Component{
    render(props){
        let value = this.props.values.sizeValue;
        return(
            <div>
                <div>Ajust Your Loader</div>
                <label>
                    Size
                    <input 
                        type="range" 
                        value={this.props.values.sizeValue}
                        onChange={(evt) => this.props.onChange(evt,"size")}
                        min="5"
                        max="400"
                    />
                </label>       
                
                <label>
                    Width
                    <input 
                        type="range" 
                        value={this.props.values.widthValue}
                        onChange={(evt) => this.props.onChange(evt,"width")}
                        min="1"
                    />
                </label>

                <label>
                    Speed
                    <input 
                        type="range" 
                        value={this.props.values.speedValue}
                        onChange={(evt) => this.props.onChange(evt,"speed")}
                        min="4"
                    />
                </label>

                <label>
                    Color
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