import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://kalashnikau:4Br4k4d4br4@cluster0.sl3z5.mongodb.net/nestjs-db?retryWrites=true&w=majority\n'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
