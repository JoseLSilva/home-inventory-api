import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { ConfigAppModule } from './config/config.app.module';

@Module({
	imports: [ConfigAppModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
