import { IsMobilePhone, IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
  @IsMobilePhone()
  @IsNotEmpty()
  phonenumber: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
