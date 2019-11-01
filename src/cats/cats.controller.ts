import { Controller, Get, Post, Body, Put, Query, Res, NotFoundException, HttpStatus, Delete } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cats')
export class CatsController {

    constructor(private readonly catsService: CatsService) {}

    @Post('/create')
    async create(@Body() createCatDto: CreateCatDto) {
      this.catsService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<Cat[]> {
      return this.catsService.findAll();
    }

    @Get()
    async findOneById(@Query('catId')catId: string): Promise<Cat> {
      return this.catsService.findOneById(catId);
    }

    @Put('/update')
    async updateCat(@Res() res, @Query('catId')catId: string, @Body()updateCatDto: UpdateCatDto): Promise<Cat> {
      const cat =  await this.catsService.update(catId, updateCatDto);
      if (!cat) { throw new NotFoundException('Cat does not exist!'); }
      return res.status(HttpStatus.OK).json({
            message: 'Cat has been successfully updated',
            cat,
        });
    }

    @Delete('/delete')
    async deleteCat(@Res() res, @Query('catId') catId) {
        const cat = await this.catsService.delete(catId);
        if (!cat) { throw new NotFoundException('Cat does not exist'); }
        return res.status(HttpStatus.OK).json({
            message: 'Cat has been deleted',
            cat,
        });
    }
}
