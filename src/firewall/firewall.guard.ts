/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Request } from 'express';

import { Observable } from 'rxjs';

@Injectable()
export class FirewallGuard implements CanActivate {
  private readonly allowedNames = ['Neymar', 'Messi'];
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req: any = context.switchToHttp().getRequest();

    if (this.allowedNames.includes(req.body?.name)) {
      return true;
    }

    throw new ForbiddenException('Access denied: only Messi or Neymar allowed');
  }
}
