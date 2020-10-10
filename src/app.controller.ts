import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserInterface } from "./models/user.interface";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUsers(): Array<UserInterface> {
    return this.appService.getUsers();
  }
}
