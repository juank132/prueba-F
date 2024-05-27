import { Controller, Delete, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
    constructor(){}

    @Get(":id")
    getProfile(){
        return "Perfil"
    }

    @Delete()
    deleteProfile(){
        return "Perfil borrado"
    }

    
}
