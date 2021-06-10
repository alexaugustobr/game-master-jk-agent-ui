export class User {
  slot: number;
  userName: string;
  type: string;
  permissions: number;
  enabled: boolean;
  authdata?: string;
}

export class UserPasswordUpdate {
  password: string;
}