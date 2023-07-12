//using middleware function
import { NextFunction, Request, Response } from 'express';
export function simpleFunction(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log('executing middleware!!!!');
  next();
}
