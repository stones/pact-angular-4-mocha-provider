const verifier = require('pact').Verifier
const path = require('path')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const expect = chai.expect
chai.use(chaiAsPromised)

var resolve = path.resolve(process.cwd(), './pacts/molfrontend-molbackend.json');
console.log(resolve);
console.log("=================");
// Verify that the provider meets all consumer expectations
describe('Pact Verification', () => {
  it('should validate the expectations of Our Little Consumer', function () { // lexical binding required here for timeout
    this.timeout(10000)
    var resolve = path.resolve(process.cwd(), './pacts/molfrontend-molbackend.json');
    console.log(resolve);
    let opts = {
      provider: 'MOLBackend',
      providerBaseUrl: 'http://localhost:2222',
      // providerStatesSetupUrl: 'http://localhost:8081/setup',
      pactUrls: [resolve]
    }

    return verifier.verifyProvider(opts)
      .then(output => {
        console.log('Pact Verification Complete!')
        console.log(output)
      })
  })
})
