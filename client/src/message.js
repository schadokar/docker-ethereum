import React, { Component } from "react";
import axios from "axios";

let endpoint = "http://localhost:4000";

class Message extends Component {
    
    constructor(props) {
        super(props);
        this.state= {
            message : "",
            output : []
        };
        this.onChange = this.onChange.bind(this);
        this.onsubmitsetmsg = this.onsubmitsetmsg.bind(this);
        this.onsubmitgetmsg = this.onsubmitgetmsg.bind(this);
        this.onsubmitcompile = this.onsubmitcompile.bind(this);
        this.onsubmitdeploy = this.onsubmitdeploy.bind(this);
    }

    // on change of input, set the value to the message state
    onChange(event) {
        this.setState({message: event.target.value });
    };

    // on click on Compile button send the POST request to the localhost:4000/compile
    // to compile the contract 
    onsubmitcompile = () => {
        axios.post(endpoint + "/compile").then(res => {
            this.setState({
                output : res.data
            });
        })
    };

    // on click on Deploy button send the POST request to the localhost:4000/deploy
    // to deploy the contract
    onsubmitdeploy = () => {
        axios.post(endpoint + "/deploy").then(res => {
            this.setState({
                output : res.data
            });
        })
    };

    // on click of Set Message button send the POST request to the localhost:4000/ 
    // with the message to set in the smart contract 
    onsubmitsetmsg = () => {
        axios.post(endpoint + "/", {
            message: this.state.message 
        }).then(res => {
            this.setState({
                output : res.data
            });
        })
    };

    // on click of Get Message button send the GET request to the localhost:4000/
    // to fetch the message from the smart contract 
    onsubmitgetmsg = () => {
        axios.get(endpoint + "/").then(res => {
            this.setState({
                output: res.data
            });
        });
    };

    render() {
        return(
    <div className="container">
      <fieldset>
          <form>
              <div>
                <input
                    type="name"
                    className="ghost-input"
                    placeholder="set message"
                    name="setMessage"
                    value={this.state.setMessage}
                    onChange={this.onChange}
                />
                <button
                  type="button"
                  className="ghost-button"
                  onClick={this.onsubmitsetmsg}
                >
                  Set Message
                </button>
              </div>
              <div>
              <button
                  type="button"
                  className="ghost-button"
                  onClick={this.onsubmitgetmsg}
                >
                  Get Message
                </button>
              </div>
              <div>
              <button
                  type="button"
                  className="ghost-button"
                  onClick={this.onsubmitcompile}
                >
                  Compile Contract
                </button>
              </div>
              <div>
              <button
                  type="button"
                  className="ghost-button"
                  onClick={this.onsubmitdeploy}
                >
                  Deploy Contract
                </button>
              </div>
          </form>
      </fieldset>
      <div>
          {this.state.output}
        </div>  
    </div>
        );
    }
}

export default Message;