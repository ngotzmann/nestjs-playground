import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListController } from './list/list.controller';
import { List } from './list/list.entity';
import { ListService } from './list/list.service';
import { TaskController } from './task/task.controller';
import { Task } from './task/task.entity';
import { TaskService } from './task/task.service';

@Module({
    imports: [TypeOrmModule.forFeature([List, Task])],
    exports: [TypeOrmModule, ListService, TaskService],
    controllers: [ListController, TaskController],
    providers: [ListService, TaskService],
})
export class TodoModule {}
