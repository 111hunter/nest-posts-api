import { Module } from '@nestjs/common';
import { IdeaEntity } from './idea.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([IdeaEntity])],
})
export class IdeaModule { }