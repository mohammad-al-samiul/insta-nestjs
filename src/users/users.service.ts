import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'hamim',
      category: 'programmer',
    },
    {
      id: 2,
      name: 'tamim',
      category: 'player',
    },
  ];

  getAllUsers() {
    return this.users;
  }

  getSingleUser(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new Error('User Not Found');
    }
    return user;
  }

  addUser(user: UserDto) {
    const id = Date.now();
    this.users.push({
      id,
      ...user,
    });
    return this.getSingleUser(id);
  }
}
