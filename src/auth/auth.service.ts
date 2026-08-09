import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LoginDto, RegisterDTO } from './auth.dto';
import { JwtService } from '@nestjs/jwt';
import bcrypt from "bcrypt"

@Injectable()
export class AuthService {

  constructor(private readonly userService: UserService,
    private readonly jwtService: JwtService

  ) { }

  async userRegister(registerDTO: RegisterDTO) {

    console.log("Register user DTO  : " + registerDTO.firstName)



    const hashPassword = await bcrypt.hash(registerDTO.password, 10)


   

    const user = await this.userService.createUser({
      ...registerDTO,
      password: hashPassword
    });


    // jwt token

    const payload = { sub: user._id, role: 'admin' }

    const token = await this.jwtService.signAsync(payload)

    console.log(token);

    return {
      accessToken: token
    };
  }


  async userLogin(loginDto: LoginDto) {


    const user = await this.userService.loginUser(loginDto.email);

    if (!user) {
      throw new UnauthorizedException("Invalid exception")
    }


    const compare = await bcrypt.compare(loginDto.password, user.password);

    if (!compare) {
      throw new UnauthorizedException("Invalid credentials");
    }

    const payLoad = {
      sub: user._id,
      role:'admin'
    }

    const token = await this.jwtService.signAsync(payLoad);

    return {
      message: "User logged in successfuly",
      token,
      user: {
        id: user.id,
        Firstname: user.firstName,
        LastName: user.lastName,
        email: user.email
      }

    };



  }

}



