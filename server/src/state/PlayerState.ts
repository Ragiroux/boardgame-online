import { Schema, type, ArraySchema } from "@colyseus/schema";

export class Player extends Schema {

    @type('string')
    sessionId: String = "";

}