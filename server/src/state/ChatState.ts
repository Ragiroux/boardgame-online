import { Schema, type, ArraySchema, MapSchema } from "@colyseus/schema";
import { Player } from "./PlayerState";

export class ChatState extends Schema {
    @type(['string'])
    messages: ArraySchema<String> = new ArraySchema<String>();

    @type( { map: Player } )
    players: MapSchema<Player> = new MapSchema<Player>();
}