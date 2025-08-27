import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { FirewallGuard } from 'src/firewall/firewall.guard';

@Controller('users')
export class UsersController {
  //Dependency Injection
  constructor(private readonly userService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getSingleUser(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.userService.getSingleUser(id);
    } catch (error) {
      if (error instanceof Error) {
        throw new NotFoundException(error.message);
      } else {
        throw new NotFoundException('Something went wrong');
      }
    }
  }

  @Post()
  @UseGuards(FirewallGuard)
  addUser(
    @Body(
      new ValidationPipe({
        transform: true,
      }),
    )
    user: UserDto,
  ) {
    return this.userService.addUser(user);
  }
}
