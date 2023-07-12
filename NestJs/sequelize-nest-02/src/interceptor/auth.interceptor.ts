import {
  CallHandler,
  ExecutionContext,
  NestInterceptor,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
export class AuthInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    console.log('headers', JSON.stringify(req.headers.authorization));
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split('')[1];
    console.log('token', token);
    console.log('auth', authHeader);
    if (!token) {
      throw new UnauthorizedException('Provide new token');
    }
    return handler.handle();
  }
}
