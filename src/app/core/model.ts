export class User {
  slot: number;
  username: string;
  type: string;
  password: string;
  permissions: number;
  enabled: boolean;
  authdata?: string;
}

export class UserPasswordUpdate {
  password: string;
}