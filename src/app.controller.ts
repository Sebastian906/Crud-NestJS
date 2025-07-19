import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { UserService } from './app.service';
import { User } from 'type';
import { CreateUserDto, UpdateUserDto, UserResponseDto, ErrorResponseDto } from './dto/user.dto';

@ApiTags('users')
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Obtener todos los usuarios
  @Get("all")
  @ApiOperation({ 
    summary: 'Obtener todos los usuarios',
    description: 'Devuelve una lista con todos los usuarios registrados en el sistema'
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Lista de usuarios obtenida exitosamente',
    type: [UserResponseDto]
  })
  getAllUsers(): User[] | undefined {
    return this.userService.getAllUsers();
  }

  // Obtener usuarios por ID
  @Get(':id')
  @ApiOperation({ 
    summary: 'Obtener usuario por ID',
    description: 'Devuelve la información de un usuario específico basado en su ID'
  })
  @ApiParam({ 
    name: 'id', 
    type: 'number',
    description: 'ID único del usuario a buscar',
    example: 1
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Usuario encontrado exitosamente',
    type: UserResponseDto
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Usuario no encontrado',
    type: ErrorResponseDto
  })
  getUserById(@Param('id') id: string): User | undefined | { 
    message: string 
  } {
    const userId = +id;
    return this.userService.getUserById(userId);
  }

  // Crear usuario
  @Post("create")
  @ApiOperation({ 
    summary: 'Crear un nuevo usuario',
    description: 'Crea un nuevo usuario en el sistema con la información proporcionada'
  })
  @ApiBody({ 
    type: CreateUserDto,
    description: 'Datos del usuario a crear'
  })
  @ApiResponse({ 
    status: 201, 
    description: 'Usuario creado exitosamente',
    type: UserResponseDto
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Datos faltantes o incorrectos',
    type: ErrorResponseDto
  })
  createUser(@Body() user: CreateUserDto): User | { message: string } {
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
  @ApiOperation({ 
    summary: 'Actualizar usuario',
    description: 'Actualiza la información de un usuario existente'
  })
  @ApiParam({ 
    name: 'id', 
    type: 'number',
    description: 'ID único del usuario a actualizar',
    example: 1
  })
  @ApiBody({ 
    type: UpdateUserDto,
    description: 'Datos del usuario a actualizar (campos opcionales)'
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Usuario actualizado exitosamente',
    type: UserResponseDto
  })
  @ApiResponse({ 
    status: 400, 
    description: 'No se proporcionaron campos para actualizar',
    type: ErrorResponseDto
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Usuario no encontrado',
    type: ErrorResponseDto
  })
  updateUser(
    @Param("id") id: string, 
    @Body() user: UpdateUserDto,
  ): User | undefined | { message: string } {
    return this.userService.updateUser(+id, user);
  }

  // Eliminar usuario
  @Delete("delete/:id")
  @ApiOperation({ 
    summary: 'Eliminar usuario',
    description: 'Elimina un usuario del sistema basado en su ID'
  })
  @ApiParam({ 
    name: 'id', 
    type: 'number',
    description: 'ID único del usuario a eliminar',
    example: 1
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Usuario eliminado exitosamente. Devuelve la lista actualizada de usuarios',
    type: [UserResponseDto]
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Usuario no encontrado',
    type: ErrorResponseDto
  })
  deleteUserById(
    @Param('id') id: string,
  ): User[] | undefined | {
    message: string
  } {
    return this.userService.deleteUserById(+id);
  }
}
