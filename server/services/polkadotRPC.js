'use strict';
const logger = require('../utils/logger');

class PolkadotRPC {
  _api = null;

  constructor(api = null) {
    this._api = api;
  }

  async systemChain() {
    try {
      if (!this._api) {
        throw Error('Not valid api provider!')
      }
      return this._api.rpc.system.chain()
    } catch (e) {
      logger.error("PolkadotRPC:systemChain()", e);
      return false;
    }
  }


  async systemName() {
    try {
      if (!this._api) {
        throw Error('Not valid api provider!')
      }
      return this._api.rpc.system.name()
    } catch (e) {
      logger.error("PolkadotRPC:systemName()", e);
      return false;
    }
  }


  async systemNodeRoles() {
    try {
      if (!this._api) {
        throw Error('Not valid api provider!')
      }
      return this._api.rpc.system.nodeRoles()
    } catch (e) {
      logger.error("PolkadotRPC:systemNodeRoles()", e);
      return false;
    }
  }


  async systemVersion() {
    try {
      if (!this._api) {
        throw Error('Not valid api provider!')
      }
      return this._api.rpc.system.version()
    } catch (e) {
      logger.error("PolkadotRPC:systemVersion()", e);
      return false;
    }
  }


}

module.exports = PolkadotRPC;
