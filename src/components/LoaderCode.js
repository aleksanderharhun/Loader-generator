import React from 'react';

export default class LoaderCode extends React.Component{

    render(props){
        let size = this.props.values.sizeValue + "px";
        let width = this.props.values.widthValue + "px";
        let color = this.props.values.color;
        let speed = Math.round(this.props.values.speedValue/30*100)/100 + "s";
        let cssCode = `
        .loader{
            width: ${size};
            height: ${size};
            margin: 0 auto;
            border: ${width} solid transparent;
            border-top: ${width} solid ${color};
            border-radius: 50%;
            animation: rotate ${speed} infinite linear;
        }
        @keyframes rotate{
            from{transform: rotate(0);}
            to{transform: rotate(360deg);}
        }
        `
        return(
            <div>{this.props.code}
            <div className="code-html">
                <div className="code-hmtl__title">HTML CODE</div>
                <code>
                </code>
            </div>
            <div className="code-css">
                <div className="code-css__title">CSS CODE</div>
                <code>
                    {cssCode}
                </code>  
            </div>
            </div>
        )
    }

}