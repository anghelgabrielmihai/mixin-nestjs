import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
    constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) {}

    async create(createCatDto: CreateCatDto): Promise<Cat> {
        const createdCat = new this.catModel(createCatDto);
        return await createdCat.save();
    }

    async findAll(): Promise<Cat[]> {
        return await this.catModel.find().exec();
    }

    async findOneById(catId: string): Promise<Cat> {
        const cat = await this.catModel.findOneById(catId).exec();
        return cat;
    }

    async update(catId: string, updateCatDto: UpdateCatDto): Promise<Cat> {
        const updateCat = await this.catModel.findByIdAndUpdate(catId, updateCatDto, { new: true });
        return updateCat;
    }

    async delete(catId: string): Promise<Cat> {
        const deleteCat = await this.catModel.findByIdAndRemove(catId);
        return deleteCat;
    }
}
