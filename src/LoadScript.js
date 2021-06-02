import React from 'react';
import Script from 'react-load-script';

class LoadScript extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scriptStatus: 'no'
        }
    }
    handleScriptCreate() {
      this.setState({ scriptLoaded: false })
    }
     
    handleScriptError() {
      this.setState({ scriptError: true })
    }
     
    handleScriptLoad() {
      this.setState({ scriptLoaded: true, scriptStatus: 'yes' })
    }
    render() {
        return (
            <Script
              url="Func.js"
              onCreate={this.handleScriptCreate.bind(this)}
              onError={this.handleScriptError.bind(this)}
              onLoad={this.handleScriptLoad.bind(this)}
            />
        );
    }
}
export default LoadScript;