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
    return user ? user : { 
      message: `User not available with id ${userId}` 
    }
  }

  // create a new user
  createUser(user: Partial<User>): User {
    const newId = users[users.length - 1].id + 1;
    const newUser: User = {
      id: newId,
      name: user.name ?? '',
      email: user.email ?? '',
      phone: user.phone ?? '',
      imageUrl: user.imageUrl ?? '',
      createdAt: new Date().toISOString(),
    };
    users.push(newUser);
    return newUser;
  }

  // update user
  updateUser(
    userId: number,
    updatedUserFields: Partial<User>
  ): User | undefined | {
    message: string
  } {
    // check if the request body is empty
    if (Object.keys(updatedUserFields).length === 0) {
      return {
        message: 'Please provide fields to update'
      };
    }
  }
}
