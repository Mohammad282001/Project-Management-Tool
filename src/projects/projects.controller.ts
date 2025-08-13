import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dtos/create-project.dto';
import { UpdateProjectDto } from './dtos/update-project.dto';


// const routes: any[] = [];

// function create(name) {
//     console.log(name)
// }

// function post(func) {
//     function inner(name) {
//         routes.push({ url: 'projects', method: 'POST' });
//         func(name);
//         console.log("POST projects mapped")
//     }
//     return inner;
// }

// const secretFunc = post(create);

// secretFunc("mohammad");


@Controller('projects')
export class ProjectsController {
    constructor(private readonly projectsService: ProjectsService) { }

    @Post()
    async create(@Body() createProjectDto: CreateProjectDto) {
        // console.log(createProjectDto);
        // return
        return this.projectsService.create(createProjectDto);
    }

    @Get()
    async findAll() {
        return this.projectsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.projectsService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
        return this.projectsService.update(id, updateProjectDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.projectsService.remove(id);
    }
}
