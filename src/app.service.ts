import { Injectable, Param } from '@nestjs/common';
import { users } from './data';
import { User } from 'type';
import { getCurrentUser } from './helpers';

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
    const currentUser = getCurrentUser(userId);
    if (!currentUser) {
      return {
        message: `User not available with id ${userId}`
      };
    }
    const updatedUser = {
      id: userId,
      name: updatedUserFields.name ?? currentUser.name ?? '',
      email: updatedUserFields.email ?? currentUser.email ?? '',
      phone: updatedUserFields.phone ?? currentUser.phone ?? '',
      imageUrl: updatedUserFields.imageUrl ?? currentUser.imageUrl ?? '',
      createdAt: currentUser.createdAt ?? '',
      updatedAt: new Date().toISOString(),
    };
    users[userId - 1] = updatedUser;
    return updatedUser;
  }

  // delete a user
  deleteUserById(userId: number): User[] | undefined | {
    message: string
  } {
    const currentUser=getCurrentUser(userId)
    if (!currentUser) {
      return {
        message: `User not available with id ${userId}`
      }
    }
    const newUsers = users.filter((user) => user.id !== userId)
    return newUsers;
  }
}
