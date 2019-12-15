import { Room, Client } from "colyseus";

export class BoardGameRoom extends Room {

  onCreate (options: any) {
    console.log("Game room created")
  }

  onJoin (client: Client, options: any) {
    console.log("client : " + client)
  }

  onMessage (client: Client, message: any) {
    console.log(message)
  }

  onLeave (client: Client, consented: boolean) {
    console.log("Client quit "+ client)
  }

  onDispose() {
  }

}
