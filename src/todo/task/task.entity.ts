import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import { IsNotEmpty } from 'class-validator';
import { List } from 'src/todo/list/list.entity';

@Entity()
export class Task {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    task: String;

    @Column()
    @IsNotEmpty()
    DueDate: Date;
    
    @Column({default: false})
    Done: Boolean;

    @ManyToOne(type => List, list => list.tasks)
    list: List;
}
