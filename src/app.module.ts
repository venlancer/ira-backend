import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConferencesModule } from './conferences/conferences.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [  MongooseModule.forRoot(process.env.MONGODB_URI), // add your MongoDB URI here
    ConferencesModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
