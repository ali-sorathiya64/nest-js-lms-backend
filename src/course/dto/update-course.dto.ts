import { IsNotEmpty, IsString } from "class-validator";


export class UpdateCourseDto {


    @IsString()
    name!: string;


    @IsString()
    description!: string

}
