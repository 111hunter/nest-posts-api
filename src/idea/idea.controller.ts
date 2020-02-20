import {
    Controller,
    Get,
    Logger,
    Post,
    Param,
    Body,
    Delete,
    Put,
    UsePipes,
} from '@nestjs/common';
import { IdeaService } from './idea.service';
import { IdeaDTO } from './idea.dto';
import { ValidationPipe } from 'src/shared/validation.pipe';

@Controller('api/ideas')
export class IdeaController {
    private logger = new Logger('IdeaController');

    constructor(private ideaService: IdeaService) { }

    @Get()
    showAllIdeas() {
        this.logger.log('show idea');
        return this.ideaService.showAll();
    }

    @Post()
    @UsePipes(new ValidationPipe())
    createIdea(@Body() createData: IdeaDTO) {
        this.logger.log(JSON.stringify(createData));
        return this.ideaService.create(createData);
    }

    @Get(':id')
    readIdea(@Param('id') id: string) {
        return this.ideaService.read(id);
    }

    @Put(':id')
    @UsePipes(new ValidationPipe())
    updateIdea(@Param('id') id: string, @Body() updateData: Partial<IdeaDTO>) {
        this.logger.log(JSON.stringify(updateData));
        return this.ideaService.update(id, updateData);
    }

    @Delete(':id')
    destroyIdea(@Param('id') id: string) {
        return this.ideaService.destroy(id);
    }
}