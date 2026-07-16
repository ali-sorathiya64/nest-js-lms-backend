import { IsEmail,  IsString } from "class-validator";



// Register DTO
export class RegisterDTO {


  @IsString()
  firstName!: string;


  @IsString()
  lastName!: string;


  @IsEmail()
    email!: string;


  @IsString()
  password!: string;

}




// Login's DTO

export class LoginDto {

  @IsEmail()
    email!: string;

    @IsString()
  password!: string;


}