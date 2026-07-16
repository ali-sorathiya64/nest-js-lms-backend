import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDTO } from './auth.dto';
import { AuthGuard } from './auth.guard';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {

    //  authservice :AuthService;
  constructor( private readonly  authService : AuthService,
    private readonly userService :UserService
  ) {}
    


    @Post("register")
    async register(@Body() registerDTO : RegisterDTO ) {
      const token = await this.authService.userRegister( registerDTO );
      return token;
         
    }



    @Post("login")
    login (@Body() loginDto : LoginDto ){
      return this.authService.userLogin(loginDto)

    }

    @UseGuards(AuthGuard)
    @Get('profile')

    async getProfile( @Request() req ){
      const userId = req.user.sub;

      const user = await this.userService.getUserById(userId)

    console.log(user);

    return { id:user?.id,
          Firstname:user?.firstName,
          LastName:user?.lastName,
          email:user?.email,
          role:user?.role
    }
    }




    
}
