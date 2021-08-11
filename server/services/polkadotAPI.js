'use strict';
const logger = require('../utils/logger');


const {
  ApiPromise,
  WsProvider
} = require('@polkadot/api');


class PolkadotAPI {
  _api = null

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
      return false;
    }

  }

  getAPI() {
    return this._api;
  }


}

module.exports = PolkadotAPI;
