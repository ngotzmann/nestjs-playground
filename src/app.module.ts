import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { Connection, getConnectionOptions } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRootAsync({
    useFactory: async () =>
      Object.assign(await getConnectionOptions(), {
        autoLoadEntities: true,
      }),
  }), TodoModule],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
