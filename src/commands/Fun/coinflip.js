const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const config = require('../../storage/config.json');
const dev = config.dev;

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('coinflip', 'Fun', ['cf', 'piece']);
  }

  async run(client, message, args) {
    const crep = ["Pile !", "Face !"];
    const cresult = Math.floor((Math.random() * crep.length));

    let flipembed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag)
      .setThumbnail('https://media.discordapp.net/attachments/671075545072533545/711599665442717726/tenor.gif')
      .setColor("RANDOM")
      .addField("The coin fell on ", crep[cresult])
      .setFooter("Clash of Base - Developped by " + dev, client.user.displayAvatarURL());
    message.channel.send(flipembed);
  }
}