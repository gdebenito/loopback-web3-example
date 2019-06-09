import { inject } from '@loopback/context';
import { CONTRACT_PROVIDER } from "../keys";
import { get, param, post } from '@loopback/rest';

export class ContractController {
  constructor(
    @inject(CONTRACT_PROVIDER) protected connector: any,
  ) {
    console.log('llegué')
  }


  @get('/contract/accounts')
  public getAccounts(): Promise<any> {
    return this.connector.web3.eth.getAccounts();
  }

  @get('contract/getHash')
  public getHash(
    @param.query.string('id') id: string,
    @param.query.string('state') state: string): Promise<any> {

    return this.connector.contract.methods.getHash(id, state).call();

  }


  @post('contract/setHash')
  public setHash(
    @param.query.string('id') id: string,
    @param.query.string('state') state: string,
    @param.query.string('dataHash') dataHash: string
  ): Promise<any> {

    return new Promise((resolve, reject) => {
      this.connector.contract.methods
        .setHash(id, state, dataHash)
        .send()
        .on('transactionHash', resolve)
        .catch(reject);
    });

  }

  // @get('contract/getHashArray')

  // @get('contract/setHash')

}
