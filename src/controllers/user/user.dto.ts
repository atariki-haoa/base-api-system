// user.dto.ts

import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  Min,
} from 'class-validator';

// eslint-disable-next-line import/prefer-default-export
export class UserDTO {
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
    id: number = 0;

  @IsString()
  @IsNotEmpty()
    name: string = '';

  @IsString()
  @IsNotEmpty()
    phone: string = '';

  @IsString()
  @IsNotEmpty()
    rut: string = '';

  @IsEmail()
    email: string = '';

  @IsString()
  @IsNotEmpty()
    password: string = '';

  @IsString()
  @IsNotEmpty()
    gender: string = '';

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
    roleId: number = 0;
}
