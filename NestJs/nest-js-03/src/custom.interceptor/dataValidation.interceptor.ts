import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  BadRequestException,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

export class dataValidation implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    if (!req.body.first_name || !req.body.last_name) {
      throw new BadRequestException('Both first and last name required');
    }
    const { first_name, last_name } = req.body;
    return handler
      .handle()
      .pipe(map((data) => ({ data, first_name, last_name })));
  }
}
