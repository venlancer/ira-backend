import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConferencesModule } from './conferences/conferences.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AbstractRegisterModule } from './abstract-register/abstract-register.module';
const uri = "mongodb+srv://mongodbuser_ira:mongodbpasword123@cluster0.ms21a.mongodb.net/ira?retryWrites=true&w=majority&appName=Cluster0"
@Module({
  imports: [  MongooseModule.forRoot(uri), // add your MongoDB URI here
    ConferencesModule, AbstractRegisterModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
