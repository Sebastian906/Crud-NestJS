import { Controller, Get } from '@nestjs/common';
import { UserService } from './app.service';
import { User } from 'type';

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  // get all users
  @Get("all")
  getAllUsers(): User[] | undefined {
    return this.userService.getAllUsers();
  }
}
