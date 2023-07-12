import { Injectable } from '@nestjs/common';

//services is also called providers.
//main use of providers that it can be injected as dependencies
// providers(services) are decorated with @Injectable and can use dependency injection to manage their own dependency
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
