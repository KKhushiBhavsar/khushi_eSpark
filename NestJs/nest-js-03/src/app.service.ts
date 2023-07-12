import { Injectable } from '@nestjs/common';
import { User } from './user/entities/user.entity';

export interface UserInterface {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  findOne(id: number) {
    return `This action returns a #${id} user`;
  }
  getUser(): UserInterface[] {
    return [
      {
        id: 1,
        first_name: 'abc',
        last_name: 'abc',
        email: 'abc@mail.com',
      },
      {
        id: 2,
        first_name: 'xyz',
        last_name: 'xyz',
        email: 'xyz@mail.com',
      },
    ];
  }
}
