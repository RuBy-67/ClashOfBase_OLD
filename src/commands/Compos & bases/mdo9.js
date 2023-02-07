const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const config = require('../../storage/config.json');
const emo = require('../../storage/emoji.json')
const dev = config.dev;
const prefix = config.prefix;

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('bh9', 'Compos & Bases', []);
  }

  async run(client, message, args) {
    function emoji (id) {
      return client.emojis.cache.get(id).toString();
    };

    let m9embed = new Discord.MessageEmbed()
    .setTitle(`**CoB - Builder Hall 9 Compositions**`)
    .setFooter(`Clash of Base - Developped by ` + dev, client.user.displayAvatarURL())
    .setThumbnail("https://cdn.discordapp.com/attachments/671075545072533545/711607141248663662/711255699921043537.png")
    .setColor("RANDOM")
    .setDescription(`Here are the different Bh 9 compositions available.`)
    .addField(emoji(emo.bombea) + " Air:", "Baby Minions => `" + prefix + "b9bbg`\nloons Minions => `" + prefix + "b9bg`")
    .addField(emoji(emo.mmortier) + " Ground:", "Barbars Charettes => `" + prefix + "b9bc` \nBig Bart => `" + prefix + "b9bb`\nMass Pekkas => `" + prefix + "b9mp`\nPekkas Charettes => `" + prefix + "b9pc`")
    .addField(emoji(emo.mtesla) + " Hybrid:", "loons Minions Witch => `" + prefix + "b9bsg`\nPekkas Hogs => `" + prefix + "b9ph`")
    message.channel.send(m9embed)
  }
} 