export class User {
  slot: number;
  username: string;
  type: string;
  password: string;
  permissions: number;
  enabled: boolean;
  authdata?: string;

  isRcon() : boolean {
    return this.type == 'RCON'
  }
}

export class GameLogFile {
  dateTime: Date;
  name: string;
}

export class GameMap {
  createdAt: Date;
  name: string;
}

export class GameFile {
  createdAt: Date;
  name: string;
}

export class UserPasswordUpdate {
  password: string;
}

export class GameServer {
  address: string;
  nameWithoutColors: string;
  gameNameAndVersion: string;
  playersCount: number;
  maxSlots: number;
  mapName: number;
}