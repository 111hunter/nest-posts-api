import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentEntity } from './comment.entity';
import { IdeaEntity } from 'src/idea/idea.entity';
import { UserEntity } from 'src/user/user.entity';


@Module({
    imports: [TypeOrmModule.forFeature([CommentEntity, IdeaEntity, UserEntity])],
    controllers: [CommentController],
    providers: [CommentService],
})
export class CommentModule { }