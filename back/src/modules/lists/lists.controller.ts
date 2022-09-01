import { Body, Controller, Get, Param, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../auth/get-user.decorator';
import { User } from '../users/users.entity';
import { SetListDto, GetMediaListsDto } from './dto';
import { List } from './lists.entity';
import { ListsService } from './lists.service';

@Controller('lists')
export class ListsController {
  //Create constructor and include services to call the privately
  constructor(private readonly listService: ListsService) {}

  //Define methods to call from API
  @Put()
  @UseGuards(AuthGuard('jwt'))
  async setMediaList(
    @Body() body: SetListDto,
    @GetUser() user: User,
  ): Promise<List> {
    const { mediaId, mediaType, onList, list } = body;
    return await this.listService.setMediaList(
      mediaType,
      mediaId,
      user,
      onList,
      list,
    );
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async getListsByMediaIdAndUser(
    @Body() body: GetMediaListsDto,
    @GetUser() user: User,
  ): Promise<any> {
    const { mediaId, mediaType } = body;
    return await this.listService.getListsByMediaIdAndUser(
      mediaType,
      mediaId,
      user,
    );
  }
}
