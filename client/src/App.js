import React from "react";
import {render, findDOMNode} from 'react-dom';
import { Client } from 'colyseus.js'

class App extends React.Component {


  constructor() {
    super();

    // use current hostname/port as colyseus server endpoint
    var endpoint = window.location.protocol.replace("http", "ws") + "//" + window.location.hostname;

    // development server
    if (window.location.port && window.location.port !== "80") { endpoint += ":2567" }

    this.colyseus = new Client(endpoint)

    this.room = null;

    this.colyseus.joinOrCreate("my_room", {/* options */}).then(room => {
      this.room = room;
      room.onMessage((message) => {
        console.log(message)
      })
      console.log("joined successfully", room);
    }).catch(e => {
      console.error("join error", e);
    });
    
    this.state = {
      currentText: "",
      messages : []
    };
  }

  onUpdateRemote (newState, patches) {
    console.log("new state: ", newState, "patches:", patches)
    this.setState(newState, this.autoScroll.bind(this))
  }

  autoScroll () {
    var domMessages = findDOMNode(this.refs.messages)
    domMessages.scrollTop = domMessages.scrollHeight
  }

  onInputChange (e) {
    e.preventDefault()

    this.setState({ currentText: e.target.value })
  }

  onSubmit (e) {
    e.preventDefault()
    this.room.send(this.state.currentText)
    this.setState({currentText: ""})
  }

  render() {
    return <div>

      <div id="messages" ref="messages">
      { this.state.messages.map((message, i) => {
        return <p key={i}>{ message }</p>
      }) }
      </div>

      <form id="form" onSubmit={this.onSubmit.bind(this)}>
        <input id="input" type="text" onChange={this.onInputChange.bind(this)} value={this.state.currentText} />
        <button type="submit">send</button>
      </form>
    </div>
  }
}
export default App;
