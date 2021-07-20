import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, BeforeUpdate } from 'typeorm';
import { Task } from 'src/todo/task/task.entity';
import { IsNotEmpty, IsOptional } from 'class-validator';

@Entity()
export class List {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
    created: Date;
  
    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
    updated: Date;
  
    @BeforeUpdate()
    updateTimestamp() {
      this.updated = new Date;
    }

    @Column()
    @IsNotEmpty()
    name: String;
    
    @Column()
    @IsOptional()
    description: String;
    
    @OneToMany(type => Task, task => task.list, {eager: true})
    @JoinColumn()
    tasks: Task[];
}
