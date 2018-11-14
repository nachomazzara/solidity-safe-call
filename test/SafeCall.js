import { assertRevert } from 'openzeppelin-eth/test/helpers/assertRevert'
import { increaseTime, duration } from './helpers/increaseTime'

const BigNumber = web3.BigNumber
require('chai')
  .use(require('chai-as-promised'))
  .use(require('chai-bignumber')(BigNumber))
  .should()

// const SafeCall = artifacts.require('SafeCall')
const ERC20Token = artifacts.require('ERC20Test')
const AssetRegistryToken = artifacts.require('AssetRegistryTest')

contract('SafeCall', function([_, owner]) {
  let erc20
  let assetRegistry

  const fromOwner = { from: owner }

  const creationParams = {
    ...fromOwner,
    gas: 6e6,
    gasPrice: 21e9
  }

  beforeEach(async () => {
    erc20 = ERC20Token.new(creationParams)
    assetRegistry = AssetRegistryToken.new(creationParams)
  })

  describe('Method exist', function() {
    it('should call method with safe call', async function() {})
  })
})
