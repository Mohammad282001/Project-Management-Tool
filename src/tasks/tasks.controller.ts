import { Controller, Get, Post, Put, Delete, Param, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dtos/create-task.dto';
import { UpdateProjectDto } from 'src/projects/dtos/update-project.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';


@Controller('tasks')
@UsePipes(new ValidationPipe({ whitelist: true }))
export class TasksController {
    constructor(private readonly tasksService: TasksService) { }

    @Post()
    async create(
        @Body() createTaskDto: CreateTaskDto
    ) {
        return this.tasksService.create(createTaskDto);
    }

    @Get(':projectId')
    async findByProject(
        @Param('projectId') projectId: string
    ) {
        return this.tasksService.findByProject(projectId)
    }

    @Get()
    async findAllTasks() {
        return this.tasksService.findAllTasks();
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
        return this.tasksService.update(id, updateTaskDto)
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.tasksService.remove(id)
    }



}
