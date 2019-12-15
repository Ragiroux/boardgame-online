import { Room, Client } from "colyseus";
import { ChatState } from "../state/ChatState";
import { Player } from "../state/PlayerState";

export class ChatRoom extends Room<ChatState> {

  constructor() {
      super()
  }

  onCreate (options: any) {
    console.log("Game room created")
    this.setState(new ChatState());
  }

  onJoin (client: Client, options: any) {
    console.log('client joined', client.sessionId);

    let player: Player = new Player();
    player.sessionId = client.sessionId;
    this.state.players[client.sessionId] = player;
  }

  onMessage (client: Client, message: any) {
    console.log("Message received", message);
    this.state.messages.push(message);
  }

  onLeave (client: Client, consented: boolean) {
    delete this.state.players[client.sessionId];
  }

  onDispose() {
  }
}
