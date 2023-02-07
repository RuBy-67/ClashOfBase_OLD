const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const config = require('../../storage/config.json');
const dev = config.dev;

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('avatar', 'Fun', ['pdp', 'pp', 'profile']);
  }

  async run(client, message, args) {
    let mentionedUser = message.mentions.users.first() || message.author;

    let avatarembed = new Discord.MessageEmbed()
      .setImage(mentionedUser.displayAvatarURL())
      .setColor("RANDOM")
      .setFooter("Ask by " + message.author.tag, client.user.displayAvatarURL())
      .setDescription("Avatar of <@" + mentionedUser + ">"  + " | " + "[[Link]](" + mentionedUser.displayAvatarURL() + ")");
    message.channel.send(avatarembed);
  }
}