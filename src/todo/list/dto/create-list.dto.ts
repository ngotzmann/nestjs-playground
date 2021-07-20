import { IsNotEmpty, IsOptional } from "class-validator";
import { Task } from "src/todo/task/task.entity";

export class CreateListDto {

    @IsNotEmpty()
    name: String;
    
    @IsOptional()
    description: String;
    
    tasks: Task[];
}
