import { Controller, Get, Param, Post, Query, Body, NotFoundException } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
    constructor(private readonly service: NinjasService) {

    }

    @Get()
    getNinja(@Query('weapon') weapon: 'stars' | 'nunchuks') {

        return this.service.getNinjas(weapon);
    }

    @Get(':id')
    getManyNinjas(@Param('id') id: string) {
        try {
            return this.service.getOneNinja(+id);
        } catch (error) {
            throw new NotFoundException();
        }
    }

    @Post()
    createNew(@Body() createNinja: CreateNinjaDto) {
        return this.service.createOne(createNinja)
    }

    @Post('verify')
    verifyPayload(@Body() payload: any): any {
        return {
            status: 'success',
            message: 'Verification successful',
            payload
        };
    }
}
