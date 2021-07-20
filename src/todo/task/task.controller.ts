import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './task.entity';
import { Crud } from '@nestjsx/crud';

@Crud({
  model: {
    type: Task
  }
})
@Controller('task')
export class TaskController {
  constructor(public service: TaskService) {}
}
