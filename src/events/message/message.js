const BaseEvent = require('../../utils/structures/BaseEvent');
const config = require('../../storage/config.json');
const fs = require('fs');

module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message) {

    //let prefixes = JSON.parse(fs.readFileSync('../../storage/prefixes.json', 'utf8'))
    //if (!prefixes[msg.guild.id]) {
    //  prefixes[msg.guild.id] = {
    //    prefixes : config.prefix
    //  };
    //};
    //const prefix = prefixes[msg.guild.id].prefixes;
    const prefix = config.prefix;

    if (message.author.bot) return;
    if (message.content.startsWith(prefix)) {
      const [cmdName, ...cmdArgs] = message.content
      .slice(prefix.length)
      .trim()
      .split(/\s+/);
      const command = client.commands.get(cmdName);
      if (command) {
        command.run(client, message, cmdArgs);
      }
    }
  }
}