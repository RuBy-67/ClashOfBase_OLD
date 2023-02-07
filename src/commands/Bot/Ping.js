const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('ping', 'Bot', ['ms']);
  }

  async run(client, message, args) {
    message.channel.send("Calcul...").then(message => {message.edit(":ping_pong: Pong! The bot's latency is **" + Math.round(client.ws.ping) + " ms**.")});
  }
}