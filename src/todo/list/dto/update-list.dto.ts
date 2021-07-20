import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { Task } from 'src/todo/task/task.entity';
import { CreateListDto } from './create-list.dto';

export class UpdateListDto extends PartialType(CreateListDto) {
    
    @IsNotEmpty()
    name: String;
    
    @IsOptional()
    description: String;
    
    tasks: Task[];
}
