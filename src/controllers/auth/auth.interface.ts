export interface IAuth {
  name: string;
  phone: string;
  rut: string;
  email: string;
  password: string;
  gender: string;
  roleId: number;
}

export interface IAuthLogin {
  email: string;
  password: string;
}
