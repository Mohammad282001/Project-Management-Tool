import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsModule } from './projects/projects.module';




@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://PMS2:PMS2@cluster0.92aaigo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    ),
    ProjectsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
