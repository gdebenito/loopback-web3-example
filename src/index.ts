import {LoopbackWeb3ExampleApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {LoopbackWeb3ExampleApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new LoopbackWeb3ExampleApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
