import { Injectable } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { List } from './list.entity';

@Injectable()
export class ListService {
  
  constructor(
    @InjectRepository(List)
    private repo: Repository<List>,
  ) {}

  create(createListDto: CreateListDto) {
    const list = new List();
    list.name = createListDto.name;
    list.description = createListDto.description;
    list.tasks = createListDto.tasks;
    return this.repo.save(list);
  }

  async findAll(): Promise<List[]> {
    return await this.repo.find();
  }

  async findOne(id: number): Promise<List> {
    return await this.repo.findOne(id);
  }

  async update(id: number, updateListDto: UpdateListDto) {
    return await this.repo.update(id, updateListDto);
  }

  async remove(id: number): Promise<void> {
    await this.repo.delete(id);
  }}
