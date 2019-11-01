import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { UpdateCatDto } from './dto/update-cat.dto';
export declare class CatsController {
    private readonly catsService;
    constructor(catsService: CatsService);
    create(createCatDto: CreateCatDto): Promise<void>;
    findAll(): Promise<Cat[]>;
    findOneById(catId: string): Promise<Cat>;
    updateCat(res: any, catId: string, updateCatDto: UpdateCatDto): Promise<Cat>;
    deleteCat(res: any, catId: any): Promise<any>;
}
