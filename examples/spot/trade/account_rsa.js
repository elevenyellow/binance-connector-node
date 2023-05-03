'use strict'

const fs = require('fs')
const Spot = require('../../../src/spot')

// Please make sure the api key/secret is consistent with the baseURL. It won't work if you send request to production site with testnet api key.
// https://api.binance.com  is for production.
// https://testnet.binance.vision is the spot testnet base url

// Below example shows how to sign the request with RSA key. You will have to a few steps:
// 1. Have your RSA keys ready.
// 2. Login to Binance.com to register your public key.
// 3. Save the API Key that is generated from UI, then you are ready to go.
const apiKey = 'the api key'
const apiSecret = '' // Not required for RSA signature.

// load private key
const privateKey = fs.readFileSync('/Users/john/private_key_encrypted.pem')

const client = new Spot(apiKey, apiSecret, {
  baseURL: 'https://testnet.binance.vision', // This URL is for testnet; Remove it for production.
  privateKey,
  privateKeyPassphrase: 'password', // only used for encrypted key
  timeout: 1000
})

client.account()
  .then(response => client.logger.log(response.data))
  .catch(error => client.logger.error(error))
