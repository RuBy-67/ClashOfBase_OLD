const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const config = require('../../storage/config.json');
const emo = require('../../storage/emoji.json')
const dev = config.dev;
const prefix = config.prefix;

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('bh7', 'Compos & Bases', []);
  }

  async run(client, message, args) {
    function emoji (id) {
      return client.emojis.cache.get(id).toString();
    };

    let m8embed = new Discord.MessageEmbed()
    .setTitle(`**CoB - Builder Hall 7 Compositions**`)
    .setFooter(`Clash of Base - Developped by ` + dev, client.user.displayAvatarURL())
    .setThumbnail("https://cdn.discordapp.com/attachments/671075545072533545/711607232093093908/711255643755118592.png")
    .setColor("RANDOM")
    .setDescription(`Here are the different Bh 7 compositions available.`)
    .addField(emoji(emo.bombea) + " Air:", "Loon Minions => `" + prefix + "bh7bg`")
    .addField(emoji(emo.mmortier) + " Ground:", "Barbars Archers => `" + prefix + "b7ba` \nBarbars Charettes => `" + prefix + "b7bc`\nBarbars Giants Charettes  => `" + prefix + "b7bgc`\nFull Barbars => `" + prefix + "b7b`")
    .addField(emoji(emo.mtesla) + " Hybrid:", "loon Witch Minions => `" + prefix + "b7bsg`\nMinions Witch => `" + prefix + "b7sg`")
    message.channel.send(m8embed)
  }
} 