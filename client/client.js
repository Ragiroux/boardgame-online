import React from "react";
import {render, findDOMNode} from 'react-dom';
import Colyseus from 'colyseus.js'

class Main extends React.Component {

    constructor() {
      super();
  
      // use current hostname/port as colyseus server endpoint
      var endpoint = location.protocol.replace("http", "ws") + "//" + location.hostname;
  
      // development server
      if (location.port && location.port !== "80") { endpoint += ":2657" }
  
      this.colyseus = new Colyseus(endpoint)
      this.chatRoom = this.colyseus.join('chat', { channel: window.location.hash || "#default" })
      this.chatRoom.on('update', this.onUpdateRemote.bind(this))
  
      this.state = {
        currentText: "",
        messages : []
      };
    }
}