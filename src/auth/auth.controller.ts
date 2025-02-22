import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthUserDto } from './dto/auth.user.dto';

@Controller('auth')
export class AuthController {
  @Post('register')
  async register(@Body() dto: AuthUserDto){

  }
  @HttpCode(200)
  @Post('login')
  async login(@Body() dto: AuthUserDto){

  }
}
