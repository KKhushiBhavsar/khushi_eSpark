import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
//using middleware class
@Injectable()
export class loggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    //any logic we would like out middleware to execute before and afrer req/res
    console.log('executing request.......!');
    next();
  }
}
