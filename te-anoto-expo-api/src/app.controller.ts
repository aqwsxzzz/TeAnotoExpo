import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { Request as RequestExpress } from 'express';
import { LocalAuthGuard } from './modules/auth/local-auth.guard';

@Controller()
export class AppController {
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req: RequestExpress) {
    return req.user;
  }
}
