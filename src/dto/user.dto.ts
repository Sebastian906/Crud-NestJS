import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsUrl, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'Nombre completo del usuario',
    example: 'Juan Pérez',
    minLength: 2
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  name: string;

  @ApiProperty({
    description: 'Correo electrónico del usuario',
    example: 'juan.perez@email.com'
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Número de teléfono del usuario',
    example: '+57 300 123 4567'
  })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    description: 'URL de la imagen de perfil del usuario',
    example: 'https://example.com/avatar.jpg'
  })
  @IsUrl()
  @IsNotEmpty()
  imageUrl: string;
}

export class UpdateUserDto {
  @ApiProperty({
    description: 'Nombre completo del usuario',
    example: 'Juan Pérez',
    required: false,
    minLength: 2
  })
  @IsOptional()
  @IsString()
  @MinLength(2)
  name?: string;

  @ApiProperty({
    description: 'Correo electrónico del usuario',
    example: 'juan.perez@email.com',
    required: false
  })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({
    description: 'Número de teléfono del usuario',
    example: '+57 300 123 4567',
    required: false
  })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({
    description: 'URL de la imagen de perfil del usuario',
    example: 'https://example.com/avatar.jpg',
    required: false
  })
  @IsOptional()
  @IsUrl()
  imageUrl?: string;
}

export class UserResponseDto {
  @ApiProperty({
    description: 'ID único del usuario',
    example: 1
  })
  id: number;

  @ApiProperty({
    description: 'Nombre completo del usuario',
    example: 'Juan Pérez'
  })
  name: string;

  @ApiProperty({
    description: 'Correo electrónico del usuario',
    example: 'juan.perez@email.com'
  })
  email: string;

  @ApiProperty({
    description: 'Número de teléfono del usuario',
    example: '+57 300 123 4567'
  })
  phone: string;

  @ApiProperty({
    description: 'URL de la imagen de perfil del usuario',
    example: 'https://example.com/avatar.jpg'
  })
  imageUrl: string;

  @ApiProperty({
    description: 'Fecha de creación del usuario',
    example: '2024-01-15T10:30:00.000Z'
  })
  createdAt: string;

  @ApiProperty({
    description: 'Fecha de última actualización del usuario',
    example: '2024-01-16T14:45:00.000Z',
    required: false
  })
  updatedAt?: string;
}

export class ErrorResponseDto {
  @ApiProperty({
    description: 'Mensaje de error',
    example: 'User not available with id 999'
  })
  message: string;
}