import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Project extends Document {
    @Prop({ required: true })
    title: string;

    @Prop()
    description?: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);







//SchemaFactory: takes a typescript class decorated with @Schema() and converts it into a Mongoose schema.
//SchemaFactory.createForClass: bridges between the class and Mongoose
