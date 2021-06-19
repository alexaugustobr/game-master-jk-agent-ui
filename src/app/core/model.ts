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

export class UserPasswordUpdate {
  password: string;
}