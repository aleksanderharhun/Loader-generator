import React from 'react';

export default class Loader extends React.Component{
    updateSize(newSize){
        newSize+="px";
        document.getElementById('root').style.setProperty("--size",newSize);
    }
    updateWidth(width){
        width+="px";
        document.getElementById('root').style.setProperty("--width",width);
    }
    updateSpeed(speed){
        speed /=30;
        speed+="s";
        document.getElementById('root').style.setProperty("--speed",speed);
    }
    updateColor(color){
        document.getElementById('root').style.setProperty("--color",color);
    }

    render(props){
        this.updateColor(this.props.values.color);
        this.updateSize(this.props.values.sizeValue);
        this.updateWidth(this.props.values.widthValue);
        this.updateSpeed(this.props.values.speedValue);
        this.updateColor(this.props.values.color);

        return(
            <div className="loader-wrapper">
                <div className="loader"></div>
            </div>
        )
    }

}