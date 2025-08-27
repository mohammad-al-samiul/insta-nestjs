/* eslint-disable @typescript-eslint/no-unsafe-return */
import { IsString, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';
export class UserDto {
  @IsString()
  @MinLength(3)
  @Transform(({ value }) => (value === 'Virat' ? 'Kholi' : value))
  name: string;

  @IsString()
  category: string;
}
