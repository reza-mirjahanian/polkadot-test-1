'use strict';
const logger = require('./utils/logger');
const PolkadotAPI = require('./services/polkadotAPI');
const PolkadotRPC = require('./services/polkadotRPC');

const constants = require('./constants');

async function testing() {
  const socket = constants.API.SOCKET_URL;
  const polkadotAPI = new PolkadotAPI();
  const api = await polkadotAPI.tryConnect({
    socket
  });
  const polkadotRPC = new PolkadotRPC(api);
  const [chain, nodeName, nodeVersion, nodeRules] = await Promise.all([
    polkadotRPC.systemChain(),
    polkadotRPC.systemName(),
    polkadotRPC.systemVersion(),
    polkadotRPC.systemNodeRoles(),
  ]);
  console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion} Rules: ${nodeRules}`);

}
testing().catch(console.error).finally(() => process.exit());

logger.log('Server Is Running!')



process
  .on('unhandledRejection', (reason, p) => {
    logger.error('Unhandled Rejection at Promise', {
      reason,
      p
    });
  })
  .on('uncaughtException', err => {
    logger.error('Uncaught Exception thrown', {
      err
    });
  });


async function graceFullShutdown() {
  try {
    logger.log('Service shutting down ...');
    await new Promise((resolve) => setTimeout(resolve, 10));
    process.exit(0);
  } catch (e) {
    logger.error('bad error in exiting Service', {
      err: e
    });
    process.exit(0);
  }
}

process.on('SIGTERM', graceFullShutdown);
process.on('SIGINT', graceFullShutdown);
process.on('SIGUSR1', graceFullShutdown);
