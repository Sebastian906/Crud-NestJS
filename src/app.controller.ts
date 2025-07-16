import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './app.service';
import { User } from 'type';

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Obtener todos los usuarios
  @Get("all")
  getAllUsers(): User[] | undefined {
    return this.userService.getAllUsers();
  }

  // Obtener usuarios por ID
  @Get(':id')
  getUserById(@Param('id') id: string): User | undefined | { message: 
  string } {
    const userId = +id;
    return this.userService.getUserById(userId);
  }
}
