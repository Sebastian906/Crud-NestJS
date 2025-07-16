import { Injectable } from '@nestjs/common';
import { users } from './data';
import { User } from 'type';

@Injectable()
export class UserService {
  // get all users
  getAllUsers(): User[] {
    return users;
  }
}
