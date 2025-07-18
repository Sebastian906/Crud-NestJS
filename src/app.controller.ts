import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
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
  getUserById(@Param('id') id: string): User | undefined | { 
    message: string 
  } {
    const userId = +id;
    return this.userService.getUserById(userId);
  }

  // Crear usuario
  @Post("create")
  createUser(@Body() user: Partial<User>): User | { message: string } {
    const userData = user;
    if (
      !userData.name ||
      !userData.email ||
      !userData.phone ||
      !userData.imageUrl 
    ) {
      return { 
        message: 'Name, email, phone and image are required' 
      };
    }
    return this.userService.createUser(userData);
  }

  // Actualizar usuarios
  @Put("update/:id")
  updateUser(
    @Param("id") id: string, 
    @Body() user: Partial<User>): User | {
    message: string
  } {
    return this.userService.updateUser(+id, user);
  }
}
