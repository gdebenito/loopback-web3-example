import { inject } from '@loopback/context';
import { CONTRACT_PROVIDER } from "../keys";
import { get } from '@loopback/rest';

export class ContractController {
  connector: any;
  constructor(
    @inject(CONTRACT_PROVIDER) connector: any
  ) {

    this.connector = connector;

    // console.log(this.connector);
  }


  @get('/contract/accounts')
  public getAccounts() {
    console.log('GET ACCOUNTS', JSON.stringify(this.connector));
    return this.connector.web3.eth.getAccounts();
  }
}
