import { Injectable } from '@nestjs/common';
import { users } from './data';
import { User } from 'type';

@Injectable()
export class UserService {
  // get all users
  getAllUsers(): User[] {
    return users;
  }

  // get users by id
  getUserById(userId: number): User | undefined | { message: string } {
    const user = users.find((user) => user.id === userId);
    return user ? user : { message: `User not available with id ${userId}` }
  }
}
