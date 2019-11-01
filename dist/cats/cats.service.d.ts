import { Model } from 'mongoose';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
export declare class CatsService {
    private readonly catModel;
    constructor(catModel: Model<Cat>);
    create(createCatDto: CreateCatDto): Promise<Cat>;
    findAll(): Promise<Cat[]>;
    findOneById(catId: string): Promise<Cat>;
    update(catId: string, updateCatDto: UpdateCatDto): Promise<Cat>;
    delete(catId: string): Promise<Cat>;
}
