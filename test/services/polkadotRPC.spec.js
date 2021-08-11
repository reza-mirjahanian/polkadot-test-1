'use strict';
const expect = require('chai').expect;

const PolkadotRPC = require('../../server/services/polkadotRPC');

const mockedAPI = {
  rpc: {
    system: {
      chain: async () => {
        return new Promise(function(resolve) {
          resolve('Development');
        })
      },
      name: async () => {
        return new Promise(function(resolve) {
          resolve('Substrate Node');
        })
      },
      version: async () => {
        return new Promise(function(resolve) {
          resolve('2.0.0-rc4-11d289979-x86_64-linux-gnu');
        })
      }
    }
  }
};


suite('Testing PolkadotRPC', () => {

  const noProvicerPolkRPC = new PolkadotRPC(null);
  const polkRPC = new PolkadotRPC(mockedAPI);
  suite('System', () => {

    test('should systemChain return correct response" ', async () => {
      const response = await noProvicerPolkRPC.systemChain();
      expect(response).be.equal(null);
      const chain = await polkRPC.systemChain();
      expect(chain).be.equal('Development');
    });

    test('should systemName return correct response" ', async () => {
      const response = await noProvicerPolkRPC.systemName();
      expect(response).be.equal(null);
      const chain = await polkRPC.systemName();
      expect(chain).be.equal('Substrate Node');
    });

    test('should systemVersion return correct response" ', async () => {
      const response = await noProvicerPolkRPC.systemVersion();
      expect(response).be.equal(null);
      const chain = await polkRPC.systemVersion();
      expect(chain).be.equal('2.0.0-rc4-11d289979-x86_64-linux-gnu');
    });

  });


});