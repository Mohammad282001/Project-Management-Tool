import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import { Document, Types } from 'mongoose';

export enum TaskStatus {
    TODO = 'To Do',
    IN_PROGRESS = 'In Progress',
    DONE = 'Done',
}

@Schema()
export class Task extends Document { 
    @Prop({ require: true })
    title: string;

    @Prop({})
    description: string;

    @Prop({ enum: TaskStatus, default: TaskStatus.TODO })
    status: TaskStatus;

    @Prop({ })
    dueDate: Date;
    
    @Prop({ type: Types.ObjectId, ref: 'Project', required: true })
    projectId: Types.ObjectId;
}


export const TasksSchema = SchemaFactory.createForClass(Task)