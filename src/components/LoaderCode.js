import React from 'react';

export default class LoaderCode extends React.Component{
    copyCode(e,code){
        const el = document.createElement('textarea');
        el.value = code;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }
    render(props){
        let size = this.props.values.sizeValue + "px";
        let width = this.props.values.widthValue + "px";
        let color = this.props.values.color;
        let speed = Math.round(this.props.values.speedValue/30*100)/100 + "s";
        let cssCode = 
        `   .loader{
        width: ${size};
        height: ${size};
        margin: 0 auto;
        border: ${width} solid transparent;
        border-top: ${width} solid ${color};
        border-radius: 50%;
        animation: rotate ${speed} infinite linear;
    }

    @keyframes rotate{
        from{transform: rotate(0)}
        to{transform: rotate(360deg)}
    }
        `
        let htmlCode = `    <div class="loader"></div>`;
        
        return(
            <div className="code">
                <div >
                    <div className="code__title">HTML CODE <span className="code__copy" onClick={(e)=>this.copyCode(e,htmlCode)}>copy html</span></div>
                    <pre id="html-code">
                        {htmlCode}
                    </pre>
                </div>
                <div >
                    <div className="code__title">CSS CODE <span className="code__copy" onClick={(e)=>this.copyCode(e,cssCode)}>copy css</span></div>
                    <pre id="css-code">
                        {cssCode}
                    </pre>  
                </div>
            </div>
        )
    }

}