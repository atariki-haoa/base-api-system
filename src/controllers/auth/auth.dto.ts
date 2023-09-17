import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsNumber,
  Min,
} from 'class-validator';
import { IAuth, IAuthLogin } from './auth.interface';

export class AuthDTO implements IAuth {
    @IsNotEmpty()
    @IsNumber()
    @Min(1)
      id: number = 0;

    @IsNotEmpty()
    @IsString()
      name: string = '';

    @IsNotEmpty()
    @IsString()
      phone: string = '';

    @IsNotEmpty()
    @IsString()
      rut: string = '';

    @IsNotEmpty()
    @IsEmail()
      email: string = '';

    @IsNotEmpty()
    @IsString()
      password: string = '';

    @IsNotEmpty()
    @IsString()
      gender: string = '';

    @IsNotEmpty()
    @IsNumber()
    @Min(1)
      roleId: number = 0;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
      producerId: number = 0;
}

export class RegisterDTO implements IAuth {
  @IsNotEmpty()
  @IsString()
    name: string = '';

  @IsNotEmpty()
  @IsString()
    phone: string = '';

  @IsNotEmpty()
  @IsString()
    rut: string = '';

  @IsNotEmpty()
  @IsEmail()
    email: string = '';

  @IsNotEmpty()
  @IsString()
    password: string = '';

  @IsNotEmpty()
  @IsString()
    gender: string = '';

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
    roleId: number = 0;
}

export class AuthLoginDTO implements IAuthLogin {
    @IsNotEmpty()
    @IsEmail()
      email: string = '';

    @IsNotEmpty()
    @IsString()
      password: string = '';
}
