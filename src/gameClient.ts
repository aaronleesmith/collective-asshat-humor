import { Client,  Room } from "colyseus.js";

let client: Client | undefined;

export const getOrCreateClient = (serverWebsocketUrl: string): Client => {
  if (!client) {
    client = new Client(serverWebsocketUrl);
  }

  return client;
}

export const createRoom = async (client: Client): Promise<Room> => {
  const room = await client.create('room');

  return room;
}

export const joinRoomById = async(client: Client, roomId: string): Promise<Room> => {
  return await client.joinById(roomId);
}

export default getOrCreateClient;