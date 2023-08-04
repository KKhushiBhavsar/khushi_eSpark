import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumberString,
  Length,
} from 'class-validator';

enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

export class UserDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  contact: string;

  gender: Gender;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  // @IsDateString()
  birthDate: Date;

  city: string;

  address: string;

  @IsNotEmpty()
  password: string;
}
