'use strict';
const logger = require('../utils/logger');


const {
  ApiPromise,
  WsProvider
} = require('@polkadot/api');


class PolkadotAPI {
  _api = null

  /**
   * Connect to a server
   * @param  {string} socket - Socket Address , 'wss://dev-node.substrate.dev'
   * @return {Promise<Object|null>} - API object provider
   */
  async tryConnect({
    socket
  }) {
    try {

      const provider = new WsProvider(socket);
      const api = await ApiPromise.create({
        provider
      });

      this._api = api;

      return api
    } catch (e) {
      logger.error("PolkadotAPI:tryConnect()", e);
      return null;
    }

  }

  /**
   * Get API provider object
   * @return {Promise<Object|null>} - API object provider
   */
  getAPI() {
    return this._api;
  }


}

module.exports = PolkadotAPI;
