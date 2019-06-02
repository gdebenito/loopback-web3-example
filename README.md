# loopback-web3-example

## How I did it:
### Steps:
1. Initialize repository with
```bash
$ lb4
```
2. Install datasource
```bash
$ lb4 datasource
? Datasource name: Web3
? Select the connector for Web3: other
? Enter the connector's package name: @gdbc/loopback-connector-web3
   create src/datasources/web-3.datasource.json
   create src/datasources/web-3.datasource.ts

# installing dependencies...

+ @gdbc/loopback-connector-web3@0.0.4
added 108 packages from 89 contributors and audited 76772 packages in 37.381s
found 3 vulnerabilities (1 low, 2 moderate)
  run `npm audit fix` to fix them, or `npm audit` for details
   update src/datasources/index.ts

Datasource Web3 was created in src/datasources/
```
3. Define the _web-3-datasource.datasource.json_:
```json
{
	"name": "Web3",
	"connector": "@gdbc/loopback-connector-web3",
	"provider": "ws://localhost:8545",
	"debug": true
}
```

_Note_: I use ganache locally, that is why I specify the localhost provider.


4. Install Web3 in local project
```
npm install --save web3
```

5. Make Provider
```ts
import { getService, juggler } from '@loopback/service-proxy';
import { inject, Provider } from '@loopback/core';
import { Web3DataSource } from '../datasources/web-3.datasource';
import { Modules as Web3Service } from 'web3';

export class Web3Provider implements Provider<Web3Service> {
	constructor(
		@inject('datasources.Web3')
		protected dataSource: juggler.DataSource = new Web3DataSource(),
	) { }

	value(): Promise<Web3Service> {
		return getService(this.dataSource);
	}
}
```

6. Bind provider to application



```ts
// keys.ts
export const WEB3_PROVIDER = 'providers.web3';
```

```ts
// application.ts
this.bind(WEB3_PROVIDER).toProvider(Web3Provider);
```

7. Controller
```bash
$ lb4 controller
? Controller class name: Web3
? What kind of controller would you like to generate? Empty Controller
   create src/controllers/web-3.controller.ts
   update src/controllers/index.ts

Controller Web3 was created in src/controllers/

```
Then:
```ts
import { inject } from '@loopback/context';
import { WEB3_PROVIDER } from "../keys";
import Web3 from "web3";
import { get } from '@loopback/rest';

export class Web3Controller {
  constructor(
    @inject(WEB3_PROVIDER) private web3: Web3
  ) { }


  @get('/accounts')
  public async getAccounts() {
    return await this.web3.eth.getAccounts();
  }
}
```
