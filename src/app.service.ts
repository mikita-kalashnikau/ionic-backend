import { Injectable } from '@nestjs/common';
import { UserInterface } from "./models/user.interface";

@Injectable()
export class AppService {
  getUsers(): Array<UserInterface> {
    return [
      {
        age: "25",
        email: "mikita.kalashnikau@gmail.com",
        login: "gveily",
        name: "Mikita Kalashnikau",
        sex: "male"
      }
    ];
  }
}
