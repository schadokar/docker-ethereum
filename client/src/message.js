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

    onChange(event) {
        this.setState({message: event.target.value });
    };

    onsubmitgetmsg = () => {
        axios.get(endpoint + "/").then(res => {
            this.setState({
                output: res.data
            });
        });
    };

    onsubmitsetmsg = () => {
        axios.post(endpoint + "/", {
            message: this.state.message 
        }).then(res => {
            this.setState({
                output : res.data
            });
        })
    };

    onsubmitcompile = () => {
        axios.post(endpoint + "/compile").then(res => {
            this.setState({
                output : res.data
            });
        })
    };

    onsubmitdeploy = () => {
        axios.post(endpoint + "/deploy").then(res => {
            this.setState({
                output : res.data
            });
        })
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