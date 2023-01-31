'use strict'

const { validateRequiredParameters } = require('../helpers/validation')

const Broker = (superclass) =>
  class extends superclass {
    /**
     * Query Sub-account List(For Master Account)<br>
     *
     * GET /sapi/v1/broker/subAccount<br>
     *
     * {@link https://binance-docs.github.io/Brokerage-API/Brokerage_Operation_Endpoints/#query-sub-account}
     *
     * @param {object} [options]
     * @param {string} [options.subAccountId]
     * @param {number} [options.page]
     * @param {number} [options.limit]
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     */
    brokerSubAccountList (options = {}) {
      return this.signRequest('GET', '/sapi/v1/broker/subAccount', options)
    }

    /**
     * Universal Transfer (For Master Account)<br>
     *
     * POST /sapi/v1/broker/transfer<br>
     *
     * {@link https://binance-docs.github.io/Brokerage-API/Brokerage_Operation_Endpoints/#broker-account-information}
     *
     * @param {string} asset
     * @param {number} amount
     * @param {object} [options]
     * @param {string} [options.fromId]
     * @param {string} [options.toId]
     * @param {string} [options.clientTranId] - Must be unique
     * @param {number} [options.recvWindow]
     */
    brokerSubAccountTransfer (asset, amount, options = {}) {
      validateRequiredParameters({
        asset,
        amount
      })
      return this.signRequest(
        'POST',
        '/sapi/v1/broker/transfer',
        Object.assign(options, {
          asset,
          amount
        })
      )
    }
  }

module.exports = Broker
