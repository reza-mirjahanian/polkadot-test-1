'use strict';
const logger = require('../utils/logger');

class PolkadotRPC {
  _api = null;

  constructor(api = null) {
    this._api = api;
  }

  /**
   * system_chain
   * @return {Promise<string|null>}
   */
  async systemChain() {
    try {
      if (!this._api) {
        throw Error('Not valid api provider!')
      }
      const chain = await this._api.rpc.system.chain();
      return String(chain)
    } catch (e) {
      logger.error("PolkadotRPC:systemChain()", e);
      return null;
    }
  }

  /**
   * system_name
   * @return {Promise<string|null>}
   */
  async systemName() {
    try {
      if (!this._api) {
        throw Error('Not valid api provider!')
      }
      const name = await this._api.rpc.system.name();
      return String(name)
    } catch (e) {
      logger.error("PolkadotRPC:systemName()", e);
      return null;
    }
  }


  /**
   * system_version
   * @return {Promise<string|null>}
   */
  async systemVersion() {
    try {
      if (!this._api) {
        throw Error('Not valid api provider!')
      }
      const version = await this._api.rpc.system.version();
      return String(version);
    } catch (e) {
      logger.error("PolkadotRPC:systemVersion()", e);
      return null;
    }
  }


}

module.exports = PolkadotRPC;
