import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://corinatitica:test@cluster0-sciuu.mongodb.net/test?retryWrites=true&w=majority'), CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
