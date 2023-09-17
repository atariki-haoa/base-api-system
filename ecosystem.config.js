// ecosystem.config.js
module.exports = {
  apps: [{
    name: 'events-back',
    script: './src/index.ts',
    exec_mode: 'cluster',
    instances: 2, // o "max"
    interpreter: 'node',
    exec_interpreter: 'ts-node',
  }],
};
