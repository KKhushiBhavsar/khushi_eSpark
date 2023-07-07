import { repl } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  /* for watch */
  /** --> during developement it is useful to run REPL in watch mode to reflects all the
   * code changes automatically
   */
  /*const replServer = await repl(AppModule);
  replServer.setupHistory('.nestjs_repl_history', (err) => {
    if (err) {
      console.log(err);
    }
  }); */
  /* repl mode */
  /** --> REPL is simple interactive environment that takes single user input
   * executes them and gives result to the user.
   *  --> REPL feature lets you inspect your dependency and call graph and call
   * methods on your providers (and controllers) direct from our terminal
   */
  await repl(AppModule);
}
bootstrap();
