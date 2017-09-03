const verifier = require('pact').Verifier
const path = require('path')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const expect = chai.expect
chai.use(chaiAsPromised)

// Verify that the provider meets all consumer expectations
describe('Pact Verification', () => {
  it('should validate the expectations of Our Little Consumer', function () { // lexical binding required here for timeout
    this.timeout(10000)
    let opts = {
      provider: 'MOLBackend',
      providerBaseUrl: 'http://localhost:2222',
      pactBrokerUrl: '',
      tags: ['test'],
      pactBrokerUsername: '',
      pactBrokerPassword: '',
      publishVerificationResult: true,
      providerVersion: '1.0.0'
    }

    return verifier.verifyProvider(opts)
      .then(output => {
        console.log('Pact Verification Complete!')
        console.log(output)
      })
  })
})
