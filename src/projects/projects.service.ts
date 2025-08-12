import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project } from './schemas/project.schema';
import { CreateProjectDto } from './dtos/create-project.dto';
import { UpdateProjectDto } from './dtos/update-project.dto';

@Injectable()
export class ProjectsService {
    constructor(@InjectModel(Project.name) private projectModel: Model<Project>) { }

    
    async create(createProjectDto: CreateProjectDto): Promise<Project> {
        const createdProject = new this.projectModel(createProjectDto);
        return await createdProject.save();
    }

    async findAll(): Promise<Project[]> {
        return await this.projectModel.find().exec();
    }

    async findOne(id: string): Promise<Project> {
        const project = await this.projectModel.findById(id).exec();
        if (!project) throw new NotFoundException(`Project with ID ${id} not found`);
        return project;
    }

    async update(id: string, updateProjectDto: UpdateProjectDto): Promise<Project> {
        const updatedProject = await this.projectModel.findByIdAndUpdate(id, updateProjectDto, { new: true }).exec();
        if (!updatedProject) throw new NotFoundException(`Project with ID ${id} not found`);
        return updatedProject;
    }

    async remove(id: string): Promise<void> {
        const deleted = await this.projectModel.findByIdAndDelete(id).exec();
        if (!deleted) throw new NotFoundException(`Project with ID ${id} not found`);
    }
}
