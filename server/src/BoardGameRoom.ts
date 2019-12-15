import { Room, Client } from "colyseus";

export class BoardGameRoom extends Room {

  constructor() {
      super()


  }

  onCreate (options: any) {
    console.log("Game room created")
  }

  onJoin (client: Client, options: any) {
    console.log("client : " + client.id)
    this.clients.push(client);
  }

  onMessage (client: Client, message: any) {
    console.log(message)
    
    this.broadcast(message, {except: client})
  }

  onLeave (client: Client, consented: boolean) {
    console.log("Client quit "+ client)
  }

  onDispose() {
  }

}
