import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { LoginDto, RegisterDTO } from 'src/auth/auth.dto';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import bcrypt from "bcrypt"

@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private userModel: Model<User>) { }

    async createUser(registerUserDto: RegisterDTO) {

        try {
            return await this.userModel.create({
                firstName: registerUserDto.firstName,
                lastName: registerUserDto.lastName,
                email: registerUserDto.email,
                password: registerUserDto.password
            })
        }
        catch (error: any) {
            console.log(error)

            const error_code = 11000
            if (error === error_code) {
                throw new ConflictException("Email already exist")
            }

            throw error;
        }

    }


    async loginUser(email: string) {

        return await this.userModel.findOne({
            email
        })

        //      try {

        //    const user = await this.userModel.findOne({
        //             email:loginDto.email
        //         })

        //         if(!user){
        //             throw new UnauthorizedException("Inavlid credentials")
        //         }

        //       const comparePassword = await bcrypt.compare(  loginDto.password ,user.password)

        //       const payload = 


        //      } catch (error) {
        //         console.log(error)

        //      }



    }

    async getUserById(id:string) {

        return await this.userModel.findOne({_id : id})

    }
}


