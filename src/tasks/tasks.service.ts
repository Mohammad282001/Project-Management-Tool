import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './schemas/task.schema';
import { CreateTaskDto } from './dtos/create-task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';


@Injectable()
export class TasksService {
    constructor(@InjectModel(Task.name) private taskModel: Model<Task>) { }

    async create(createTaskDto: CreateTaskDto): Promise<Task> {
        const newTask = new this.taskModel(createTaskDto);
        return newTask.save();
    }

    async findAllTasks(): Promise<Task[]> {
        return await this.taskModel.find().exec();
    }

    async findByProject(projectId: string): Promise<Task[]> {
        const task = await this.taskModel.find({ projectId: projectId }).exec();
        return task
    }

    async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task | null> {
        const updatedTask = await this.taskModel.findByIdAndUpdate(id, updateTaskDto, { new: true }).exec();
        return updatedTask
    }


    async remove(id: string): Promise<Task | null> {
        const deleted = await this.taskModel.findByIdAndDelete(id).exec();
        return deleted
    }
}
